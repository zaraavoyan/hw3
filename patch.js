function ZaraPatch(x, y) {
   noStroke();
   fill(200);
  rect(x,y,100,100);
   fill(255,222,0);
   noStroke();
 arc(x+50, y+50, 80, 80, 10, PI-HALF_PI);
   fill(255,144,0);
   noStroke();
 arc(x+50, y+50, 80, 80, 0, PI-QUARTER_PI, PIE);
   fill(0);
   fill(27,27,103);
   noStroke();
 arc(x+50, y+50, 30, 30, 0, TWO_PI, TWO_PI+PI);
   fill(255,222,0);
   noStroke();
arc(x+50, y+50, 30, 30, 0, PI);
  
}
