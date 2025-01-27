

export async function fetchCars() {
  const headers = {
    "X-RapidApi-Key": "fc20ad3482msh8095be217b3f10dp13358cjsn34c1b38c5b15",
    "X-RapidApi-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla",
    { headers: headers }
  );
    const result = await response.json();
    return result
}
