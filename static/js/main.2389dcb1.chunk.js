(this.webpackJsonppersonal_site=this.webpackJsonppersonal_site||[]).push([[0],{26:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},55:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){"use strict";n.r(t);var i=n(2),s=n(0),a=n.n(s),r=n(15),o=n.n(r),c=(n(43),n(44),n(6)),l=n(7),u=n(9),d=n(8),h=n(36),p=(n(45),function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(i.jsxs)("div",{class:"titleContainer content",children:[Object(i.jsx)("h1",{children:"Nicholas Chong"}),Object(i.jsx)("h2",{children:Object(i.jsx)(h.a,{children:["Software Developer","Investor","Photographer","Student"],interval:2e3})})]})}}]),n}(a.a.Component)),j=(n(55),n(14)),b=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(i.jsx)("div",{children:Object(i.jsx)("h2",{class:"sectionButton",children:Object(i.jsx)(j.b,{to:this.props.link,children:this.props.name})})})}}]),n}(a.a.Component),m=(n(58),function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(i.jsxs)("div",{id:"jimmy",children:[Object(i.jsx)(p,{}),Object(i.jsxs)("div",{class:"sectionsContainer",children:[Object(i.jsx)(b,{name:"Work Experience",link:"/WorkExperience"}),Object(i.jsx)(b,{name:"Projects",link:"/Projects"}),Object(i.jsx)(b,{name:"Education",link:"/Education"})]})]})}}]),n}(a.a.Component)),O=(n(26),n(59),function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"extractItems",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return!0===t?e.map((function(e){var t=e.link,n=e.site;return Object(i.jsx)("li",{children:Object(i.jsx)("a",{target:"_blank",href:t,children:n})})})):e.map((function(e){return Object(i.jsx)("li",{children:e})}))}},{key:"render",value:function(){return Object(i.jsxs)("div",{class:"cardContainer",children:[Object(i.jsxs)("div",{class:"cardName",children:[Object(i.jsx)("h1",{class:"title",children:this.props.title}),Object(i.jsx)("h2",{class:"subTitle",children:this.props.company})]}),Object(i.jsx)("h2",{class:"subTitle2",children:this.props.dates}),Object(i.jsxs)("ul",{children:[this.extractItems(this.props.bullets),this.extractItems(this.props.links,!0)]})]})}}]),n}(a.a.Component)),f=(n(60),n(61),function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(i.jsx)("div",{class:"buttonContainer",children:Object(i.jsxs)(j.b,{class:"buttonContainer",to:"/",children:[Object(i.jsx)("i",{class:"bx bx-arrow-back bx-sm"}),Object(i.jsx)("h1",{children:"Go Back"})]})})}}]),n}(a.a.Component)),v=[{title:"Deck Supervisor",company:"Making Waves Swim School",dates:"August 2019 - Present",description:["Supervised teams of 5-10 instructors to ensure compliance with company safety standards","Implemented and executed a plan to efficiently conduct evaluations of 100+ swimmers each season","Supported new staff members during the first days of the season by acting as the person of contact for assistance","Pitched possible improvements of safety protocol to facility manager"],links:[]},{title:"Swim Instructor",company:"Making Waves Swim School",dates:"October 2018 - August 2019",description:["Adapted quickly to effectively accommodate swimmers with special needs (Ex. children with autism)","Developed relationships with families by providing feedback to swimmers and parents after each lesson","Achieved approximately 80% pass rate across all age groups (toddlers, children, adults)"],links:[]}].map((function(e){var t=e.title,n=e.dates,s=e.description,a=e.links,r=e.company;return Object(i.jsx)(O,{title:t,dates:n,bullets:s,links:a,company:r})})),y=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(i.jsxs)("div",{children:[Object(i.jsx)("div",{class:"pageTitle content",children:Object(i.jsx)("h1",{children:"Work Experience"})}),Object(i.jsx)("div",{class:"content--inner",children:v}),Object(i.jsx)(f,{})]})}}]),n}(a.a.Component),x=[{title:"Coronavirus Dashboard",company:"Personal Project",dates:"June 2020 - Present",description:["Designed and developed dashboard solution accessed by 1000+ users and 50-100 Daily Active Users","Features interactive visualizations of key metrics related to COVID-19 in Ontario","Developed a client-side JavaScript callback for updating date range \u2013 resulted in 3x faster performance","Wrote Python scripts to automate data updates from a government API and store in a Heroku PostgreSQL database","Thoroughly tested the solution against various test cases to ensure use case requirements are met","Deployed first version two months after starting development, with iterative improvements in the months following","Built with Python, JavaScript, Plotly, Peewee ORM, Tweepy, Ontario Government API, Heroku"],links:[{site:"Github",link:"https://github.com/Nicholas-Chong/COVID-19-Twitter-Bot-and-Dashboard"},{site:"Coronavirus Dashboard",link:"http://www.ontariocovid-19.com"}]},{title:"Coronavirus Twitter Bot",company:"Personal Project",dates:"June 2020 - Present",description:["Automated the creation and execution of daily update Tweets using Python scripts and Heroku scheduler commands","Gained 1500+ followers and over 100,000 monthly impressions without any external promotion","Provides value to users by making COVID-19 metrics easily accessible on a user\u2019s Twitter timeline","Followed Python PEP8 style guide to ensure code quality and maintainability"],links:[{site:"Github",link:"https://github.com/Nicholas-Chong/COVID-19-Twitter-Bot-and-Dashboard"},{site:"Twitter Bot",link:"https://twitter.com/OntarioCovid19"}]}].map((function(e){var t=e.title,n=e.dates,s=e.description,a=e.links,r=e.company;return Object(i.jsx)(O,{title:t,dates:n,bullets:s,links:a,company:r})})),k=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",{id:"foo",children:[Object(i.jsx)("div",{class:"pageTitle content",children:Object(i.jsx)("h1",{children:"Projects"})}),Object(i.jsx)("div",{class:"content--inner",children:x}),Object(i.jsx)(f,{})]})})}}]),n}(a.a.Component),g=[{title:"BSc, Computer Science",dates:"2020 - 2024",company:"Western University",description:["Pursuing Bachelor of Science in Computer Science, double major with Economics; 4.0 GPA (90%)","Coursework: Computer Science 1 + 2, Information Systems and Design, Calculus, Linear Algebra","Director at Western Founders Network (business & technology club)"],links:[]},{title:"OSSD",company:"John Fraser Secondary School",dates:"2016 - 2020",description:["Designed digital assets and page layouts for the 2020 yearbook according to design specifications and timelines","Photographed over 15 school wide events with photos featured on school social media accounts and the yearbook","Executive member at Peel Investment Club: contributed to bi-weekly lessons on various finance-related topics which were shared to 100+ club members"],links:[]}].map((function(e){var t=e.title,n=e.dates,s=e.description,a=e.links,r=e.company;return Object(i.jsx)(O,{title:t,dates:n,bullets:s,links:a,company:r})})),w=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(i.jsxs)("div",{children:[Object(i.jsx)("div",{class:"pageTitle content",children:Object(i.jsx)("h1",{children:"Education"})}),Object(i.jsx)("div",{class:"content--inner",children:g}),Object(i.jsx)(f,{})]})}}]),n}(a.a.Component),P=n(3),C=n(66),S=n(67),D=n(37),I=n(1);D.a.registerPlugin(I.b);var A=function(e,t,n){var i,s=n?0:.5;i=["/WorkExperience","/Projects","/Education"].includes(e)?function(e,t){var n=new I.d({paused:!0}),i=e.querySelector(".content"),s=e.querySelector(".content--inner");return n.from(e,.3,{display:"none",autoAlpha:0,delay:t,ease:I.b.easeIn}).from(i,.15,{autoAlpha:0,y:25,ease:I.b.easeInOut}).from(s,.15,{autoAlpha:0,delay:.15,ease:I.b.easeIn}),n}(t,s):function(e,t){var n=new I.d({paused:!0}),i=e.querySelectorAll("h1, h2");return n.from(e,.16,{display:"none",autoAlpha:0,delay:t}).staggerFrom(i,.375,{autoAlpha:0,x:-25,ease:I.b.easeOut},.125),n}(t,s),window.loadPromise.then((function(){return requestAnimationFrame((function(){return i.play()}))}))};var E=function(){return Object(i.jsx)("div",{children:Object(i.jsx)(j.a,{children:Object(i.jsx)(P.a,{render:function(e){var t=e.location,n=t.pathname,s=t.key;return Object(i.jsx)(C.a,{component:null,children:Object(i.jsx)(S.a,{appear:!0,onEnter:function(e,t){return A(n,e,t)},onExit:function(e,t){return function(e){var t=new I.d({paused:!0});e instanceof f||(t.to(e,.1,{autoAlpha:0,ease:I.b.easeOut}),t.play())}(e)},timeout:{enter:750,exit:150},children:Object(i.jsxs)(P.c,{location:t,children:[Object(i.jsx)(P.a,{path:"/WorkExperience",component:y}),Object(i.jsx)(P.a,{path:"/Projects",component:k}),Object(i.jsx)(P.a,{path:"/Education",component:w}),Object(i.jsx)(P.a,{exact:!0,path:"/*",component:m})]})},s)})}})})})},T=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,68)).then((function(t){var n=t.getCLS,i=t.getFID,s=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),i(e),s(e),a(e),r(e)}))};n(62);o.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(E,{})}),document.getElementById("root")),T()}},[[63,1,2]]]);
//# sourceMappingURL=main.2389dcb1.chunk.js.map