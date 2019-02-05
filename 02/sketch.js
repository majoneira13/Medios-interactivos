function setup() {
  createCanvas(640,640);
  
   background(255);
 
 for(var t3=0; t3<320; t3=t3+40){
    fill(1)
    noStroke()
    
    //vertical
      
     triangle(40+t3, 320+t3,t3, 320+t3, t3, 360+t3)
     triangle(40+t3, 360+t3,t3, 360+t3, t3, 400+t3)
     triangle(t3, 440+t3, 40+t3, 440+t3, 40+t3, 400+t3)
     triangle(t3, 480+t3, 40+t3, 480+t3, 40+t3, 440+t3)
     triangle(40+t3, 480+t3,t3, 480+t3, t3, 520+t3)
     triangle(40+t3, 520+t3,t3, 520+t3, t3, 560+t3)
     triangle(t3, 600+t3, 40+t3, 600+t3, 40+t3, 560+t3)
     triangle(t3, 640+t3, 40+t3, 640+t3, 40+t3, 600+t3)
      
      //horizontal
      
      triangle(40+t3, 360+t3,80+t3, 360+t3, 80+t3, 320+t3)
      triangle(80+t3, 360+t3,120+t3, 360+t3, 120+t3, 320+t3)
      triangle(160+t3, 320+t3,120+t3, 320+t3, 120+t3, 360+t3)
      triangle(200+t3, 320+t3,160+t3, 320+t3, 160+t3, 360+t3)
      triangle(200+t3, 360+t3,240+t3, 360+t3, 240+t3, 320+t3)
      triangle(240+t3, 360+t3,280+t3, 360+t3, 280+t3, 320+t3)
      triangle(320+t3, 320+t3,280+t3, 320+t3, 280+t3, 360+t3)


}
  
  fill(255)
  rect(320,320,320,320)
  
    for(var t4=0; t4<640; t4=t4+40){
    fill(255,198,46)
    noStroke()
    
      //verical
  triangle(320+t4, 600-t4,320+t4, 640-t4, 360+t4, 640-t4)
  triangle(360+t4, 600-t4,360+t4, 640-t4, 400+t4, 640-t4)
  triangle(400+t4, 600-t4, 440+t4, 600-t4, 440+t4, 640-t4)
  triangle(440+t4, 600-t4, 480+t4, 600-t4, 480+t4, 640-t4)
  triangle(480+t4, 600-t4,480+t4, 640-t4, 520+t4, 640-t4)
  triangle(520+t4, 600-t4,520+t4, 640-t4, 560+t4, 640-t4)
  triangle(560+t4, 600-t4, 600+t4, 600-t4, 600+t4, 640-t4)
  triangle(600+t4, 600-t4, 640+t4, 600-t4, 640+t4, 640-t4)
      }
 
    for(var t5=0; t5<280; t5=t5+40){
    fill(255,198,46)
    noStroke()
    
      //Fila2
  triangle(320+t5, 560-t5, 360+t5, 560-t5, 360+t5, 600-t5)
    }
  
  
      for(var t6=0; t6<240; t6=t6+40){
    fill(255,198,46)
    noStroke()
    
      //v3
  triangle(320+t6, 520-t6, 360+t6, 520-t6, 360+t6, 560-t6)
    }
    for(var t7=0; t7<200; t7=t7+40){
    fill(255,198,46)
    noStroke()
    
      //v4
  triangle(320+t7, 480-t7,320+t7, 520-t7, 360+t7, 520-t7)
    }  
    for(var t8=0; t8<160; t8=t8+40){
    fill(255,198,46)
    noStroke()
    
      //v5
  triangle(320+t8, 440-t8,320+t8, 480-t8, 360+t8, 480-t8)
    }  
    for(var t9=0; t9<100; t9=t9+40){
    fill(255,198,46)
    noStroke()
    
      //v6
  triangle(320+t9, 400-t9, 360+t9, 400-t9, 360+t9, 440-t9)
    }  

  for(var t10=0; t10<60; t10=t10+40){
    fill(255,198,46)
    noStroke()
    
      //v7
  triangle(320+t10, 360-t10, 360+t10, 360-t10, 360+t10, 400-t10)
    }  

for(var t11=0; t11<40; t11=t11+40){
    fill(255,198,46)
    noStroke()
    
      //v8
  triangle(320+t11, 320-t11,320+t11, 360-t11, 360+t11, 360-t11)
    }  

  
}