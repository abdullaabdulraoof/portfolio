function _f(id){
    return document.getElementById(id);
}

let div = _f('services');
let btn = _f('btn')

btn.onclick = function(){
    if(div.style.height == '832px'){
        div.style.height = '432px';
    }else{
        div.style.height = '832px';
    }
    
    
    // if(div.className == 'cls'){
    //     div.className = '';
    //     btn.innerHTML = 'show more'
    // }else{
    //     div.className = 'cls';
    //     btn.innerHTML = 'show less'
    // }

}

let divv = document.querySelector('#project')
let btnn = document.querySelector('#btnn')

btnn.onclick= function (){
    if(divv.style.height=='1192px'){
        divv.style.height='692px';
    }else{
        divv.style.height='1192px';
    }
}
// it will download thye resume

let down = document.getElementById('contact-me-btn');
function download(){
    const link = document.createElement('a');
    link.href= ('Copy of Dilotte Resume Template.docx_page-0001.jpg');
    link.download = ('Abdulla_Abdul_Raoof.jpg')
    link.click();
}


document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent form from submitting normally
  
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;
  
    // Create data as an array of objects
    const data = [{
      Name: name,
      Email: email,
      Message: message
    }];
  
    // Convert to worksheet
    const worksheet = XLSX.utils.json_to_sheet(data);
  
    // Create a new workbook and append worksheet
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "ContactMessages");
  
    // Export to Excel file
    XLSX.writeFile(workbook, "ContactMessage.xlsx");
  
    alert("Message saved to Excel!");
  });

var display = 0;
let navi = _f('navi')
let intro = _f('intro')
let about = _f('about')
let contact = _f('contact')
let project = _f('project')
let footer = _f('footer')
let projectMore = _f('project-more')
let servicesMore = _f('services-more')
  function dashClick(){
    if(display ==1){
        navi.style.display= 'block'
        display = 0;
        div.style.display='none'
        intro.style.display='none'
        about.style.display='none'
        contact.style.display='none'
        project.style.display='none'
        footer.style.display='none'
        projectMore.style.display='none'
        servicesMore.style.display='none'


    }else{
        navi.style.display = 'none';
        display = 1;
        div.style.display='block'
        intro.style.display='block'
        about.style.display='block'
        contact.style.display='block'
        project.style.display='block'
        footer.style.display='block'
        projectMore.style.display='block'
        servicesMore.style.display='block'
    
    }
  }