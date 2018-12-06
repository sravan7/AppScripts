var originalId = "<doc ID>";
// required doc file was in the repo add it your drive anf get Id of doc
var duplicateFileId = DriveApp.getFileById(originalId).makeCopy().getId();
var doc = DocumentApp.openById(duplicateFileId );
  var client = {
    name: 'Sravan Kumar Muppalla',
    date: new Date(),
    gender:"Mr.",
    rollNo:"ESD14I017",
    roomNo:"1105",
    hostel:"Ashoka",
    yearInLetter:"5",
    year:"5-years ",
    degree:"B.Tech in Electronics and M.tech in Signal Processing and Comminucation System Design with Specilization in Design and Manufacturing",
    father:"Muppalla Venakata NarasaRaju",
    address:"h.no:00, KrishnamRajuPalli, Kondayapalem post, Nellore, AndhraPradesh-524236"
  };
function bonafide() {

  var body = doc.getBody();
  Logger.log(body)
  body.replaceText("{name}",client.name);
  body.replaceText("{date}",client.date);
  body.replaceText("{gender}",client.gender);
  body.replaceText("{rollNo}",client.rollNo);
  body.replaceText("{roomNo}",client.roomNo);
  body.replaceText("{hostel}",client.hostel);
  body.replaceText("{yearInLetter}",client.yearInLetter);
  body.replaceText("{year}",client.year);
  body.replaceText("{degree}",client.degree);
  body.replaceText("{father}",client.father);
  body.replaceText("{address}",client.address);
  Logger.log(body);
   var pdf = doc.getAs('application/pdf');
  pdf.setName(client.rollNo+"_Bonafide"+".pdf");
  var email = client.rollNo+"@iiitdm.ac.in";
  //GmailApp.sendEmail(email, "Bonafide test emial ", doc.getId())
  GmailApp.sendEmail(email, "Bonafide test emial ", "Request you to find attached file", {attachments:[pdf]});
}
