
                 var current=1;
                 var src
                 function abstract(){
                src= "Imgs/abstracts/";
                document.getElementById("displaypic").src=("Imgs/abstracts/1.jpg")

                 }
                 function figurative(){
                    src= "Imgs/Figurative/";
                    document.getElementById("displaypic").src=("Imgs/Figurative/1.jpg")
                 }
                 function mix(){
                    src= "Imgs/Figurative+Abstract/";
                    document.getElementById("displaypic").src=("Imgs/Figurative+Abstract/1.jpg")
                 }
                 function kids(){
                    src= "Imgs/Children/";
                    document.getElementById("displaypic").src=("Imgs/Children/1.jpg")
                 }
                 
                 function newPic(){
                     if(current < 4){
                         current +=1;
         
                     }
                     else {
                         current=1;
                     }
                     document.getElementById("displaypic").src=src+current+".jpg";
                 }
             
             function nextpic(){
                 if(current !=4){
                     newPic();
                 }
             }
             function prevpic(){
                 if(current!=1){
                     current-=1;
                 }
                 document.getElementById("displaypic").src=src+current+".jpg";
             } 

             function choose(){
                 document.getElementById("paintings1").style.animation="go 1000ms ease-in-out forwards";
                 document.getElementById("paintings2").style.animation="go 1000ms ease-in-out forwards";
                 document.getElementById("paintings3").style.animation="go 1000ms ease-in-out forwards";
                 document.getElementById("paintings4").style.animation="go 1000ms ease-in-out forwards";
                 document.getElementById("display").style.display="block";
               
             }
             function back(){
                document.getElementById("paintings1").style.animation="come 1000ms ease-in-out forwards";
                document.getElementById("paintings2").style.animation="come 1000ms ease-in-out forwards";
                document.getElementById("paintings3").style.animation="come 1000ms ease-in-out forwards";
                document.getElementById("paintings4").style.animation="come 1000ms ease-in-out forwards";
                document.getElementById("display").style.display="none";

             }
             var currentPic=1;
             function newSlide(){
                 if(currentPic < 4){
                     currentPic +=1;
   
                 }
                 else {
                     currentPic=1;
                 }
                 document.getElementById("myimage").src="Imgs/"+currentPic+".jpg";
             }
         function nextSlide(){
             if(currentPic !=4){
                 newSlide();
             }
         }
         function prevSlide(){
             if(currentPic!=1){
                 currentPic-=1;
             }
             document.getElementById("myimage").src="Imgs/"+currentPic+".jpg";
         } 
         
         $(document).ready(function(){
            $(window).on("scroll",function(){
              var wn = $(window).scrollTop();
              
            if(wn > 80){
                $("header").css("background","rgba(248, 248, 248, 0.658)");
               
            }
            else{
                $("header").css("background","rgba(51, 51, 51, 0.0)");
              
            }
          });
          $("#class").click(function(){
              $("#change").attr("src","Imgs/class.jpg");
              $("#artistbefore").css("transform","scale(0,0.7)");
              $("#artistbefore").css("animation","none");
              $("#gallerybofore").css("animation","none");
              $("#classbefore").css("animation"," bord 800ms forwards ease-in-out");
              $("#text_class").fadeIn("slow")
              $("#text_artist").fadeOut("slow")
              $("#text_gallery").fadeOut("slow")
          });
          $("#artist").click(function(){
              $("#change").attr("src","Imgs/IMG_6278.jpg");
              $("#classbefore").css("animation","none");
              $("#gallerybofore").css("animation","none");
              $("#artistbefore").css("animation"," bord 800ms  forwards ease-in-out");
              $("#text_artist").fadeIn("slow")
              $("#text_gallery").fadeOut("slow")
              $("#text_class").fadeOut("slow")
          });
          $("#gallery").click(function(){
              $("#change").attr("src","Imgs/gallery.jpg");
              $("#classbefore").css("animation","none");
              $("#artistbefore").css("animation","none");
              $("#artistbefore").css("transform","scale(0,0.7)");
              $("#gallerybofore").css("animation"," bord 800ms forwards ease-in-out");
              $("#text_gallery").fadeIn("slow")
              $("#text_class").fadeOut("slow")
              $("#text_artist").fadeOut("slow")
          });

        });
        
        function validate (){
            var name=document.getElementById("myname");
            var phone=document.getElementById("phone");
            var email=document.getElementById("email");
           
          
            var reg1=/[a-z]/;

var at_position=email.value.indexOf("@");

var dot_position=email.value.lastIndexOf(".");
            if  (name.value==""){
                document.getElementById("error").innerHTML="Name must be filled in"
                name.focus();
                 return false;
            }
            else if  (phone.value==""){
                document.getElementById("error").innerHTML="Phone must be filled in"
                phone.focus();
                 return false;

            }
            else if  (reg1.test(phone.value)){
                document.getElementById("error").innerHTML="Phone must include only digits"
                phone.focus();
                 return false;

            }

           
            else if  (email.value==""){
                document.getElementById("email_error").innerHTML="Email must be filled in"
                email.focus();
                 return false;

            }
            else if(at_position <1||(dot_position - at_position < 2)){
        document.getElementById("email_error").innerHTML="Please enter valid email"
       email.focus();
        return false;}

        else {
            return true;
        }
        }
      
    
        function clearMsg(id){
document.getElementById(id).innerHTML=""

}
     