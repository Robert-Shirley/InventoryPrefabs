let currentCustomers = [];


function display_UWWC_open_customers()
{    restoreLocalCustomers()
    document.getElementById('UWWCOpenCustomers').style.display = 'block';
   let tableElements = document.getElementById('UWWCtable');
    
    let wells = currentCustomers[0]['Wells'];
    

    
    
   
    
    
    for (const well in wells) {
        let tableRow = document.createElement("tr");
        tableElements.appendChild(tableRow);
        let customerName = document.createElement("td");
        customerName.classList.add("item-qty");
        customerName.textContent = currentCustomers[0]['name'];
        
        let sizeBox = document.createElement("td");
        sizeBox.classList.add("item-qty");
        let styleBox = document.createElement("td");
        styleBox.classList.add("item-qty");
        let orderDateBox = document.createElement("td");
        orderDateBox.classList.add("item-qty");
      let style = ''
      if(wells[well]['Style'] === 0){
      style = 'Steel'}
      else
      {
          style = 'Clear'
      }
     
     let size=  wells[well]['prefab_type'];
     let orderDate = currentCustomers[0]['Date'];
     
      
     orderDateBox.textContent = orderDate;
     sizeBox.textContent = size;
    styleBox.textContent = style;
    let quantity = 1;
    let quantityBox = document.createElement('td');
    quantityBox.classList.add('item-qty');
    quantityBox.textContent = quantity;
    
    let deliveryBox = document.createElement('td');
    deliveryBox.classList.add('item-qty')
    deliveryBox.textContent = currentCustomers[0]['prefab_select_delivery']

tableRow.append(customerName,styleBox,sizeBox,quantityBox,orderDateBox,deliveryBox)

     console.log(size);
    }
    console.log(wells)
    
}







//async function getOpenOrders()
//{   let date = new Date;
//    date = date.toJSON().split('T')[0];
//    let response = await fetch('crm28.  api)
//    let data = await response.json()
//    for (let i = 0; i<100000;i++){
//        let info3 = "";
//        if (data[i] !== undefined && data[i]['Date'] === date && (data[i]['prefab_select_delivery'] === 'Deliver and Install' ||data[i]['prefab_select_delivery'] === 'Just Deliver' || data[i]['prefab_select_delivery'] === 'Customer Pickup'))
//        {
//        
//        info3 = data[i];
//       
//       currentCustomers.push(info3);
//       
//        saveLocalCustomers();
//        }
//      }
//
//}
//getOpenOrders();

function saveLocalCustomers(){
localStorage.setItem('PrefabCustomers',JSON.stringify(currentCustomers));
console.log(currentCustomers);
}

function restoreLocalCustomers()
{
    currentCustomers = JSON.parse(localStorage.getItem('PrefabCustomers'));
    if(currentCustomers === null)
    currentCustomers = []
    console.log(currentCustomers)
}



function wellInfo()
{
 

}

//wellInfo();
//getOpenOrders().then(data => console.log(data));


export default display_UWWC_open_customers;


/*
This will need to be from an API call to CrmWells
We also need to alter the table that stores prefab customers
I'll have to talk to Scott about that 

//Name
Date
Franchise
prefab select deivery
Style
Size


{ ID=35063.0, name=Julie Haen, prefab_select_delivery=Customer Pickup, 

Wells={70={ prefab_type=38 x 54, Style=0}, 71={ prefab_type=26 x 54, Style=0}}, 
Date=2021-05-24, Franchise=18}



*/