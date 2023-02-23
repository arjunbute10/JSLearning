function candidate(gradScore,hscScore,sscScore,candidateName) {
var result = gradScore>=70 || hscScore>=80 || sscScore>=90 ? `Congrates ${candidateName} you are eligible for TCS interview`:`Unfortunately ${candidateName} you are not eligible for TCS interview`
      console.log(result);
}
candidate(80,86,90,"Arjun")
candidate(70,65,55,"Shivaji")
candidate(60,79,88,"Shankar")