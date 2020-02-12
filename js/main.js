"use strict";
(function($, window, document, undefined) {

	$(function () {

		$('[data-toggle="tooltip"]').tooltip();
    
	    // dynamic replicate field
		$('.add-item').on('click', function (e) {
			e.preventDefault();
			var proposal = 	'<div class="replicate-inner clearfix">' +
								'<div class="proposal-left">' +
									'<input type="text" class="form-control description" placeholder="Enter your description">' +
								'</div>' +
								'<div class="proposal-right">' +
									'<input type="number" class="form-control amount additional" value="" placeholder="$ 100">' +
									'<button class="close bidding-close">×</button>' +
								'</div>'
							'</div>';
			$('.replicate').append(proposal);
		});

		// calculate dynamic value
		var total;
		$('body').on('input', '.amount', function () {
			total = 0;
			$('.amount').each(function () {
				var amountValue = parseFloat($(this).val());
				if ($.isNumeric(amountValue)) {
					total += amountValue;
				}
				if (! $(this).val()) {
		            $(this).addClass('error');
		        } else {
		            $(this).removeClass('error');
		        }
			});
			$('.total').val(total);
			$('.earn').val(total * .9);
		});

		$('body').on('input', '.description', function () {
			$('input.description').each(function () {
		        if (! $(this).val()) {
		            $(this).addClass('error');
		        } else {
		            $(this).removeClass('error');
		        }
		    });
		});

		// close dynamic field
		$('body').on('click', '.close', function () {
			$(this).parent().parent().remove();
			var newAmount = parseFloat($(this).prev().val());
			if (! newAmount) {
				$('.total').val(total);
				$('.earn').val(total * .9);
			} else {
				total -= newAmount;
				$('.total').val(total);
				$('.earn').val(total * .9);
			}
			if ($('.earn').val() === 'NaN') {
				$('.earn').val('');
			}
		});


		$('.send').on('click', function () {
			var amount = $('.amount');
			var description = $('.description');

	        if (! amount.val()) {
	            amount.addClass('error');
	        } else {
	            amount.removeClass('error');
	        }

	    	if (! $('.description').val()) {
		    	$('.description').removeClass('error');
		    } else {
		    	$('.description').removeClass('error');
		    }

		    for (var i = 0; i <= description.length; i++) {
		    	if (! $(description[i]).val()) {
		    		$(description[i]).val('Milestone request ' + (i + 1));
		    	}
		    }
		});

	    // manage transaction
	    var totalAmount;
	    function calculate(selector) {
	    	totalAmount = 0;
	    	$(selector).each(function () {
	    		totalAmount += parseFloat($(this).text());
	    	})
	    }

	    calculate('.milestone-amount');
		$('.total-milestone').text(totalAmount);
		var totalMilestone = totalAmount;

		calculate('.mrequest-amount');
		$('.total-mrequest').text(totalAmount);

		calculate('.withdrawls-amount');
		$('.total-withdrawls').text(totalAmount);

		calculate('.history-amount');
		$('.total-history').text(totalAmount);

		calculate('.affiliate-amount');
		$('.total-affiliate').text(totalAmount);

	    function toIntegerTM(element) {
	    	return parseFloat($.trim($(element).text()));
	    }

	    // income statement
	    var payment = toIntegerTM($('.payment'));
		var expenses = toIntegerTM($('.expenses'));
		var totalExpenses = payment + expenses;
		$('.totalExpenses').text(totalExpenses.toFixed(2));

		var earnings = toIntegerTM($('.earnings'));
		var otherIncome = toIntegerTM($('.other-income'));
		var costSales = toIntegerTM($('.cost-sales').text((totalExpenses.toFixed(2))));
		$('.gross-profit').text(earnings + otherIncome - costSales);

		// balance
	    var usd = $('.balance').text();
	    var pointUsd = $('.point-balance').text();
	    var balance = usd + '.' + pointUsd;
	    var totalBalance = parseFloat($.trim(balance));
	    
	    // net balance
	    var netBalance = $('.net-balance');
	    netBalance.text(totalBalance);
	    var receiveableMilestones = $('.receiveable-milestones');
	    receiveableMilestones.text(totalMilestone);

	    var totalUsd = toIntegerTM(netBalance) + toIntegerTM(receiveableMilestones);

	    $('.total-usd').text(totalUsd);

        // add milestone
        $('.add-milestone').on('click', function (e) {
			e.preventDefault();
			var milestone = '<div class="request-milestone">' +
								'<div class="request-title">' +
									'<h4 class="title">Request Milestone</h4>' +
									'<a class="close-milestone pull-right" href="#"><i class="icofont icofont-close"></i></a>' +
								'</div>' +
								'<form>' +
									'<div class="input-fields">' +
										'<div class="input-group">' +
											'<span class="input-group-addon">USD</span>' +
											'<input type="number" class="form-control">' +
										'</div>' +
										'<input type="text" class="form-control" placeholder="Enter your description here">' +
									'</div>' +
									'<div class="form-buttons">' +
										'<a href="#" class="button-ymp">Request Milestone</a>' +
										'<a href="#" class="button-ymp cancel">Cancel</a>' +
									'</div>' +
								'</form>' +
							'</div>';
			if ($('.milestone-wrapper').children().length > 1) {
				$('.request-milestone').append('');
			} else {
				$('.milestone-wrapper').append(milestone);
			}
		});

		$('body').on('click', '.cancel', function (e) {
			e.preventDefault();
			$(this).parent().parent().parent().remove();
		});

		$('body').on('click', '.close-milestone', function (e) {
			e.preventDefault();
			$(this).parent().parent().remove();
		});

	});

})(jQuery);

$(function () {
	// copy link
    $('.copy-link').on('click', function () {
		var text = $('<input>');
		$('body').append(text);
		text.val($('.text').text()).select();
		document.execCommand('copy');
		text.remove();
		$(this).text('Link copied');
		
		setTimeout(function () {
			$('.copy-link').text('Copy link');
		}, 2000);
	});
})

