(function ($) {
	"use strict";
	
	let exddaApp = {        

		/**
         * Main Menu 
         * @since 1.0.0
         * @return {mixed} 
         */
		mainMenu: function() {   
            $(".exdda-menu-bar").click( function() {
                $(".exdda-menu-content").addClass("menu-show");
            });

            $(".exdda-close-btn").click( function() {
                $(".exdda-menu-content").removeClass("menu-show");
            });

            function resized() {
                var $mobileMenu = $(".exdda-menu li a"),
                $menuOpen = $(window).width();
                if ($menuOpen <= 991) {
                    $mobileMenu.on("click", function() {
                        $(this).next().toggle();
                    });
                } 
            }
            resized();
        },

        /**
         * Alert box
         * @since 1.0.0
         * @return {mixed} 
         */
		alertBox: function() {   
             
        },


		/**
         * Library support
         * @since 1.0.0
         * @return {mixed} 
         */
		libSupport: function() {
             
        }, 
        /**
         * Conditional meta field
         * @since 1.0.0
         * @return {mixed} 
         */
		conditionalField: function() { 
 
        },

        /**
         * Ajax functions
         * @since 1.0.0
         * @return {mixed} 
         */
		ajaxEvent: function() { 
           
        }, 
 
		/* ---------------------------------------------
		 function initialize
		 --------------------------------------------- */
		initialize: function() { 
			exddaApp.mainMenu(); 
			exddaApp.alertBox(); 
			exddaApp.libSupport(); 
			exddaApp.conditionalField();  
			exddaApp.ajaxEvent();  
		}
	};
	/* ---------------------------------------------
	 Document ready function
	 --------------------------------------------- */
	$(function() {
		exddaApp.initialize();
	});

	$(window).on('load', function() {

	});
})(jQuery);