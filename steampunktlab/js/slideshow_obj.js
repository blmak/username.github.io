	function Slideshow(slideshowData, target) {
			this.slideshowData = slideshowData;
			this.activePage = 0;
			this.slideshowLength = slideshowData.length;
			this.loadShow = function slideshowLoad() {
				this.clickRight();
			}
			this.clickRight = function clickRight() {
				$('div.image').toggleClass("inactive");
				$("div.image").fadeToggle(200, "linear", function(){
					$('button').removeAttr('disabled');
					$('button').css({'display': 'block'});
				});
				$(".inactive").html('<img src="'+slideshowData[this.activePage].image+'">');
				$("#pagecount").html("Page " + (this.activePage+1) + " of "+ this.slideshowLength);
				if(this.activePage==this.slideshowLength-1){
					this.activePage = 0;
				}
	  		else {
		  		this.activePage++;
	  		}
			}
			this.clickLeft = function clickRight() {
				if(this.activePage == 0){
					this.activePage = this.slideshowLength-2;
				}
				else if(this.activePage == 1){
					this.activePage = this.slideshowLength-1;
				}
	  		else {
		  		this.activePage=this.activePage-2;
	  		}
				this.clickRight();
			}
		}

		$(document).ready(function() {
			var content=[{"name": "this is content 1","image": "1_manatee.jpg"},{"name": "this is content 2","image": "2_manatee.jpg"},{"name": "this is content 3","image": "3_manatee.jpg"},{"name": "this is content 4","image": "4_manatee.jpg"},{"name": "this is content 5","image": "5_manatee.jpg"},];
			var slideShow = new Slideshow(content);
			slideShow.loadShow();

			$("button.right").click(function () {
				$('button').css({'display': 'none'});
				$('button').attr('disabled', true);
				slideShow.clickRight();
			});

			$("button.left").click(function () {
				slideShow.clickLeft();
			});
		});
