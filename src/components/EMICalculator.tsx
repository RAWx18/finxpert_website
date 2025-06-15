import React, { useState, useEffect } from 'react';
import { Calculator, PieChart, TrendingUp, Calendar, LineChart, BarChart3 } from 'lucide-react';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartOptions,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title
} from 'chart.js';
import { Pie, Line, Bar } from 'react-chartjs-2';

ChartJS.register(
  ArcElement, 
  Tooltip, 
  Legend, 
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title
);

interface MonthlySchedule {
  month: number;
  year: number;
  emi: number;
  principal: number;
  interest: number;
  balance: number;
  monthName: string;
}

interface YearlySchedule {
  year: number;
  totalEMI: number;
  totalPrincipal: number;
  totalInterest: number;
  closingBalance: number;
  totalPaidToDate: number;
}

const EMICalculator = () => {
  const [loanAmount, setLoanAmount] = useState(1000000);
  const [interestRate, setInterestRate] = useState(8.5);
  const [loanTenure, setLoanTenure] = useState(20);
  const [monthlyEMI, setMonthlyEMI] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);
  
  // New states for schedule
  const [startMonth, setStartMonth] = useState(new Date().getMonth() + 1);
  const [startYear, setStartYear] = useState(new Date().getFullYear());
  const [yearType, setYearType] = useState<'financial' | 'calendar'>('calendar');
  const [viewType, setViewType] = useState<'monthly' | 'yearly'>('monthly');
  const [monthlySchedule, setMonthlySchedule] = useState<MonthlySchedule[]>([]);
  const [yearlySchedule, setYearlySchedule] = useState<YearlySchedule[]>([]);
  const [showSchedule, setShowSchedule] = useState(false);

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const calculateEMI = () => {
    if (!loanAmount || !interestRate || !loanTenure) return;

    const monthlyRate = interestRate / (12 * 100);
    const totalMonths = loanTenure * 12;

    // EMI Calculation
    const emi = (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) / 
                (Math.pow(1 + monthlyRate, totalMonths) - 1);

    const totalPay = emi * totalMonths;
    const totalInt = totalPay - loanAmount;

    setMonthlyEMI(emi);
    setTotalPayment(totalPay);
    setTotalInterest(totalInt);

    // Generate schedules
    generateMonthlySchedule(loanAmount, monthlyRate, emi, totalMonths);
    generateYearlySchedule(loanAmount, monthlyRate, emi, totalMonths);
  };

  const generateMonthlySchedule = (principal: number, monthlyRate: number, emi: number, totalMonths: number) => {
    const schedule: MonthlySchedule[] = [];
    let balance = principal;
    let currentMonth = startMonth;
    let currentYear = startYear;

    for (let i = 0; i < Math.min(totalMonths, 240); i++) { // Show up to 20 years (240 months)
      const interestComponent = balance * monthlyRate;
      const principalComponent = emi - interestComponent;
      
      balance -= principalComponent;
      if (balance < 0) balance = 0;

      schedule.push({
        month: currentMonth,
        year: currentYear,
        emi: emi,
        principal: principalComponent,
        interest: interestComponent,
        balance: balance,
        monthName: monthNames[currentMonth - 1]
      });

      currentMonth++;
      if (currentMonth > 12) {
        currentMonth = 1;
        currentYear++;
      }

      if (balance <= 0) break;
    }

    setMonthlySchedule(schedule);
  };

  const generateYearlySchedule = (principal: number, monthlyRate: number, emi: number, totalMonths: number) => {
    const schedule: YearlySchedule[] = [];
    let balance = principal;
    let currentMonth = startMonth;
    let currentYear = startYear;
    let cumulativePaid = 0;
    let monthIndex = 0;

    // Determine the starting year for different year types
    const getYearForSchedule = (month: number, year: number) => {
      if (yearType === 'financial') {
        // Financial year starts from April
        return month >= 4 ? year : year - 1;
      } else {
        // Calendar year
        return year;
      }
    };

    const startingScheduleYear = getYearForSchedule(startMonth, startYear);

    for (let yearOffset = 0; yearOffset < Math.min(loanTenure, 20); yearOffset++) {
      let yearlyEMI = 0;
      let yearlyPrincipal = 0;
      let yearlyInterest = 0;
      let monthsProcessed = 0;

      const targetYear = startingScheduleYear + yearOffset;

      // Process months for this year
      while (monthIndex < totalMonths && balance > 0 && monthsProcessed < 12) {
        const scheduleYear = getYearForSchedule(currentMonth, currentYear);
        
        if (scheduleYear === targetYear) {
          const interestComponent = balance * monthlyRate;
          const principalComponent = emi - interestComponent;
          
          yearlyEMI += emi;
          yearlyPrincipal += principalComponent;
          yearlyInterest += interestComponent;
          balance -= principalComponent;
          monthsProcessed++;
        }

        // Move to next month
        currentMonth++;
        if (currentMonth > 12) {
          currentMonth = 1;
          currentYear++;
        }
        monthIndex++;

        // If we've moved to the next year, break
        if (scheduleYear !== targetYear && monthsProcessed > 0) {
          // Reset month and year for next iteration
          currentMonth--;
          if (currentMonth < 1) {
            currentMonth = 12;
            currentYear--;
          }
          monthIndex--;
          break;
        }
      }

      if (balance < 0) balance = 0;
      cumulativePaid += yearlyPrincipal + yearlyInterest;

      schedule.push({
        year: targetYear,
        totalEMI: yearlyEMI,
        totalPrincipal: yearlyPrincipal,
        totalInterest: yearlyInterest,
        closingBalance: balance,
        totalPaidToDate: cumulativePaid
      });

      if (balance === 0) break;
    }

    setYearlySchedule(schedule);
  };

  useEffect(() => {
    calculateEMI();
  }, [loanAmount, interestRate, loanTenure, startMonth, startYear, yearType]);

  const formatCurrency = (amount: number) => {
    return `₹${amount.toLocaleString('en-IN', { maximumFractionDigits: 0 })}`;
  };

  const principalPercentage = totalPayment > 0 ? (loanAmount / totalPayment) * 100 : 0;
  const interestPercentage = totalPayment > 0 ? (totalInterest / totalPayment) * 100 : 0;

  // Pie chart data
  const pieChartData = {
    labels: ['Principal', 'Interest'],
    datasets: [
      {
        data: [loanAmount, totalInterest],
        backgroundColor: ['#3B82F6', '#EF4444'],
        borderColor: ['#2563EB', '#DC2626'],
        borderWidth: 2,
        hoverBackgroundColor: ['#2563EB', '#DC2626'],
        hoverBorderWidth: 3,
      },
    ],
  };

  // Balance vs Time chart data - Fixed for consecutive years
  const balanceChartData = {
    labels: yearlySchedule.map(item => 
      yearType === 'financial' ? `FY ${item.year}-${item.year + 1}` : `${item.year}`
    ),
    datasets: [
      {
        label: 'Outstanding Balance',
        data: yearlySchedule.map(item => item.closingBalance),
        borderColor: '#3B82F6',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        borderWidth: 3,
        fill: true,
        tension: 0.4,
        pointBackgroundColor: '#3B82F6',
        pointBorderColor: '#ffffff',
        pointBorderWidth: 2,
        pointRadius: 6,
      },
    ],
  };

  // 5-year value breakdown chart - Fixed for consecutive years
  const fiveYearData = {
    labels: yearlySchedule.slice(0, 5).map(item => 
      yearType === 'financial' ? `FY ${item.year}-${item.year + 1}` : `${item.year}`
    ),
    datasets: [
      {
        label: 'Principal',
        data: yearlySchedule.slice(0, 5).map(item => item.totalPrincipal),
        backgroundColor: '#3B82F6',
        borderColor: '#2563EB',
        borderWidth: 1,
      },
      {
        label: 'Interest',
        data: yearlySchedule.slice(0, 5).map(item => item.totalInterest),
        backgroundColor: '#EF4444',
        borderColor: '#DC2626',
        borderWidth: 1,
      },
    ],
  };

  const chartOptions: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            return `${context.dataset.label}: ${formatCurrency(context.parsed.y)}`;
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function(value) {
            return formatCurrency(Number(value));
          },
        },
      },
    },
  };

  const barChartOptions: ChartOptions<'bar'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            return `${context.dataset.label}: ${formatCurrency(context.parsed.y)}`;
          },
        },
      },
    },
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
        beginAtZero: true,
        ticks: {
          callback: function(value) {
            return formatCurrency(Number(value));
          },
        },
      },
    },
  };

  return (
    <section className="py-16 md:py-24 bg-gray-50" id="emi-calculator">
      <div className="section-container">
        <div className="text-center mb-16">
          <div className="finxpert-chip mx-auto mb-6">
            <Calculator className="w-4 h-4 mr-2" />
            <span>EMI Calculator</span>
          </div>
          <h2 className="section-title mb-4">Calculate Your Loan EMI</h2>
          <p className="section-subtitle mx-auto">
            Get instant EMI calculations and detailed payment breakdown for your loan planning.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Calculator Input and Results */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 mb-8">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Input Section */}
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <TrendingUp className="w-6 h-6 mr-2 text-finxpert-500" />
                  Loan Details
                </h3>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Loan Amount (₹)
                    </label>
                    <input 
                      type="number" 
                      value={loanAmount}
                      onChange={(e) => setLoanAmount(Number(e.target.value))}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-finxpert-500 focus:border-transparent transition-all duration-300" 
                      placeholder="1000000"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Interest Rate (% per annum)
                    </label>
                    <input 
                      type="number" 
                      value={interestRate}
                      onChange={(e) => setInterestRate(Number(e.target.value))}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-finxpert-500 focus:border-transparent transition-all duration-300" 
                      placeholder="8.5" 
                      step="0.1"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Loan Tenure (Years)
                    </label>
                    <input 
                      type="number" 
                      value={loanTenure}
                      onChange={(e) => setLoanTenure(Number(e.target.value))}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-finxpert-500 focus:border-transparent transition-all duration-300" 
                      placeholder="20"
                    />
                  </div>
                  
                  {/* Start Date Selection */}
                  <div className="border-t pt-4">
                    <h4 className="font-semibold text-gray-800 mb-4 flex items-center">
                      <Calendar className="w-5 h-5 mr-2 text-finxpert-500" />
                      EMI Start Date
                    </h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Month</label>
                        <select 
                          value={startMonth}
                          onChange={(e) => setStartMonth(Number(e.target.value))}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-finxpert-500 focus:border-transparent"
                        >
                          {monthNames.map((month, index) => (
                            <option key={index} value={index + 1}>{month}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Year</label>
                        <input 
                          type="number" 
                          value={startYear}
                          onChange={(e) => setStartYear(Number(e.target.value))}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-finxpert-500 focus:border-transparent" 
                          min="2020"
                          max="2050"
                        />
                      </div>
                    </div>
                    
                    {/* Year Type Selection */}
                    <div className="mt-4">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Year Type</label>
                      <div className="flex space-x-4">
                        <label className="flex items-center">
                          <input 
                            type="radio" 
                            value="calendar"
                            checked={yearType === 'calendar'}
                            onChange={(e) => setYearType(e.target.value as 'calendar' | 'financial')}
                            className="mr-2"
                          />
                          Calendar Year
                        </label>
                        <label className="flex items-center">
                          <input 
                            type="radio" 
                            value="financial"
                            checked={yearType === 'financial'}
                            onChange={(e) => setYearType(e.target.value as 'calendar' | 'financial')}
                            className="mr-2"
                          />
                          Financial Year
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Results Section */}
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <PieChart className="w-6 h-6 mr-2 text-finxpert-500" />
                  EMI Breakdown
                </h3>
                <div className="space-y-4">
                  <div className="bg-finxpert-50 p-6 rounded-xl border border-finxpert-100">
                    <div className="text-sm text-finxpert-600 font-medium">Monthly EMI</div>
                    <div className="text-3xl font-bold text-finxpert-700">{formatCurrency(monthlyEMI)}</div>
                  </div>
                  <div className="bg-green-50 p-4 rounded-xl border border-green-100">
                    <div className="text-sm text-green-600 font-medium">Total Interest Payable</div>
                    <div className="text-xl font-bold text-green-700">{formatCurrency(totalInterest)}</div>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-xl border border-purple-100">
                    <div className="text-sm text-purple-600 font-medium">Total Payment (Principal + Interest)</div>
                    <div className="text-xl font-bold text-purple-700">{formatCurrency(totalPayment)}</div>
                  </div>
                </div>

                {/* Pie Chart */}
                <div className="mt-6 bg-gray-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4 text-center">Payment Breakdown</h4>
                  <div className="h-64 flex items-center justify-center">
                    {totalPayment > 0 ? (
                      <Pie data={pieChartData} options={{
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: {
                          legend: {
                            position: 'bottom',
                            labels: {
                              padding: 20,
                              font: { size: 14, weight: 500 },
                              usePointStyle: true,
                              pointStyle: 'circle',
                            },
                          },
                          tooltip: {
                            callbacks: {
                              label: function(context) {
                                const label = context.label || '';
                                const value = context.parsed;
                                const total = context.dataset.data.reduce((a: number, b: number) => a + b, 0);
                                const percentage = ((value / total) * 100).toFixed(1);
                                return `${label}: ${formatCurrency(value)} (${percentage}%)`;
                              },
                            },
                          },
                        },
                      }} />
                    ) : (
                      <div className="text-gray-500 text-center">
                        <PieChart className="w-12 h-12 mx-auto mb-2 opacity-50" />
                        <p>Enter loan details to see breakdown</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Charts Section */}
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <LineChart className="w-6 h-6 mr-2 text-finxpert-500" />
                  Balance Overview
                </h3>
                
                {/* 20-Year Balance Chart */}
                <div className="bg-gray-50 p-6 rounded-xl mb-4">
                  <h4 className="font-semibold text-gray-800 mb-4 text-center">Outstanding Balance (20 Years)</h4>
                  <div className="h-48">
                    {yearlySchedule.length > 0 ? (
                      <Line data={balanceChartData} options={chartOptions} />
                    ) : (
                      <div className="flex items-center justify-center h-full text-gray-500">
                        <LineChart className="w-8 h-8 opacity-50" />
                      </div>
                    )}
                  </div>
                </div>

                {/* 5-Year Value Breakdown */}
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4 text-center">5-Year Payment Breakdown</h4>
                  <div className="h-48">
                    {yearlySchedule.length > 0 ? (
                      <Bar data={fiveYearData} options={barChartOptions} />
                    ) : (
                      <div className="flex items-center justify-center h-full text-gray-500">
                        <BarChart3 className="w-8 h-8 opacity-50" />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* EMI Payment Schedule (Single Combined Table - 20 Years Max) */}
          <div className="bg-white rounded-3xl shadow-2xl p-8">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800">EMI Payment Schedule (20 Years)</h3>
              <div className="flex space-x-4">
                <div className="flex space-x-2">
                  <button
                    onClick={() => setViewType('monthly')}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      viewType === 'monthly'
                        ? 'bg-finxpert-500 text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    Monthly
                  </button>
                  <button
                    onClick={() => setViewType('yearly')}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      viewType === 'yearly'
                        ? 'bg-finxpert-500 text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    Yearly
                  </button>
                </div>
                <button
                  onClick={() => setShowSchedule(!showSchedule)}
                  className="bg-finxpert-500 text-white px-6 py-2 rounded-lg hover:bg-finxpert-600 transition-all duration-300"
                >
                  {showSchedule ? 'Hide' : 'Show'} Schedule
                </button>
              </div>
            </div>

            {showSchedule && (
              <div className="overflow-x-auto max-h-96 overflow-y-auto">
                {viewType === 'monthly' ? (
                  <table className="w-full text-left border-collapse">
                    <thead className="sticky top-0 bg-white">
                      <tr className="bg-finxpert-50">
                        <th className="border border-gray-300 px-4 py-3 font-semibold text-gray-700">Month/Year</th>
                        <th className="border border-gray-300 px-4 py-3 font-semibold text-gray-700">EMI</th>
                        <th className="border border-gray-300 px-4 py-3 font-semibold text-gray-700">Principal</th>
                        <th className="border border-gray-300 px-4 py-3 font-semibold text-gray-700">Interest</th>
                        <th className="border border-gray-300 px-4 py-3 font-semibold text-gray-700">Balance</th>
                      </tr>
                    </thead>
                    <tbody>
                      {monthlySchedule.map((row, index) => (
                        <tr key={index} className="hover:bg-gray-50 transition-colors duration-200">
                          <td className="border border-gray-300 px-4 py-3 font-medium">
                            {row.monthName} {row.year}
                          </td>
                          <td className="border border-gray-300 px-4 py-3">{formatCurrency(row.emi)}</td>
                          <td className="border border-gray-300 px-4 py-3">{formatCurrency(row.principal)}</td>
                          <td className="border border-gray-300 px-4 py-3">{formatCurrency(row.interest)}</td>
                          <td className="border border-gray-300 px-4 py-3">{formatCurrency(row.balance)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : (
                  <table className="w-full text-left border-collapse">
                    <thead className="sticky top-0 bg-white">
                      <tr className="bg-finxpert-50">
                        <th className="border border-gray-300 px-4 py-3 font-semibold text-gray-700">
                          {yearType === 'financial' ? 'Financial Year' : 'Calendar Year'}
                        </th>
                        <th className="border border-gray-300 px-4 py-3 font-semibold text-gray-700">Principal (A)</th>
                        <th className="border border-gray-300 px-4 py-3 font-semibold text-gray-700">Interest (B)</th>
                        <th className="border border-gray-300 px-4 py-3 font-semibold text-gray-700">Total Payment (A + B)</th>
                        <th className="border border-gray-300 px-4 py-3 font-semibold text-gray-700">Balance</th>
                        <th className="border border-gray-300 px-4 py-3 font-semibold text-gray-700">Loan Paid To Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {yearlySchedule.map((row, index) => (
                        <tr key={index} className="hover:bg-gray-50 transition-colors duration-200">
                          <td className="border border-gray-300 px-4 py-3 font-medium">
                            {yearType === 'financial' ? `FY ${row.year}-${row.year + 1}` : row.year}
                          </td>
                          <td className="border border-gray-300 px-4 py-3">{formatCurrency(row.totalPrincipal)}</td>
                          <td className="border border-gray-300 px-4 py-3">{formatCurrency(row.totalInterest)}</td>
                          <td className="border border-gray-300 px-4 py-3">{formatCurrency(row.totalPrincipal + row.totalInterest)}</td>
                          <td className="border border-gray-300 px-4 py-3">{formatCurrency(row.closingBalance)}</td>
                          <td className="border border-gray-300 px-4 py-3">{formatCurrency(row.totalPaidToDate)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EMICalculator;