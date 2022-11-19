(()=>{"use strict";var n,t={756:(n,t,A)=>{A.d(t,{Z:()=>C});var e=A(537),i=A.n(e),r=A(645),o=A.n(r)()(i());o.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap);"]),o.push([n.id,"* {\n\tpadding: 0;\n\tmargin: 0;\n\tbox-sizing: border-box;\n\tfont-family: 'Quicksand', sans-serif;\n}\n\nbody, html {\n\tmargin: 0;\n\tpadding: 0;\n\twidth: 100%;\n\theight: 100%;\n}\n\nbody {\n\tfont-size: 12px;\n\tcolor: #424242;\n}\n\n.nav_menu {\n\tpadding: 8px;\n\tbackground-color: #2F8F9D;\n\tdisplay: grid;\n\tgrid-template-columns: auto 1fr auto;\n\tgap: 10px;\n\tposition: sticky;\n\ttop: 0;\n\tz-index: 99;\n}\n\n.nav-icon {\n  display: flex;\n\talign-items: center;\n}\n\n.nav-icon button {\n\tbackground-color: transparent;\n\tborder: none;\n\tfont-size: 18px;\n\tpadding: 10px 14px;\n\tcursor: pointer;\n\tcolor: white;\n}\n\n.logo-mob {\n\tdisplay: flex;\n\talign-items: center;\n  \n}\n\n.logo-mob h1{\n\tfont-size: 22px;\n\tcolor : white;\n\tfont-weight: 600;\n}\n\n.nav-mob {\n\tposition: absolute;\n  top: 60px;\n  left: -180px;\n  width: 170px;\n  transition: all 0.3s;\n  padding: 8px;\n  background-color: #fff;\n  overflow: hidden;\n}\n\n.nav-mob.open {\n\tleft: 0;\n}\n\n.nav-mob ul li a {\n\tfont-size: 18px;\n\tdisplay: inline-block;\n\ttext-decoration: none;\n\tcolor: black;\n\tpadding: 11px 12px;\n\tmargin-bottom: 5px;\n\twidth: 100%;\n}\n\n.nav-mob a:hover {\n  color: #424242;\n\ttext-decoration: none;\n}\n\n.hero {\n\tdisplay: flex;\n\theight: 325px;\n\talign-items: center;\n\ttext-align: left;\n\toverflow: hidden;\n\tbackground-position: center;\n\tbackground-color: Black;\n}\n\n.hero picture {\n\tfilter: brightness(60%);\n\theight: 325px;\n\twidth: 100%;\n\tbackground-size: cover;\n\tobject-fit: cover;\n\tobject-position: center;\n}\n\n.hero picture img,\n.hero picture source {\n\theight: 325px;\n\twidth: 100%;\n  background-size: cover;\n\tobject-fit: cover;\n\tobject-position: center;\n}\n\n.hero__inner {\n\tposition: absolute;\n\tmargin-left: 5rem;\n\tmax-width: 800px;\n}\n\n.hero__title {\n\tcolor: #fff;\n\tfont-weight: 600;\n\tfont-size: 36px;\n\ttext-shadow: 1px 1px #141414;\n}\n\n.hero__tagline {\n\tcolor: #fff;\n\tmargin-top: 16px;\n\tfont-size: 18px;\n\tfont-weight: 600;\n\ttext-shadow: 1px 1px #141414;\n}\n\nmain {\n\twidth: 100%;\n\tmargin: 0 auto;\n}\n\n.content {\n\tpadding: 32px;\n}\n\n.latest {\n\twidth: 100%;\n\tmargin-top: 30px;\n\tmargin-bottom: 50px;\n\ttext-align: center;\n}\n\n.latest h1 {\n\tfont-weight: 700;\n\tfont-size: 2em;\n\tmargin-bottom: 50px;\n}\n\n.lists {\n\tmargin: 32px auto auto;\n\ttext-align: left;\n\tdisplay: grid;\n\tgrid-row-gap: 16px;\n}\n\n.list__item {\n\tbox-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n\twidth: 100%;\n\tborder-radius: 5px;\n\toverflow: hidden;\n\tposition: relative;\n}\n\n.list__item-thumb {\n  width: 100%;\n  height: 200px;\n\tbackground-size: cover;\n\tobject-fit: cover;\n\tobject-position: center;\n}\n\n.list__item-content {\n\tpadding: 16px;\n}\n\n.list__item-title {\n\tfont-weight: 700;\n\tfont-size: 24px;\n\tmargin-bottom: 10px;\n  margin-top: 10px;\n}\n\n.list__item-title a {\n  padding: 10px 0 10px 0;\n\ttext-decoration: none;\n\tcolor: inherit\n}\n\n.list__item-title:hover {\n\topacity: 0.5\n}\n\n.list__item-desc {\n\tfont-size: 12px;\n\tline-height: 1.5em;\n}\n\n.list__item-city {\n  position: absolute;\n\ttop: 10px;\n\tleft: 0px;\n\tborder-radius: 0px 5px 5px 0px;\n\tbackground-color: #2F8F9D;\n\tpadding: 5px 10px 5px;\n\tcolor: white;\n  font-size: 14px;\n\tfont-weight: 500;\n}\n\n.list__item-rating {\n\tfont-size: 12px;\n\ttext-transform: uppercase;\n\tcolor: #999;\n\tfont-weight: 500;\n}\n\n.list__item-rating span {\n\tcolor: red;\n\ttext-decoration: none;\n}\n\n.card {\n\twidth: 100%;\n\tmargin: 15px auto;\n\ttext-align: center;\n\t/* margin-top: 90px; */\n}\n\n.card__label {\n\tfont-size: 32px;\n}\n\n.detail {\n\tmargin-top: 32px;\n}\n\n.restaurant-picture {\n\twidth: 100%;\n\theight: 350px;\n\tbackground-size: cover;\n\tobject-fit: cover;\n\tobject-position: center;\n}\n\n.detailRestaurant {\n\tdisplay: grid;\n\ttext-align: left;\n}\n\n.detailRestaurant h2{\n\tfont-size: 1.8em;\n\tmargin-top: 5px;\n}\n\n.detailRestaurant p{\n\tfont-size: 1.3em;\n}\n\n.restaurant-description-title {\n\ttext-align: center;\n}\n\n.restaurant-description {\n\ttext-align: justify;\n\tmargin-bottom: 10px;\n}\n\n.detailRestaurant-menu h2{\n\tfont-size: 1.8em;\n}\n\n.restaurant-menu ul {\n\ttext-align: center;\n\tmargin: 0 auto;\n}\n\n.restaurant-menu li{\n\ttext-align: left;\n}\n\n.restaurant-menu h3{\n\tmargin-top: 5px;\n\ttext-align: center;\n\tfont-size: 1.6em;\n}\n\n.restaurant-menu p{\n\tfont-size: 1.4em;\n}\n\n.review-title {\n\tmargin-top: 10px;\n\tfont-size: 1.8em;\n}\n\n.restaurant-review {\n\tpadding: 10px 20px;\n\tmargin-bottom: 20px;\n}\n\n.restaurant-review:hover {\n\tbox-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n\ttransition: transform 0.5s ease;\n}\n\n.review-header {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\tborder-bottom: 1px solid black;\n\tpadding-bottom: 10px;\n\tfont-size: 1.35em;\n}\n\n.review-name {\n\tfont-weight: bold;\n\ttext-align: left;\n}\n\n.review-comment {\n\ttext-align: left;\n\tpadding-top: 10px;\n\tfont-size: 1.35em;\n}\n\n.form-review {\n\tpadding: 10px 20px;\n\tborder: 1px solid black;\n\tborder-radius: 5px;\n}\n\n.form-review h2 {\n\tfont-size: 1.8em;\n\tpadding-bottom: 10px;\n}\n\n.form-group {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n}\n\n.form-group label {\n\tfont-weight: 500;\n\tfont-size: 1.5em;\n}\n\n.form-control {\n\twidth: 80%;\n\tpadding: 5px;\n\tmargin: 5px;\n\tfont-size: 1rem;\n\tmin-height: 44px;\n\tborder: 1px solid black;\n\tborder-radius: 5px;\n}\n\n.form-group-submit {\n\tmargin: 5px;\n\tdisplay: flex;\n\tjustify-content: right;\n\talign-items: center;\n}\n\n.submitReview {\n\tmargin-top: 5px;\n\tpadding: 11px;\n\tbackground-color: white;\n\tfont-size: 1rem;\n\tfont-weight: 700;\n\tcursor: pointer;\n\tborder: 1px solid black;\n\tborder-radius: 5px;\n}\n\n.like {\n  width: 55px;\n  height: 55px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #db0000;\n  \n  position: fixed;\n  bottom: 16px;\n  right: 16px;\n  border-radius: 50%;\n  border: 0;\n  \n  font-size: 18px;\n  color: white;\n  cursor: pointer;\n}\n\nfooter {\n\tbackground-color: #2F8F9D;\n\tcolor: white;\n\tfont-size: 14px;\n\tpadding: 20px;\n\twidth: 100%;\n\ttext-align: center;\n}\n\n.skip-link {\n\tposition: absolute;\n\ttop: -70px;\n\tleft: 0;\n\tbackground-color: #bf1722;\n\tcolor: white;\n\tpadding: 10px;\n\tfont-size: 20px;\n\tz-index: 100;\n\ttext-decoration: none;\n}\n\n.skip-link:focus {\n\ttop: 70px;\n}\n\n.loader-container {\n  position: fixed;\n  background-color: rgba(54, 53, 53, 0.8);\n  width: 100%;\n  height: 100vh;\n  z-index: 99;\n  top: 0;\n  display: block;\n}\n\n#loader {\n  position: fixed;\n  left: 50%;\n  top: 50%;\n  z-index: 1;\n  width: 120px;\n  height: 120px;\n  margin: -76px 0 0 -76px;\n  border: 16px solid #f3f3f3;\n  border-radius: 50%;\n  border-top: 16px solid #303030;\n  -webkit-animation: spin 2s linear infinite;\n  animation: spin 2.5s linear infinite;\n}\n\n@-webkit-keyframes spin {\n  0% { -webkit-transform: rotate(0deg); }\n  100% { -webkit-transform: rotate(360deg); }\n}\n\n@keyframes spin {\n  0% { transform: rotate(0deg); }\n  100% { transform: rotate(360deg); }\n}","",{version:3,sources:["webpack://./src/styles/main.css"],names:[],mappings:"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",sourcesContent:["@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap');\n\n* {\n\tpadding: 0;\n\tmargin: 0;\n\tbox-sizing: border-box;\n\tfont-family: 'Quicksand', sans-serif;\n}\n\nbody, html {\n\tmargin: 0;\n\tpadding: 0;\n\twidth: 100%;\n\theight: 100%;\n}\n\nbody {\n\tfont-size: 12px;\n\tcolor: #424242;\n}\n\n.nav_menu {\n\tpadding: 8px;\n\tbackground-color: #2F8F9D;\n\tdisplay: grid;\n\tgrid-template-columns: auto 1fr auto;\n\tgap: 10px;\n\tposition: sticky;\n\ttop: 0;\n\tz-index: 99;\n}\n\n.nav-icon {\n  display: flex;\n\talign-items: center;\n}\n\n.nav-icon button {\n\tbackground-color: transparent;\n\tborder: none;\n\tfont-size: 18px;\n\tpadding: 10px 14px;\n\tcursor: pointer;\n\tcolor: white;\n}\n\n.logo-mob {\n\tdisplay: flex;\n\talign-items: center;\n  \n}\n\n.logo-mob h1{\n\tfont-size: 22px;\n\tcolor : white;\n\tfont-weight: 600;\n}\n\n.nav-mob {\n\tposition: absolute;\n  top: 60px;\n  left: -180px;\n  width: 170px;\n  transition: all 0.3s;\n  padding: 8px;\n  background-color: #fff;\n  overflow: hidden;\n}\n\n.nav-mob.open {\n\tleft: 0;\n}\n\n.nav-mob ul li a {\n\tfont-size: 18px;\n\tdisplay: inline-block;\n\ttext-decoration: none;\n\tcolor: black;\n\tpadding: 11px 12px;\n\tmargin-bottom: 5px;\n\twidth: 100%;\n}\n\n.nav-mob a:hover {\n  color: #424242;\n\ttext-decoration: none;\n}\n\n.hero {\n\tdisplay: flex;\n\theight: 325px;\n\talign-items: center;\n\ttext-align: left;\n\toverflow: hidden;\n\tbackground-position: center;\n\tbackground-color: Black;\n}\n\n.hero picture {\n\tfilter: brightness(60%);\n\theight: 325px;\n\twidth: 100%;\n\tbackground-size: cover;\n\tobject-fit: cover;\n\tobject-position: center;\n}\n\n.hero picture img,\n.hero picture source {\n\theight: 325px;\n\twidth: 100%;\n  background-size: cover;\n\tobject-fit: cover;\n\tobject-position: center;\n}\n\n.hero__inner {\n\tposition: absolute;\n\tmargin-left: 5rem;\n\tmax-width: 800px;\n}\n\n.hero__title {\n\tcolor: #fff;\n\tfont-weight: 600;\n\tfont-size: 36px;\n\ttext-shadow: 1px 1px #141414;\n}\n\n.hero__tagline {\n\tcolor: #fff;\n\tmargin-top: 16px;\n\tfont-size: 18px;\n\tfont-weight: 600;\n\ttext-shadow: 1px 1px #141414;\n}\n\nmain {\n\twidth: 100%;\n\tmargin: 0 auto;\n}\n\n.content {\n\tpadding: 32px;\n}\n\n.latest {\n\twidth: 100%;\n\tmargin-top: 30px;\n\tmargin-bottom: 50px;\n\ttext-align: center;\n}\n\n.latest h1 {\n\tfont-weight: 700;\n\tfont-size: 2em;\n\tmargin-bottom: 50px;\n}\n\n.lists {\n\tmargin: 32px auto auto;\n\ttext-align: left;\n\tdisplay: grid;\n\tgrid-row-gap: 16px;\n}\n\n.list__item {\n\tbox-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n\twidth: 100%;\n\tborder-radius: 5px;\n\toverflow: hidden;\n\tposition: relative;\n}\n\n.list__item-thumb {\n  width: 100%;\n  height: 200px;\n\tbackground-size: cover;\n\tobject-fit: cover;\n\tobject-position: center;\n}\n\n.list__item-content {\n\tpadding: 16px;\n}\n\n.list__item-title {\n\tfont-weight: 700;\n\tfont-size: 24px;\n\tmargin-bottom: 10px;\n  margin-top: 10px;\n}\n\n.list__item-title a {\n  padding: 10px 0 10px 0;\n\ttext-decoration: none;\n\tcolor: inherit\n}\n\n.list__item-title:hover {\n\topacity: 0.5\n}\n\n.list__item-desc {\n\tfont-size: 12px;\n\tline-height: 1.5em;\n}\n\n.list__item-city {\n  position: absolute;\n\ttop: 10px;\n\tleft: 0px;\n\tborder-radius: 0px 5px 5px 0px;\n\tbackground-color: #2F8F9D;\n\tpadding: 5px 10px 5px;\n\tcolor: white;\n  font-size: 14px;\n\tfont-weight: 500;\n}\n\n.list__item-rating {\n\tfont-size: 12px;\n\ttext-transform: uppercase;\n\tcolor: #999;\n\tfont-weight: 500;\n}\n\n.list__item-rating span {\n\tcolor: red;\n\ttext-decoration: none;\n}\n\n.card {\n\twidth: 100%;\n\tmargin: 15px auto;\n\ttext-align: center;\n\t/* margin-top: 90px; */\n}\n\n.card__label {\n\tfont-size: 32px;\n}\n\n.detail {\n\tmargin-top: 32px;\n}\n\n.restaurant-picture {\n\twidth: 100%;\n\theight: 350px;\n\tbackground-size: cover;\n\tobject-fit: cover;\n\tobject-position: center;\n}\n\n.detailRestaurant {\n\tdisplay: grid;\n\ttext-align: left;\n}\n\n.detailRestaurant h2{\n\tfont-size: 1.8em;\n\tmargin-top: 5px;\n}\n\n.detailRestaurant p{\n\tfont-size: 1.3em;\n}\n\n.restaurant-description-title {\n\ttext-align: center;\n}\n\n.restaurant-description {\n\ttext-align: justify;\n\tmargin-bottom: 10px;\n}\n\n.detailRestaurant-menu h2{\n\tfont-size: 1.8em;\n}\n\n.restaurant-menu ul {\n\ttext-align: center;\n\tmargin: 0 auto;\n}\n\n.restaurant-menu li{\n\ttext-align: left;\n}\n\n.restaurant-menu h3{\n\tmargin-top: 5px;\n\ttext-align: center;\n\tfont-size: 1.6em;\n}\n\n.restaurant-menu p{\n\tfont-size: 1.4em;\n}\n\n.review-title {\n\tmargin-top: 10px;\n\tfont-size: 1.8em;\n}\n\n.restaurant-review {\n\tpadding: 10px 20px;\n\tmargin-bottom: 20px;\n}\n\n.restaurant-review:hover {\n\tbox-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n\ttransition: transform 0.5s ease;\n}\n\n.review-header {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\tborder-bottom: 1px solid black;\n\tpadding-bottom: 10px;\n\tfont-size: 1.35em;\n}\n\n.review-name {\n\tfont-weight: bold;\n\ttext-align: left;\n}\n\n.review-comment {\n\ttext-align: left;\n\tpadding-top: 10px;\n\tfont-size: 1.35em;\n}\n\n.form-review {\n\tpadding: 10px 20px;\n\tborder: 1px solid black;\n\tborder-radius: 5px;\n}\n\n.form-review h2 {\n\tfont-size: 1.8em;\n\tpadding-bottom: 10px;\n}\n\n.form-group {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n}\n\n.form-group label {\n\tfont-weight: 500;\n\tfont-size: 1.5em;\n}\n\n.form-control {\n\twidth: 80%;\n\tpadding: 5px;\n\tmargin: 5px;\n\tfont-size: 1rem;\n\tmin-height: 44px;\n\tborder: 1px solid black;\n\tborder-radius: 5px;\n}\n\n.form-group-submit {\n\tmargin: 5px;\n\tdisplay: flex;\n\tjustify-content: right;\n\talign-items: center;\n}\n\n.submitReview {\n\tmargin-top: 5px;\n\tpadding: 11px;\n\tbackground-color: white;\n\tfont-size: 1rem;\n\tfont-weight: 700;\n\tcursor: pointer;\n\tborder: 1px solid black;\n\tborder-radius: 5px;\n}\n\n.like {\n  width: 55px;\n  height: 55px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #db0000;\n  \n  position: fixed;\n  bottom: 16px;\n  right: 16px;\n  border-radius: 50%;\n  border: 0;\n  \n  font-size: 18px;\n  color: white;\n  cursor: pointer;\n}\n\nfooter {\n\tbackground-color: #2F8F9D;\n\tcolor: white;\n\tfont-size: 14px;\n\tpadding: 20px;\n\twidth: 100%;\n\ttext-align: center;\n}\n\n.skip-link {\n\tposition: absolute;\n\ttop: -70px;\n\tleft: 0;\n\tbackground-color: #bf1722;\n\tcolor: white;\n\tpadding: 10px;\n\tfont-size: 20px;\n\tz-index: 100;\n\ttext-decoration: none;\n}\n\n.skip-link:focus {\n\ttop: 70px;\n}\n\n.loader-container {\n  position: fixed;\n  background-color: rgba(54, 53, 53, 0.8);\n  width: 100%;\n  height: 100vh;\n  z-index: 99;\n  top: 0;\n  display: block;\n}\n\n#loader {\n  position: fixed;\n  left: 50%;\n  top: 50%;\n  z-index: 1;\n  width: 120px;\n  height: 120px;\n  margin: -76px 0 0 -76px;\n  border: 16px solid #f3f3f3;\n  border-radius: 50%;\n  border-top: 16px solid #303030;\n  -webkit-animation: spin 2s linear infinite;\n  animation: spin 2.5s linear infinite;\n}\n\n@-webkit-keyframes spin {\n  0% { -webkit-transform: rotate(0deg); }\n  100% { -webkit-transform: rotate(360deg); }\n}\n\n@keyframes spin {\n  0% { transform: rotate(0deg); }\n  100% { transform: rotate(360deg); }\n}"],sourceRoot:""}]);const C=o},948:(n,t,A)=>{A.d(t,{Z:()=>C});var e=A(537),i=A.n(e),r=A(645),o=A.n(r)()(i());o.push([n.id,".lists {\r\n    display: grid;\r\n    grid-row-gap: 16px;\r\n}\r\n\r\n@media screen and (min-width: 500px) {\r\n  .nav_menu {\r\n    grid-template-columns: 1fr auto;\r\n    padding: 8px 32px;\r\n  }\r\n\r\n  .nav-icon {\r\n    display: none;\r\n  }\r\n\r\n  .nav-mob{\r\n    position: static;\r\n    width: 100%;\r\n    background-color: transparent;\r\n    padding: 0;\r\n  }\r\n\r\n  .nav-mob ul li {\r\n    display: inline-block;\r\n  }\r\n\r\n  .nav-mob ul li a {\r\n    color: #fff;\r\n    font-weight: 500;\r\n    display: inline-block;\r\n    text-decoration: none;\r\n    width: 100%;\r\n    margin: 0;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 650px) {\r\n  .list__item-content {\r\n    padding: 16px 32px 32px 32px;\r\n  }\r\n\r\n  .list__item-title {\r\n    margin-top: 10px;\r\n    font-size: 19px;\r\n  }\r\n\r\n  .list__item-desc {\r\n    font-size: 14px;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 500px) {\r\n  .lists {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n    grid-column-gap: 10px;\r\n    grid-row-gap: 16px;\r\n  }\r\n  \r\n  .restaurant-menu {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n    grid-column-gap: 10px;\r\n    grid-row-gap: 16px;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 760px) {\r\n  .lists {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr 1fr;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 1000px) {\r\n  main {\r\n    max-width: 1000px;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 1200px) {\r\n  main {\r\n    max-width: 1000px;\r\n  }\r\n\r\n  header{\r\n    display: flex;\r\n    justify-content: center;\r\n  }\r\n\r\n  .hero {\r\n    display: flex;\r\n    align-items: center;\r\n    height: 325px;\r\n    width: 1000px;\r\n    text-align: left;\r\n    background-position: center;\r\n    background-color: Black;\r\n  }\r\n} ","",{version:3,sources:["webpack://./src/styles/responsive.css"],names:[],mappings:"AAAA;IACI,aAAa;IACb,kBAAkB;AACtB;;AAEA;EACE;IACE,+BAA+B;IAC/B,iBAAiB;EACnB;;EAEA;IACE,aAAa;EACf;;EAEA;IACE,gBAAgB;IAChB,WAAW;IACX,6BAA6B;IAC7B,UAAU;EACZ;;EAEA;IACE,qBAAqB;EACvB;;EAEA;IACE,WAAW;IACX,gBAAgB;IAChB,qBAAqB;IACrB,qBAAqB;IACrB,WAAW;IACX,SAAS;EACX;AACF;;AAEA;EACE;IACE,4BAA4B;EAC9B;;EAEA;IACE,gBAAgB;IAChB,eAAe;EACjB;;EAEA;IACE,eAAe;EACjB;AACF;;AAEA;EACE;IACE,aAAa;IACb,8BAA8B;IAC9B,qBAAqB;IACrB,kBAAkB;EACpB;;EAEA;IACE,aAAa;IACb,8BAA8B;IAC9B,qBAAqB;IACrB,kBAAkB;EACpB;AACF;;AAEA;EACE;IACE,aAAa;IACb,kCAAkC;EACpC;AACF;;AAEA;EACE;IACE,iBAAiB;EACnB;AACF;;AAEA;EACE;IACE,iBAAiB;EACnB;;EAEA;IACE,aAAa;IACb,uBAAuB;EACzB;;EAEA;IACE,aAAa;IACb,mBAAmB;IACnB,aAAa;IACb,aAAa;IACb,gBAAgB;IAChB,2BAA2B;IAC3B,uBAAuB;EACzB;AACF",sourcesContent:[".lists {\r\n    display: grid;\r\n    grid-row-gap: 16px;\r\n}\r\n\r\n@media screen and (min-width: 500px) {\r\n  .nav_menu {\r\n    grid-template-columns: 1fr auto;\r\n    padding: 8px 32px;\r\n  }\r\n\r\n  .nav-icon {\r\n    display: none;\r\n  }\r\n\r\n  .nav-mob{\r\n    position: static;\r\n    width: 100%;\r\n    background-color: transparent;\r\n    padding: 0;\r\n  }\r\n\r\n  .nav-mob ul li {\r\n    display: inline-block;\r\n  }\r\n\r\n  .nav-mob ul li a {\r\n    color: #fff;\r\n    font-weight: 500;\r\n    display: inline-block;\r\n    text-decoration: none;\r\n    width: 100%;\r\n    margin: 0;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 650px) {\r\n  .list__item-content {\r\n    padding: 16px 32px 32px 32px;\r\n  }\r\n\r\n  .list__item-title {\r\n    margin-top: 10px;\r\n    font-size: 19px;\r\n  }\r\n\r\n  .list__item-desc {\r\n    font-size: 14px;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 500px) {\r\n  .lists {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n    grid-column-gap: 10px;\r\n    grid-row-gap: 16px;\r\n  }\r\n  \r\n  .restaurant-menu {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n    grid-column-gap: 10px;\r\n    grid-row-gap: 16px;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 760px) {\r\n  .lists {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr 1fr;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 1000px) {\r\n  main {\r\n    max-width: 1000px;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 1200px) {\r\n  main {\r\n    max-width: 1000px;\r\n  }\r\n\r\n  header{\r\n    display: flex;\r\n    justify-content: center;\r\n  }\r\n\r\n  .hero {\r\n    display: flex;\r\n    align-items: center;\r\n    height: 325px;\r\n    width: 1000px;\r\n    text-align: left;\r\n    background-position: center;\r\n    background-color: Black;\r\n  }\r\n} "],sourceRoot:""}]);const C=o},46:(n,t,A)=>{var e=A(379),i=A.n(e),r=A(795),o=A.n(r),C=A(569),a=A.n(C),p=A(565),s=A.n(p),B=A(216),d=A.n(B),l=A(589),g=A.n(l),x=A(756),c={};c.styleTagTransform=g(),c.setAttributes=s(),c.insert=a().bind(null,"head"),c.domAPI=o(),c.insertStyleElement=d(),i()(x.Z,c),x.Z&&x.Z.locals&&x.Z.locals},362:(n,t,A)=>{var e=A(379),i=A.n(e),r=A(795),o=A.n(r),C=A(569),a=A.n(C),p=A(565),s=A.n(p),B=A(216),d=A.n(B),l=A(589),g=A.n(l),x=A(948),c={};c.styleTagTransform=g(),c.setAttributes=s(),c.insert=a().bind(null,"head"),c.domAPI=o(),c.insertStyleElement=d(),i()(x.Z,c),x.Z&&x.Z.locals&&x.Z.locals}},A={};function e(n){var i=A[n];if(void 0!==i)return i.exports;var r=A[n]={id:n,exports:{}};return t[n](r,r.exports,e),r.exports}e.m=t,n=[],e.O=(t,A,i,r)=>{if(!A){var o=1/0;for(s=0;s<n.length;s++){for(var[A,i,r]=n[s],C=!0,a=0;a<A.length;a++)(!1&r||o>=r)&&Object.keys(e.O).every((n=>e.O[n](A[a])))?A.splice(a--,1):(C=!1,r<o&&(o=r));if(C){n.splice(s--,1);var p=i();void 0!==p&&(t=p)}}return t}r=r||0;for(var s=n.length;s>0&&n[s-1][2]>r;s--)n[s]=n[s-1];n[s]=[A,i,r]},e.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return e.d(t,{a:t}),t},e.d=(n,t)=>{for(var A in t)e.o(t,A)&&!e.o(n,A)&&Object.defineProperty(n,A,{enumerable:!0,get:t[A]})},e.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),(()=>{var n={954:0};e.O.j=t=>0===n[t];var t=(t,A)=>{var i,r,[o,C,a]=A,p=0;if(o.some((t=>0!==n[t]))){for(i in C)e.o(C,i)&&(e.m[i]=C[i]);if(a)var s=a(e)}for(t&&t(A);p<o.length;p++)r=o[p],e.o(n,r)&&n[r]&&n[r][0](),n[r]=0;return e.O(s)},A=self.webpackChunkrestaurant_apps=self.webpackChunkrestaurant_apps||[];A.forEach(t.bind(null,0)),A.push=t.bind(null,A.push.bind(A))})(),e.nc=void 0;var i=e.O(void 0,[30,135,337,268],(()=>e(253)));i=e.O(i)})();
//# sourceMappingURL=app~d1658f4b.bundle.js.map