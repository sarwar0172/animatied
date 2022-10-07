
/*========= section========== 1 */

let svg = document.querySelector('.section_one svg');
let heading = document.querySelector('.heading h1');
let mountain = document.querySelector('.mountain');


/* =============section2========== */
let path_1 = document.querySelector('#path_1');
let path_2 = document.querySelector('#path_2');
let path_3 = document.querySelector('#path_3');
let path_4 = document.querySelector('#path_4');
let path_5 = document.querySelector('#path_5');
let path_6 = document.querySelector('#path_6');
let path_7 = document.querySelector('#path_7');
let path_8 = document.querySelector('#path_8');
let path_9 = document.querySelector('#path_9');
let path_10 = document.querySelector('#path_10');
let path_11 = document.querySelector('#path_11');
let path_12 = document.querySelector('#path_12');
let path_13 = document.querySelector('#path_13');
let path_14 = document.querySelector('#path_14');
let path_15 = document.querySelector('#path_15');
let path_16 = document.querySelector('#path_16');
let path_17 = document.querySelector('#path_17');
let path_18 = document.querySelector('#path_18');
let path_19 = document.querySelector('#path_19');
let path_20 = document.querySelector('#path_20');
let path_21 = document.querySelector('#path_21');
let path_22 = document.querySelector('#path_22');
let path_23 = document.querySelector('#path_23');
let path_24 = document.querySelector('#path_24');
let path_25 = document.querySelector('#path_25');
let path_26 = document.querySelector('#path_26');
let path_27 = document.querySelector('#path_27');
let path_28 = document.querySelector('#path_28');
let path_29 = document.querySelector('#path_29');
let path_30 = document.querySelector('#path_30');
let path_31 = document.querySelector('#path_31');
let path_32 = document.querySelector('#path_32');
let path_33 = document.querySelector('#path_33');
let path_34 = document.querySelector('#path_34');
let path_35 = document.querySelector('#path_35');
let path_36 = document.querySelector('#path_36');
let path_37 = document.querySelector('#path_37');
let path_38 = document.querySelector('#path_38');
let path_39 = document.querySelector('#path_39');
let path_40 = document.querySelector('#path_40');
let path_41 = document.querySelector('#path_41');
let path_42 = document.querySelector('#path_42');
let path_43 = document.querySelector('#path_43');
let path_44 = document.querySelector('#path_44');


path_1.classList.add('secondDesign');
path_2.classList.add('secondDesign');
path_3.classList.add('secondDesign');
path_4.classList.add('secondDesign');
path_5.classList.add('secondDesign');
path_6.classList.add('secondDesign');
path_7.classList.add('secondDesign');
path_8.classList.add('secondDesign');
path_9.classList.add('secondDesign');
path_10.classList.add('secondDesign');
path_11.classList.add('secondDesign');
path_12.classList.add('secondDesign');
path_13.classList.add('secondDesign');
path_14.classList.add('secondDesign');
path_15.classList.add('secondDesign');
path_16.classList.add('secondDesign');
path_17.classList.add('secondDesign');
path_18.classList.add('secondDesign');
path_19.classList.add('secondDesign');
path_20.classList.add('secondDesign');
path_21.classList.add('secondDesign');
path_22.classList.add('secondDesign');

path_23.classList.add('noline');
path_24.classList.add('noline');
path_25.classList.add('noline');
path_26.classList.add('noline');
path_27.classList.add('noline');
path_28.classList.add('noline');
path_29.classList.add('noline');
path_30.classList.add('noline');
path_31.classList.add('noline');
path_32.classList.add('noline');
path_33.classList.add('noline');
path_34.classList.add('noline');
path_35.classList.add('noline');
path_36.classList.add('noline');
path_37.classList.add('noline');
path_38.classList.add('noline');
path_39.classList.add('noline');
path_40.classList.add('noline');
path_41.classList.add('noline');
path_42.classList.add('noline');
path_43.classList.add('noline');
path_44.classList.add('noline');


/* =============!section2========== */








window.onscroll=()=>{
    console.log(window.scrollY);
    console.log(window.screenY)
    if(window.scrollY>50){
          svg.classList.add("s1_svgscroll")
          heading.style.display="block";
          heading.classList.add('headingscroll');
          mountain.style.display="block";
          mountain.classList.add('mountainscroll');
    }else{
         
          svg.classList.remove('s1_svgscroll');
            heading.classList.remove('headingscroll');
         

          mountain.classList.remove('mountainscroll');


       


    }
    if (window.scrollY > 180) {
        document.documentElement.style.setProperty(
          '--positionHeading',
          'absolute'
        );
    }else{
         document.documentElement.style.setProperty(
           '--positionHeading',
           'fixed'
         );
    }
      
    
      
     

   
     
    if (window.scrollY > 800 || window.scrollY < 350) {
     let allNline= document.querySelectorAll('.noline')

     allNline.forEach((e)=>{
      e.style.animation = 'Fline 5s';
     })
      
    
    }else{
      let allLine= document.querySelectorAll('.noline');
      allLine.forEach((e)=>{
      e.style.animation = 'nline 5s';
      e.style.animationFillMode= "forwards";
      })
    }

    if(window.scrollY > 900 || window.scrollY < 400){
      let secondout = document.querySelectorAll('.secondDesign');
      secondout.forEach((e)=>{
      e.style.animation = 'secondOut 4s'; 
      
      })
    }else{
      let secondin = document.querySelectorAll('.secondDesign');
      secondin.forEach((e)=>{
        e.style.animation = 'SecondIn 4s'; 
        e.style.animationFillMode="forwards"
      })
    }
    
}
