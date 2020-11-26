(function() {
            var elem = document.getElementById('hero-heading');
            var nav = document.getElementsByTagName('nav')[0];
            var navMain = document.getElementsByTagName('nav')[0];
            var navi = document.getElementById('navi');
            var menu = document.querySelector('.menu');
            var ulHeight = getStyle(navi, 'height');
            
            function getHeight(elem) {
                if(getStyle(elem, 'display') != 'none') {
                    return elem.offsetHeight || getStyle(elem, 'height');
                }
            }
    
            function getStyle(elem, name) {
                    
                    // Check if the property exists
                    if(elem.style[name]) {
                        return elem.style[name];
                    } else if (elem.currentStyle) {
                        return elem.currentStyle[name];
                    } else if (document.defaultView && document.defaultView.getComputedStyle) {
//                        name = name;
                        name = name.replace(/[A-Z]/g, "-$1");
                        name = name.toLowerCase();
                        console.log(name);
                        
                        var s = document.defaultView.getComputedStyle(elem,"");
                        return s && s.getPropertyValue(name);
                    }
                }
            centerElement = function(){
                
//                var heroHeight = getStyle(elem, "height").replace("px","");
//                var navHeight = getStyle(nav, "height").replace("px","");
                var heroHeight = getHeight(elem);
                var navHeight = getHeight(nav);
                heroHeight = parseInt(heroHeight);
                navHeight = parseInt(navHeight);
                var wh = window.innerHeight;
                who = (wh - navHeight) / 2;
                padValue = heroHeight / 2;
                totalValue = who - padValue;
                if (heroHeight > wh - navHeight - 10) {
                    totalValue = 10 + "px";
                    elem.style.marginTop = totalValue;
                } else {
//                totalValue = who - padValue + "px";
                elem.style.marginTop = totalValue + "px";
                }
                if (window.innerWidth < 1200) {
                    var newVal = totalValue + navHeight;
                    elem.style.marginTop = totalValue + parseInt(navHeight) + "px";
                }
                console.log("Window Height " + wh);
                console.log("Hero Height " + heroHeight);
                console.log("Nav Height " + navHeight);
            };
            
            console.log(ulHeight);
            console.log(nav);
            function menuAnimate() {
                console.log(getStyle(menu, 'height'));
                if (getStyle(menu, 'height').replace("px", "") == 0) {
                    menu.classList.add('animate-menu');
                    navi.classList.add('animate-nav');

                } else {                    
                    menu.classList.remove('animate-menu');
                    navi.classList.remove('animate-nav');                    
                }   
            }
            
            function removeMenu() {
                if (window.innerWidth >= 1200) {
                    menu.classList.remove('animate-menu');
                    navi.classList.remove('animate-nav');
                    nav.classList.remove('fixed');
                    
                } else {
                    nav.classList.add('fixed');
                }
            };
            window.addEventListener('load', centerElement, false);
            window.addEventListener('resize', function(){
                centerElement();
                removeMenu();
            });
            
            
            
            var resizeTimeout;
            function resizeThrottler () {
                if(!resizeTimeout) {
                    resizeTimeout = setTimeout(function() {
                        resizeTimeout = null;
                        centerElement();
                    }, 66);
                }
            }
            
            
            var button = document.getElementById('mobile-menu');
            button.addEventListener('click', function(){
               menuAnimate();
            });
            })();