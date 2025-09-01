function deductLifeCounter(studentName) {
  let life = 3;

  return () => {
    if (life > 0) {
      life--;
      console.log(`${studentName}, you lost a life. Life remaining: ${life}`);
    } else {
      console.log(`${studentName}, your life is over! No life left!`);
    }
  };
}

const rahim = deductLifeCounter("Rahim");
const karim = deductLifeCounter("Karim");
const rashed = deductLifeCounter("Rashed");
rahim(); // Use  first life
rahim(); // Use  second life
rahim(); // Use  third life
rahim(); // Use  third life
console.log("----");
console.log("----");
karim(); // use first life
karim(); // use second life
console.log("----");
console.log("----");
rashed(); // use first life
karim(); //use karim life
karim(); //use karim life