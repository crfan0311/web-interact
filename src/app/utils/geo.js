import {Country} from 'country-state-city';
export function addTrailingZerosToDollarValue(num = 0) {
    return Number.parseFloat(num).toFixed(2);
  }
  
  export const sortBids = (bids) => {
    bids = [...bids]?.sort((a, b) => {
      return parseFloat(b.price) - parseFloat(a.price);
    });
    return bids;
  };
  
  
  export function getUserCountryName(){
      const isoCode = Intl.DateTimeFormat().resolvedOptions().locale.split('-')[1];
      const location = Country.getAllCountries().find((country)=>{
        if(country.isoCode == isoCode){
          return country;
        }
      })
      return location?.name;
  }
  