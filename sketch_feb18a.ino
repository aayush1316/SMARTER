#define A 8
#define B 7
#define C 4
#define metr 6
float b=0.000625,meter=0.000;
void setup(){
  pinMode(A,INPUT);
  pinMode(B,INPUT);
  pinMode(C,INPUT);
  pinMode(metr,INPUT);
  Serial.begin(9600);
  
}
void loop(){
  if(digitalRead(metr)==1){
   meter+=b;
   Serial.println(meter,5);
  }
  
   if(digitalRead(A)==1){
      long int t1 = millis();
      Serial.println("A:1");
      long int t2 = millis();
     // Serial.println((t2-t1));
   }
   else Serial.println("A:0");
 
   if(digitalRead(B)==1)
      Serial.println("B:1");
   else Serial.println("B:0");
   
   if(digitalRead(C)==1)
      Serial.println("C:1");
   else Serial.println("C:0");
}