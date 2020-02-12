"use strict";
$(function () {

	// chart
	var ctx = $("#month");
	var lineChart = new Chart(ctx, {
		type: 'line',
		data: {
			labels: ["01 Jan", "03 Jan", "06 Jan", "09 Jan", "12 Jan", "15 Jan", "18 Jan", "21 Jan", "24 Jan", "27 Jan", "30 Jan"],
			datasets: [
				{
					label: "Payments",
					data: [35, 9, 50, 27, 80, 10, 90, 50, 90,75,110],
					backgroundColor: "rgba(0,174,255,0.6)",
					borderColor: "transparent",
					pointRadius: 0,
					spanGaps: true,
				},
				{
					label: "Earning",
					data: [350, 90, 500, 270, 800, 100, 900, 500, 900,750,1100],
					backgroundColor: "rgba(50,210,201,0.6)",
					borderColor: "transparent",
					pointRadius: 0,
					spanGaps: true,
				}
			]
		},
		options: {
	        legend: {
	            display: true,
	            position: 'top',
	            reverse: true,
	            labels: {
	                fontColor: '#222'
	            }
	    	}
		}
	});



	var quarter = $("#quarter");
	var chartQuarter = new Chart(quarter, {
		type: 'line',
		data: {
			labels: ["Jan 01", "Jan 08", "Jan 15", "Jan 23","Jan 30", "Feb 06", 
			"Feb 13", "Feb 20", "Feb 27", "Mar 07", "Mar 14", "Mar 21"],
			datasets: [
				{
					label: "Payments",
					data: [450, 750, 700, 650, 850, 700, 900, 700, 650,750,700,950],
					backgroundColor: "rgba(0,174,255,0.6)",
					borderColor: "transparent",
					pointRadius: 0,
					spanGaps: true,
				},
				{
					label: "Earning",
					data: [900, 1500, 1400, 1300, 1700, 1400, 1800, 1400, 1100,1500,1400,1900],
					backgroundColor: "rgba(50,210,201,0.6)",
					borderColor: "transparent",
					pointRadius: 0,
					spanGaps: true,
				}
			]
		}
	});



	var halfYear = $("#half-year");
	var chartHalfYear = new Chart(halfYear, {
		type: 'line',
		data: {
			labels: ["Jan 01", "Jan 15", "Feb 01", "Feb 15","March 01", "March 15","April 01",
			 "April 15", "May 01", "May 15", "June 01", "June 15"],
			datasets: [
				{
					label: "Payments",
					data: [850, 650, 800, 750, 550, 800, 900, 600, 750,550,800,700],
					backgroundColor: "rgba(0,174,255,0.6)",
					borderColor: "transparent",
					pointRadius: 0,
					spanGaps: true,
				},
				{
					label: "Earning",
					data: [700, 900, 1200, 800, 1200, 900, 1200, 800, 1200,1100,900,1300],
					backgroundColor: "rgba(50,210,201,0.6)",
					borderColor: "transparent",
					pointRadius: 0,
					spanGaps: true,
				}
			]
		}
	});



	var year = $("#year");
	var chartYear = new Chart(year, {
		type: 'line',
		data: {
			labels: ["January", "February", "March", "April","May", "June", 
			"July", "August", "September", "October", "November", "December"],
			datasets: [
				{
					label: "Payments",
					data: [500, 750, 800, 650, 850, 700, 900, 700, 650,850,700,500],
					backgroundColor: "rgba(0,174,255,0.6)",
					borderColor: "transparent",
					pointRadius: 0,
					spanGaps: true,
				},
				{
					label: "Earning",
					data: [2000, 1000, 1400, 1300, 1700, 1400, 1800, 1400, 1000,1500,1400,1900],
					backgroundColor: "rgba(50,210,201,0.6)",
					borderColor: "transparent",
					pointRadius: 0,
					spanGaps: true,
				}
			]
		}
	});



	var twoYears = $("#two-years");
	var chartTwoYears = new Chart(twoYears, {
		type: 'line',
		data: {
			labels: ["Jan 2016", "Mar 2016", "May 2016", "July 2016","Sep 2016", "Dec 2016", 
			"Jan 2017", "Mar 2017", "May 2017", "July 2017", "Sep 2017", "Dec 2017"],
			datasets: [
				{
					label: "Payments",
					data: [150, 200, 50, 150, 250, 100, 200, 100, 300,150,400,50],
					backgroundColor: "rgba(0,174,255,0.6)",
					borderColor: "transparent",
					pointRadius: 0,
					spanGaps: true,
				},
				{
					label: "Earning",
					data: [300,400, 600, 500, 700, 500, 700, 900, 600,900,700,1000],
					backgroundColor: "rgba(50,210,201,0.6)",
					borderColor: "transparent",
					pointRadius: 0,
					spanGaps: true,
				}
			]
		}
	});

});