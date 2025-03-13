const url = "https://raw.githubusercontent.com/mkatay/json_ingatlanok/refs/heads/main/ingatlanok"
let category = []
let sellerName = []
let createAt = []
let imageUrl = []
let area = []
let rooms = []
let userOption = null


getData(url, renderData)

function makeCards(obj){

  const photoUrl='https://raw.githubusercontent.com/mkatay/JF_Kando_vizsga_forras/refs/heads/master/public/'
  return`
        
          <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="p-8 rounded-t-lg" src="${photoUrl + obj.imageUrl}" alt="house Image" />
    </a>
    <div class="px-5 pb-5">
        <a href="#">
            <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Eladó: ${obj.sellerName}</h5>
        </a>
        <div class="flex items-center mt-2.5 mb-5">
            <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">${obj.createAt}</span>
        </div>
        <div class="flex items-center justify-between">
            <span class="text-3xl font-bold text-gray-900 dark:text-white">Terület: ${obj.area} Szobák száma: ${obj.rooms}</span>
            <span class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">${obj.category}</span>
        </div>
    </div>
</div>

          </a>
        `
}

function renderData(data){
    console.log(data);
	category = getUniqueValues(data, 'category')
  renderButtons(category)
	stuff = data
    
}

function renderButtons(arr){
  arr.forEach(e =>{
    document.querySelector("ul").innerHTML += `
    <button onclick="getUserOption(this)" name="${e}" type="button" class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white">
    <label for="hosting${e}" class="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">${e.toUpperCase()}</label>
  </button>`
  })
}

function getUserOption(e){
        userOption = e.name
        showResults();
}


	function showResults(){
		console.log(userOption);
      document.querySelector('.cards').innerHTML=``

      stuff.forEach(obj=>{
        if(obj.category == userOption){
          document.querySelector('.cards').innerHTML += makeCards(obj)
        }
      }) 



      
	}