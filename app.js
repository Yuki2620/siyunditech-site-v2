
function saveLead(){
  let name=document.getElementById('name').value;
  let company=document.getElementById('company').value;
  let email=document.getElementById('email').value;
  let data=JSON.parse(localStorage.getItem('crm')||'[]');
  data.push({name,company,email,date:new Date()});
  localStorage.setItem('crm',JSON.stringify(data));
  alert('Saved to CRM');
}

function loadCRM(){
  let data=JSON.parse(localStorage.getItem('crm')||'[]');
  let html='<tr><th>Name</th><th>Company</th><th>Email</th><th>Date</th></tr>';
  data.forEach(d=>{
    html+=`<tr><td>${d.name}</td><td>${d.company}</td><td>${d.email}</td><td>${d.date}</td></tr>`;
  });
  document.getElementById('crmTable').innerHTML=html;
}
