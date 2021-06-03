const fetch = require('node-fetch');
export async function get_request(){
  const url = 'http://localhost:9094/hierarchy?pageSize=30&pageNumber=1&level=1'
  const res = await fetch(url);
  const data = await res.json();//assuming data is json
  console.log(data.results)
  return data
}
export const SINGERS = [
        {
            "id": "13846aee-9c55-43a1-aa35-a5f781c62022",
            "version": 1,
            "name": "Brambles Ltd UK",
            "plans": [
                {
                    "id": "12126ad6-820c-43d8-98b8-b7481ba4722c",
                    "version": 1,
                    "name": "HWPA Ultimate Plan",
                    "participants": [
                        {
                            "id": "7223d20b-7da5-4a73-9759-5165d7b84ca6",
                            "version": 1,
                            "firstName": "Severina",
                            "lastName": "Ogden",
                            "dateOfBirth": "1941-05-19",
                            "currentBalances": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 58.0,
                                    "amount": 582679.0,
                                    "instrument": "Boost S&P  VIX ShortTerm Futures x Leverage Daily ETP  USD"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 4.0,
                                    "amount": 505355.0,
                                    "instrument": "Cambria Foreign Shareholder Yield ETF"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 8.0,
                                    "amount": 426549.0,
                                    "instrument": "Italian BTP"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 15.0,
                                    "amount": 805982.0,
                                    "instrument": "CSOP FTSE China A ETF  AFTY"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 15.0,
                                    "amount": 147924.0,
                                    "instrument": "Australia  Information Tech"
                                }
                            ],
                            "portfolioAllocations": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 58.0,
                                    "instrument": "Boost S&P  VIX ShortTerm Futures x Leverage Daily ETP  USD"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 4.0,
                                    "instrument": "Cambria Foreign Shareholder Yield ETF"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 8.0,
                                    "instrument": "Italian BTP"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 15.0,
                                    "instrument": "CSOP FTSE China A ETF  AFTY"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 15.0,
                                    "instrument": "Australia  Information Tech"
                                }
                            ],
                            "requests": [],
                            "validatedRequests": []
                        },
                        {
                            "id": "a829a66b-c9d3-4dc8-8229-38a54591c7d7",
                            "version": 1,
                            "firstName": "Časlavka",
                            "lastName": "Ogden",
                            "dateOfBirth": "1913-04-08",
                            "currentBalances": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 87.0,
                                    "amount": 474554.0,
                                    "instrument": "Australia  Consumer Staples"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 13.0,
                                    "amount": 88736.0,
                                    "instrument": "Woodside Petroleum Ltd"
                                }
                            ],
                            "portfolioAllocations": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 87.0,
                                    "instrument": "Australia  Consumer Staples"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 13.0,
                                    "instrument": "Woodside Petroleum Ltd"
                                }
                            ],
                            "requests": [],
                            "validatedRequests": []
                        },
                        {
                            "id": "f7afe0d3-0d42-4a69-9b44-4d236f7cbc26",
                            "version": 1,
                            "firstName": "Karen",
                            "lastName": "Grujić",
                            "dateOfBirth": "1938-02-13",
                            "currentBalances": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 90.0,
                                    "amount": 322907.0,
                                    "instrument": "French OAT"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 10.0,
                                    "amount": 204057.0,
                                    "instrument": "Australia  Utilities"
                                }
                            ],
                            "portfolioAllocations": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 90.0,
                                    "instrument": "French OAT"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 10.0,
                                    "instrument": "Australia  Utilities"
                                }
                            ],
                            "requests": [],
                            "validatedRequests": []
                        },
                        {
                            "id": "6fac212b-1c17-4900-b134-3a2225e71ea1",
                            "version": 1,
                            "firstName": "Rosana",
                            "lastName": "Miletić",
                            "dateOfBirth": "2013-10-17",
                            "currentBalances": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 45.0,
                                    "amount": 988953.0,
                                    "instrument": "Italian BTP"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 46.0,
                                    "amount": 869127.0,
                                    "instrument": "German Schatz"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 9.0,
                                    "amount": 220921.0,
                                    "instrument": "Australia  Energy"
                                }
                            ],
                            "portfolioAllocations": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 45.0,
                                    "instrument": "Italian BTP"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 46.0,
                                    "instrument": "German Schatz"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 9.0,
                                    "instrument": "Australia  Energy"
                                }
                            ],
                            "requests": [],
                            "validatedRequests": []
                        },
                        {
                            "id": "8f3bb1b9-e377-4ff4-b4cb-b4707abfcc03",
                            "version": 1,
                            "firstName": "Ružica",
                            "lastName": "Ogden",
                            "dateOfBirth": "1984-03-18",
                            "currentBalances": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 36.0,
                                    "amount": 629457.0,
                                    "instrument": "US Year TNote"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 40.0,
                                    "amount": 470048.0,
                                    "instrument": "Nuix Pty LimitedXero LtdNorthern Star Resources Ltd"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 24.0,
                                    "amount": 992000.0,
                                    "instrument": "Australia  Information Tech"
                                }
                            ],
                            "portfolioAllocations": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 36.0,
                                    "instrument": "US Year TNote"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 40.0,
                                    "instrument": "Nuix Pty LimitedXero LtdNorthern Star Resources Ltd"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 24.0,
                                    "instrument": "Australia  Information Tech"
                                }
                            ],
                            "requests": [],
                            "validatedRequests": []
                        },
                        {
                            "id": "fa6a7e33-3919-48f9-b68d-29c79f067aa7",
                            "version": 1,
                            "firstName": "Jan",
                            "lastName": "Ince",
                            "dateOfBirth": "1938-09-18",
                            "currentBalances": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 22.0,
                                    "amount": 620298.0,
                                    "instrument": "Australia  Utilities"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 51.0,
                                    "amount": 285006.0,
                                    "instrument": "Fortescue Metals Group Ltd"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 2.0,
                                    "amount": 394495.0,
                                    "instrument": "CSOP Source FTSE China A UCITS ETF  USD"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 0.0,
                                    "amount": 308988.0,
                                    "instrument": "Boost US Treasuries Y x Short Daily ETP"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 1.0,
                                    "amount": 93868.0,
                                    "instrument": "Carsalescom LtdLynas Rare Earths LimitedWestpac Banking Corp"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 24.0,
                                    "amount": 636103.0,
                                    "instrument": "CMCI Composite SF UCITS ETF"
                                }
                            ],
                            "portfolioAllocations": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 22.0,
                                    "instrument": "Australia  Utilities"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 51.0,
                                    "instrument": "Fortescue Metals Group Ltd"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 2.0,
                                    "instrument": "CSOP Source FTSE China A UCITS ETF  USD"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 0.0,
                                    "instrument": "Boost US Treasuries Y x Short Daily ETP"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 1.0,
                                    "instrument": "Carsalescom LtdLynas Rare Earths LimitedWestpac Banking Corp"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 24.0,
                                    "instrument": "CMCI Composite SF UCITS ETF"
                                }
                            ],
                            "requests": [],
                            "validatedRequests": []
                        },
                        {
                            "id": "b4d79d38-42e4-4282-bdd7-dc2f2cd7dd8d",
                            "version": 1,
                            "firstName": "Helena",
                            "lastName": "Berry",
                            "dateOfBirth": "2002-09-01",
                            "currentBalances": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 90.0,
                                    "amount": 881100.0,
                                    "instrument": "Boost US S&P  x Leverage daily ETP"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 10.0,
                                    "amount": 501849.0,
                                    "instrument": "Boost Silver x Leverage Daily ETP  LSI"
                                }
                            ],
                            "portfolioAllocations": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 90.0,
                                    "instrument": "Boost US S&P  x Leverage daily ETP"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 10.0,
                                    "instrument": "Boost Silver x Leverage Daily ETP  LSI"
                                }
                            ],
                            "requests": [],
                            "validatedRequests": []
                        },
                        {
                            "id": "21fe8266-fb33-428b-827e-d1385b5ef9d7",
                            "version": 1,
                            "firstName": "Olga",
                            "lastName": "Ross",
                            "dateOfBirth": "2007-11-29",
                            "currentBalances": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 57.0,
                                    "amount": 395461.0,
                                    "instrument": "Boost US Treasuries Y x Short Daily ETP"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 15.0,
                                    "amount": 360062.0,
                                    "instrument": "Whitehaven Coal Ltd"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 23.0,
                                    "amount": 88884.0,
                                    "instrument": "Australia  Utilities"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 5.0,
                                    "amount": 401665.0,
                                    "instrument": "CMCI Composite SF UCITS ETF"
                                }
                            ],
                            "portfolioAllocations": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 57.0,
                                    "instrument": "Boost US Treasuries Y x Short Daily ETP"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 15.0,
                                    "instrument": "Whitehaven Coal Ltd"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 23.0,
                                    "instrument": "Australia  Utilities"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 5.0,
                                    "instrument": "CMCI Composite SF UCITS ETF"
                                }
                            ],
                            "requests": [],
                            "validatedRequests": []
                        },
                        {
                            "id": "9223c559-a564-44e9-a763-a8e66c6dbdfe",
                            "version": 1,
                            "firstName": "Kylie",
                            "lastName": "Gibson",
                            "dateOfBirth": "1931-07-16",
                            "currentBalances": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 22.0,
                                    "amount": 356588.0,
                                    "instrument": "FTSE  Pharmaceuticals and Biotechnology"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 27.0,
                                    "amount": 572321.0,
                                    "instrument": "FTSE  Banks"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 13.0,
                                    "amount": 232391.0,
                                    "instrument": "Rio Tinto Limited"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 12.0,
                                    "amount": 685196.0,
                                    "instrument": "Carsalescom LtdLynas Rare Earths LimitedWestpac Banking Corp"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 16.0,
                                    "amount": 717552.0,
                                    "instrument": "Australia  Industrials"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 10.0,
                                    "amount": 783737.0,
                                    "instrument": "Germany MidCap "
                                }
                            ],
                            "portfolioAllocations": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 22.0,
                                    "instrument": "FTSE  Pharmaceuticals and Biotechnology"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 27.0,
                                    "instrument": "FTSE  Banks"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 13.0,
                                    "instrument": "Rio Tinto Limited"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 12.0,
                                    "instrument": "Carsalescom LtdLynas Rare Earths LimitedWestpac Banking Corp"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 16.0,
                                    "instrument": "Australia  Industrials"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 10.0,
                                    "instrument": "Germany MidCap "
                                }
                            ],
                            "requests": [],
                            "validatedRequests": []
                        },
                        {
                            "id": "4aa46fa9-ce7f-4074-930e-210b1812b4ae",
                            "version": 1,
                            "firstName": "Jan",
                            "lastName": "Milanović",
                            "dateOfBirth": "1914-11-27",
                            "currentBalances": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 39.0,
                                    "amount": 537177.0,
                                    "instrument": "Boost US S&P  x Leverage daily ETP"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 51.0,
                                    "amount": 419358.0,
                                    "instrument": "US Year TNote"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 10.0,
                                    "amount": 415681.0,
                                    "instrument": "Cambria Global Momentum ETF"
                                }
                            ],
                            "portfolioAllocations": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 39.0,
                                    "instrument": "Boost US S&P  x Leverage daily ETP"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 51.0,
                                    "instrument": "US Year TNote"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 10.0,
                                    "instrument": "Cambria Global Momentum ETF"
                                }
                            ],
                            "requests": [],
                            "validatedRequests": []
                        },
                        {
                            "id": "72ce6334-0ff5-4d51-8106-2ec18b5ad359",
                            "version": 1,
                            "firstName": "Andrijana",
                            "lastName": "Petrović",
                            "dateOfBirth": "1901-08-13",
                            "currentBalances": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 22.0,
                                    "amount": 112007.0,
                                    "instrument": "French OAT"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 24.0,
                                    "amount": 892886.0,
                                    "instrument": "French OAT"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 49.0,
                                    "amount": 573419.0,
                                    "instrument": "Australia  Health Care"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 5.0,
                                    "amount": 273855.0,
                                    "instrument": "Brazil "
                                }
                            ],
                            "portfolioAllocations": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 22.0,
                                    "instrument": "French OAT"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 24.0,
                                    "instrument": "French OAT"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 49.0,
                                    "instrument": "Australia  Health Care"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 5.0,
                                    "instrument": "Brazil "
                                }
                            ],
                            "requests": [],
                            "validatedRequests": []
                        },
                        {
                            "id": "8899be1e-f993-497a-9426-b8160c1f1aaa",
                            "version": 1,
                            "firstName": "Tomka",
                            "lastName": "Paige",
                            "dateOfBirth": "1918-08-06",
                            "currentBalances": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 82.0,
                                    "amount": 529630.0,
                                    "instrument": "Germany Tech "
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 18.0,
                                    "amount": 39799.0,
                                    "instrument": "Australia  Information Tech"
                                }
                            ],
                            "portfolioAllocations": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 82.0,
                                    "instrument": "Germany Tech "
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 18.0,
                                    "instrument": "Australia  Information Tech"
                                }
                            ],
                            "requests": [],
                            "validatedRequests": []
                        },
                        {
                            "id": "4a9377b1-5418-4e02-bfc8-7c6efff23ebf",
                            "version": 1,
                            "firstName": "Ranđel",
                            "lastName": "White",
                            "dateOfBirth": "2008-01-02",
                            "currentBalances": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 16.0,
                                    "amount": 93946.0,
                                    "instrument": "Portugal "
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 45.0,
                                    "amount": 21581.0,
                                    "instrument": "French OAT"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 13.0,
                                    "amount": 753138.0,
                                    "instrument": "Breakwave Dry Bulk Shipping ETF"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 11.0,
                                    "amount": 41003.0,
                                    "instrument": "FTSE  Electronic"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 15.0,
                                    "amount": 250629.0,
                                    "instrument": "German Buxl"
                                }
                            ],
                            "portfolioAllocations": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 16.0,
                                    "instrument": "Portugal "
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 45.0,
                                    "instrument": "French OAT"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 13.0,
                                    "instrument": "Breakwave Dry Bulk Shipping ETF"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 11.0,
                                    "instrument": "FTSE  Electronic"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 15.0,
                                    "instrument": "German Buxl"
                                }
                            ],
                            "requests": [],
                            "validatedRequests": []
                        },
                        {
                            "id": "53b5230e-6ef0-4fa6-83ac-7147bb3bbab0",
                            "version": 1,
                            "firstName": "Tim",
                            "lastName": "Hughes",
                            "dateOfBirth": "1973-02-02",
                            "currentBalances": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 4.0,
                                    "amount": 600405.0,
                                    "instrument": "Australia  Utilities"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 68.0,
                                    "amount": 9194.0,
                                    "instrument": "FTSE  Pharmaceuticals and Biotechnology"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 4.0,
                                    "amount": 390403.0,
                                    "instrument": "CSOP FTSE China A ETF  "
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 24.0,
                                    "amount": 484654.0,
                                    "instrument": "Apple Inc (All Sessions)"
                                }
                            ],
                            "portfolioAllocations": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 4.0,
                                    "instrument": "Australia  Utilities"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 68.0,
                                    "instrument": "FTSE  Pharmaceuticals and Biotechnology"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 4.0,
                                    "instrument": "CSOP FTSE China A ETF  "
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 24.0,
                                    "instrument": "Apple Inc (All Sessions)"
                                }
                            ],
                            "requests": [],
                            "validatedRequests": []
                        },
                        {
                            "id": "b05d070f-a7cc-4311-93e1-b466ab3b4dcb",
                            "version": 1,
                            "firstName": "Hranislava",
                            "lastName": "Russell",
                            "dateOfBirth": "2002-11-24",
                            "currentBalances": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 97.0,
                                    "amount": 19501.0,
                                    "instrument": "Boost S&P  VIX ShortTerm Futures x Leverage Daily ETP  USD"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 3.0,
                                    "amount": 220586.0,
                                    "instrument": "FTSE  Travel and Leisure"
                                }
                            ],
                            "portfolioAllocations": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 97.0,
                                    "instrument": "Boost S&P  VIX ShortTerm Futures x Leverage Daily ETP  USD"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 3.0,
                                    "instrument": "FTSE  Travel and Leisure"
                                }
                            ],
                            "requests": [],
                            "validatedRequests": []
                        },
                        {
                            "id": "ddbf0575-d0f6-4c86-b037-53820d080747",
                            "version": 1,
                            "firstName": "Ćetko",
                            "lastName": "Campbell",
                            "dateOfBirth": "1931-08-20",
                            "currentBalances": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 9.0,
                                    "amount": 876557.0,
                                    "instrument": "Brazil "
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 75.0,
                                    "amount": 50219.0,
                                    "instrument": "CSOP Hang Seng TECH Index Daily X Leveraged Product"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 16.0,
                                    "amount": 273821.0,
                                    "instrument": "US Year TNote"
                                }
                            ],
                            "portfolioAllocations": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 9.0,
                                    "instrument": "Brazil "
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 75.0,
                                    "instrument": "CSOP Hang Seng TECH Index Daily X Leveraged Product"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 16.0,
                                    "instrument": "US Year TNote"
                                }
                            ],
                            "requests": [],
                            "validatedRequests": []
                        },
                        {
                            "id": "c7ef234f-a1fa-4c87-abda-f15d9c632b42",
                            "version": 1,
                            "firstName": "Timon",
                            "lastName": "Campbell",
                            "dateOfBirth": "1951-02-23",
                            "currentBalances": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 70.0,
                                    "amount": 931062.0,
                                    "instrument": "CSOP Hang Seng Index Daily (x) Inverse Product"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 23.0,
                                    "amount": 521694.0,
                                    "instrument": "Norway "
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 7.0,
                                    "amount": 256249.0,
                                    "instrument": "Breakwave Dry Bulk Shipping ETF"
                                }
                            ],
                            "portfolioAllocations": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 70.0,
                                    "instrument": "CSOP Hang Seng Index Daily (x) Inverse Product"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 23.0,
                                    "instrument": "Norway "
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 7.0,
                                    "instrument": "Breakwave Dry Bulk Shipping ETF"
                                }
                            ],
                            "requests": [],
                            "validatedRequests": []
                        },
                        {
                            "id": "8e9d0838-a5a3-40e6-a556-b6535dc81777",
                            "version": 1,
                            "firstName": "Piers",
                            "lastName": "Hemmings",
                            "dateOfBirth": "1941-07-19",
                            "currentBalances": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 78.0,
                                    "amount": 827855.0,
                                    "instrument": "Australia  Health Care"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 22.0,
                                    "amount": 874243.0,
                                    "instrument": "Apple Inc (All Sessions)"
                                }
                            ],
                            "portfolioAllocations": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 78.0,
                                    "instrument": "Australia  Health Care"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 22.0,
                                    "instrument": "Apple Inc (All Sessions)"
                                }
                            ],
                            "requests": [],
                            "validatedRequests": []
                        },
                        {
                            "id": "febe4603-f248-48bb-9539-0254551b8e17",
                            "version": 1,
                            "firstName": "Teodor",
                            "lastName": "Johnston",
                            "dateOfBirth": "1976-10-10",
                            "currentBalances": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 4.0,
                                    "amount": 867411.0,
                                    "instrument": "Nuix Pty LimitedXero LtdNorthern Star Resources Ltd"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 39.0,
                                    "amount": 110528.0,
                                    "instrument": "FTSE  Oil Equipment and Services"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 1.0,
                                    "amount": 771070.0,
                                    "instrument": "FTSE  Tobacco"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 22.0,
                                    "amount": 553536.0,
                                    "instrument": "CSOP Source FTSE China A UCITS ETF  GBP"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 13.0,
                                    "amount": 627521.0,
                                    "instrument": "FTSE  Oil and Gas Producers"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 21.0,
                                    "amount": 373038.0,
                                    "instrument": "Australia  Health Care"
                                }
                            ],
                            "portfolioAllocations": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 4.0,
                                    "instrument": "Nuix Pty LimitedXero LtdNorthern Star Resources Ltd"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 39.0,
                                    "instrument": "FTSE  Oil Equipment and Services"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 1.0,
                                    "instrument": "FTSE  Tobacco"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 22.0,
                                    "instrument": "CSOP Source FTSE China A UCITS ETF  GBP"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 13.0,
                                    "instrument": "FTSE  Oil and Gas Producers"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 21.0,
                                    "instrument": "Australia  Health Care"
                                }
                            ],
                            "requests": [],
                            "validatedRequests": []
                        },
                        {
                            "id": "5db3ac15-3803-4d67-9368-47fc092593aa",
                            "version": 1,
                            "firstName": "Radinka",
                            "lastName": "Sutherland",
                            "dateOfBirth": "1980-04-11",
                            "currentBalances": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 81.0,
                                    "amount": 759454.0,
                                    "instrument": "Australia  Industrials"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 19.0,
                                    "amount": 511280.0,
                                    "instrument": "Cambria Shareholder Yield ETF"
                                }
                            ],
                            "portfolioAllocations": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 81.0,
                                    "instrument": "Australia  Industrials"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 19.0,
                                    "instrument": "Cambria Shareholder Yield ETF"
                                }
                            ],
                            "requests": [],
                            "validatedRequests": []
                        },
                        {
                            "id": "aa78dbaf-a5f5-4537-9e5c-1adc51e90b85",
                            "version": 1,
                            "firstName": "Radinka",
                            "lastName": "Clarkson",
                            "dateOfBirth": "1941-09-11",
                            "currentBalances": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 9.0,
                                    "amount": 235226.0,
                                    "instrument": "Macquarie Group Ltd"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 52.0,
                                    "amount": 916582.0,
                                    "instrument": "CSOP Source FTSE China A UCITS ETF  USD"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 17.0,
                                    "amount": 741230.0,
                                    "instrument": "FTSE  Electricity"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 22.0,
                                    "amount": 918245.0,
                                    "instrument": "Norway "
                                }
                            ],
                            "portfolioAllocations": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 9.0,
                                    "instrument": "Macquarie Group Ltd"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 52.0,
                                    "instrument": "CSOP Source FTSE China A UCITS ETF  USD"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 17.0,
                                    "instrument": "FTSE  Electricity"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 22.0,
                                    "instrument": "Norway "
                                }
                            ],
                            "requests": [],
                            "validatedRequests": []
                        },
                        {
                            "id": "592acb1d-bc4e-4a09-9153-e501ea7adac4",
                            "version": 1,
                            "firstName": "Ristivoje",
                            "lastName": "Metcalfe",
                            "dateOfBirth": "1944-12-16",
                            "currentBalances": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 6.0,
                                    "amount": 431194.0,
                                    "instrument": "Newcrest Mining Ltd"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 80.0,
                                    "amount": 466709.0,
                                    "instrument": "Italian BTS"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 14.0,
                                    "amount": 60013.0,
                                    "instrument": "Portugal "
                                }
                            ],
                            "portfolioAllocations": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 6.0,
                                    "instrument": "Newcrest Mining Ltd"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 80.0,
                                    "instrument": "Italian BTS"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 14.0,
                                    "instrument": "Portugal "
                                }
                            ],
                            "requests": [],
                            "validatedRequests": []
                        },
                        {
                            "id": "1240189b-a69e-45f7-b81c-87a730b88f9a",
                            "version": 1,
                            "firstName": "Romina",
                            "lastName": "Ristić",
                            "dateOfBirth": "2013-09-18",
                            "currentBalances": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 44.0,
                                    "amount": 65759.0,
                                    "instrument": "FTSE  Construction and Materials"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 24.0,
                                    "amount": 935409.0,
                                    "instrument": "Italian BTP"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 16.0,
                                    "amount": 372991.0,
                                    "instrument": "FTSE  Aerospace and Defence"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 16.0,
                                    "amount": 644680.0,
                                    "instrument": "Newcrest Mining Ltd"
                                }
                            ],
                            "portfolioAllocations": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 44.0,
                                    "instrument": "FTSE  Construction and Materials"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 24.0,
                                    "instrument": "Italian BTP"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 16.0,
                                    "instrument": "FTSE  Aerospace and Defence"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 16.0,
                                    "instrument": "Newcrest Mining Ltd"
                                }
                            ],
                            "requests": [],
                            "validatedRequests": []
                        },
                        {
                            "id": "340efd59-179f-4f78-8526-272bd17ace1c",
                            "version": 1,
                            "firstName": "Stole",
                            "lastName": "Stevanović",
                            "dateOfBirth": "1936-12-10",
                            "currentBalances": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 17.0,
                                    "amount": 490039.0,
                                    "instrument": "Techmark"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 46.0,
                                    "amount": 342140.0,
                                    "instrument": "FTSE  Oil Equipment and Services"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 20.0,
                                    "amount": 171535.0,
                                    "instrument": "Boost Silver x Leverage Daily ETP  LSI"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 17.0,
                                    "amount": 646576.0,
                                    "instrument": "FTSE  Tobacco"
                                }
                            ],
                            "portfolioAllocations": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 17.0,
                                    "instrument": "Techmark"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 46.0,
                                    "instrument": "FTSE  Oil Equipment and Services"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 20.0,
                                    "instrument": "Boost Silver x Leverage Daily ETP  LSI"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 17.0,
                                    "instrument": "FTSE  Tobacco"
                                }
                            ],
                            "requests": [],
                            "validatedRequests": []
                        },
                        {
                            "id": "85a49d5c-2fa0-478d-b135-1a53f1e4dee1",
                            "version": 1,
                            "firstName": "Toša",
                            "lastName": "Quinn",
                            "dateOfBirth": "1946-03-24",
                            "currentBalances": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 22.0,
                                    "amount": 273985.0,
                                    "instrument": "Appen LimitedNIO Inc  ADR (All Sessions)"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 73.0,
                                    "amount": 246914.0,
                                    "instrument": "Cambria Global Momentum ETF"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 5.0,
                                    "amount": 795040.0,
                                    "instrument": "FTSE  Electricity"
                                }
                            ],
                            "portfolioAllocations": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 22.0,
                                    "instrument": "Appen LimitedNIO Inc  ADR (All Sessions)"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 73.0,
                                    "instrument": "Cambria Global Momentum ETF"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 5.0,
                                    "instrument": "FTSE  Electricity"
                                }
                            ],
                            "requests": [],
                            "validatedRequests": []
                        },
                        {
                            "id": "f9838189-3b5b-4fd8-a936-6d35dd4d7247",
                            "version": 1,
                            "firstName": "Rastko",
                            "lastName": "Young",
                            "dateOfBirth": "1968-03-05",
                            "currentBalances": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 69.0,
                                    "amount": 436638.0,
                                    "instrument": "a Milk Co Ltd"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 2.0,
                                    "amount": 930714.0,
                                    "instrument": "Boost US Treasuries Y x Short Daily ETP"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 26.0,
                                    "amount": 223214.0,
                                    "instrument": "FTSE  Oil Equipment and Services"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 3.0,
                                    "amount": 781569.0,
                                    "instrument": "CSOP FTSE China A ETF  "
                                }
                            ],
                            "portfolioAllocations": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 69.0,
                                    "instrument": "a Milk Co Ltd"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 2.0,
                                    "instrument": "Boost US Treasuries Y x Short Daily ETP"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 26.0,
                                    "instrument": "FTSE  Oil Equipment and Services"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 3.0,
                                    "instrument": "CSOP FTSE China A ETF  "
                                }
                            ],
                            "requests": [],
                            "validatedRequests": []
                        },
                        {
                            "id": "b298b801-2faf-4531-9e20-e404f6dca071",
                            "version": 1,
                            "firstName": "Steven",
                            "lastName": "McLean",
                            "dateOfBirth": "1915-07-07",
                            "currentBalances": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 86.0,
                                    "amount": 780716.0,
                                    "instrument": "Australia  Financials"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 14.0,
                                    "amount": 587891.0,
                                    "instrument": "Australia  Financials"
                                }
                            ],
                            "portfolioAllocations": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 86.0,
                                    "instrument": "Australia  Financials"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 14.0,
                                    "instrument": "Australia  Financials"
                                }
                            ],
                            "requests": [],
                            "validatedRequests": []
                        },
                        {
                            "id": "944334a1-0fe7-424a-a354-633aec6a1601",
                            "version": 1,
                            "firstName": "Milica",
                            "lastName": "Trifunović",
                            "dateOfBirth": "1975-09-15",
                            "currentBalances": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 49.0,
                                    "amount": 667818.0,
                                    "instrument": "Cambria Global Value ETF"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 44.0,
                                    "amount": 980449.0,
                                    "instrument": "CSOP Hang Seng TECH Index Daily X Leveraged Product"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 7.0,
                                    "amount": 534456.0,
                                    "instrument": "Boost WTI Oil x Leverage Daily ETP"
                                }
                            ],
                            "portfolioAllocations": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 49.0,
                                    "instrument": "Cambria Global Value ETF"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 44.0,
                                    "instrument": "CSOP Hang Seng TECH Index Daily X Leveraged Product"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 7.0,
                                    "instrument": "Boost WTI Oil x Leverage Daily ETP"
                                }
                            ],
                            "requests": [],
                            "validatedRequests": []
                        },
                        {
                            "id": "79262424-bd50-4a17-9f23-60d7b30f19c5",
                            "version": 1,
                            "firstName": "Ratibor",
                            "lastName": "Bell",
                            "dateOfBirth": "1980-09-26",
                            "currentBalances": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 15.0,
                                    "amount": 68313.0,
                                    "instrument": "Brazil "
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 57.0,
                                    "amount": 300944.0,
                                    "instrument": "Australia  Communications"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 27.0,
                                    "amount": 601995.0,
                                    "instrument": "Boost Natural Gas x Short Daily ETP"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 1.0,
                                    "amount": 66609.0,
                                    "instrument": "Rio Tinto Limited"
                                }
                            ],
                            "portfolioAllocations": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 15.0,
                                    "instrument": "Brazil "
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 57.0,
                                    "instrument": "Australia  Communications"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 27.0,
                                    "instrument": "Boost Natural Gas x Short Daily ETP"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 1.0,
                                    "instrument": "Rio Tinto Limited"
                                }
                            ],
                            "requests": [],
                            "validatedRequests": []
                        },
                        {
                            "id": "428e723f-76c2-4d0b-a1bc-94d878480d83",
                            "version": 1,
                            "firstName": "Petra",
                            "lastName": "Mitrović",
                            "dateOfBirth": "1972-05-09",
                            "currentBalances": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 20.0,
                                    "amount": 638129.0,
                                    "instrument": "CSOP FTSE China A ETF  "
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 24.0,
                                    "amount": 271229.0,
                                    "instrument": "Apple Inc (All Sessions)"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 24.0,
                                    "amount": 952610.0,
                                    "instrument": "Boost S&P  VIX ShortTerm Futures x Leverage Daily ETP  USD"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 9.0,
                                    "amount": 591884.0,
                                    "instrument": "Breakwave Dry Bulk Shipping ETF"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 23.0,
                                    "amount": 354900.0,
                                    "instrument": "Boost US S&P x Short Daily ETP"
                                }
                            ],
                            "portfolioAllocations": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 20.0,
                                    "instrument": "CSOP FTSE China A ETF  "
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 24.0,
                                    "instrument": "Apple Inc (All Sessions)"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 24.0,
                                    "instrument": "Boost S&P  VIX ShortTerm Futures x Leverage Daily ETP  USD"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 9.0,
                                    "instrument": "Breakwave Dry Bulk Shipping ETF"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 23.0,
                                    "instrument": "Boost US S&P x Short Daily ETP"
                                }
                            ],
                            "requests": [],
                            "validatedRequests": []
                        },
                        {
                            "id": "e110f548-1c4b-4111-9589-0c96bdde256f",
                            "version": 1,
                            "firstName": "Oliver",
                            "lastName": "Cvetković",
                            "dateOfBirth": "2010-12-11",
                            "currentBalances": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 5.0,
                                    "amount": 550281.0,
                                    "instrument": "US Year TNote"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 90.0,
                                    "amount": 526254.0,
                                    "instrument": "Australia  Health Care"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 5.0,
                                    "amount": 602981.0,
                                    "instrument": "Boost US S&P x Short Daily ETP"
                                }
                            ],
                            "portfolioAllocations": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 5.0,
                                    "instrument": "US Year TNote"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 90.0,
                                    "instrument": "Australia  Health Care"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 5.0,
                                    "instrument": "Boost US S&P x Short Daily ETP"
                                }
                            ],
                            "requests": [],
                            "validatedRequests": []
                        },
                        {
                            "id": "78eba864-4d91-464b-884e-f8233d381a8a",
                            "version": 1,
                            "firstName": "Stole",
                            "lastName": "Nolan",
                            "dateOfBirth": "1992-06-24",
                            "currentBalances": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 50.0,
                                    "amount": 559546.0,
                                    "instrument": "Breakwave Dry Bulk Shipping ETF"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 13.0,
                                    "amount": 861402.0,
                                    "instrument": "Carsalescom LtdLynas Rare Earths LimitedWestpac Banking Corp"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 18.0,
                                    "amount": 108492.0,
                                    "instrument": "Breakwave Dry Bulk Shipping ETF"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 19.0,
                                    "amount": 243698.0,
                                    "instrument": "Japanese Government Bond"
                                }
                            ],
                            "portfolioAllocations": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 50.0,
                                    "instrument": "Breakwave Dry Bulk Shipping ETF"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 13.0,
                                    "instrument": "Carsalescom LtdLynas Rare Earths LimitedWestpac Banking Corp"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 18.0,
                                    "instrument": "Breakwave Dry Bulk Shipping ETF"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 19.0,
                                    "instrument": "Japanese Government Bond"
                                }
                            ],
                            "requests": [],
                            "validatedRequests": []
                        },
                        {
                            "id": "fe9fdadf-caef-4764-9e10-7753137e71b5",
                            "version": 1,
                            "firstName": "Alison",
                            "lastName": "Stevanović",
                            "dateOfBirth": "1991-10-03",
                            "currentBalances": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 37.0,
                                    "amount": 789163.0,
                                    "instrument": "Rio Tinto Limited"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 22.0,
                                    "amount": 351160.0,
                                    "instrument": "Australia  Utilities"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 7.0,
                                    "amount": 711010.0,
                                    "instrument": "Cambria Global Value ETF"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 30.0,
                                    "amount": 110891.0,
                                    "instrument": "Australia  Consumer Staples"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 4.0,
                                    "amount": 418769.0,
                                    "instrument": "FTSE  Electricity"
                                }
                            ],
                            "portfolioAllocations": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 37.0,
                                    "instrument": "Rio Tinto Limited"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 22.0,
                                    "instrument": "Australia  Utilities"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 7.0,
                                    "instrument": "Cambria Global Value ETF"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 30.0,
                                    "instrument": "Australia  Consumer Staples"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 4.0,
                                    "instrument": "FTSE  Electricity"
                                }
                            ],
                            "requests": [],
                            "validatedRequests": []
                        }
                    ]
                },
                {
                    "id": "8fa49916-1f42-4a4a-8393-74855f0dbb53",
                    "version": 1,
                    "name": "Basic",
                    "participants": [
                        {
                            "id": "17743158-d8a7-4131-a1d0-a5ac8ffc7b96",
                            "version": 1,
                            "firstName": "Čeda",
                            "lastName": "Miller",
                            "dateOfBirth": "1966-12-17",
                            "currentBalances": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 76.0,
                                    "amount": 221837.0,
                                    "instrument": "FTSE  Beverages"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 24.0,
                                    "amount": 760678.0,
                                    "instrument": "CSOP FTSE China A ETF  "
                                }
                            ],
                            "portfolioAllocations": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 76.0,
                                    "instrument": "FTSE  Beverages"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 24.0,
                                    "instrument": "CSOP FTSE China A ETF  "
                                }
                            ],
                            "requests": [],
                            "validatedRequests": []
                        },
                        {
                            "id": "6f9a0396-79c1-42c9-97c1-954879315379",
                            "version": 1,
                            "firstName": "Radoslav",
                            "lastName": "0Gajić",
                            "dateOfBirth": "1914-01-25",
                            "currentBalances": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 83.0,
                                    "amount": 329776.0,
                                    "instrument": "Cambria Global Momentum ETF"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 17.0,
                                    "amount": 729939.0,
                                    "instrument": "Boost Natural Gas x Short Daily ETP"
                                }
                            ],
                            "portfolioAllocations": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 83.0,
                                    "instrument": "Cambria Global Momentum ETF"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 17.0,
                                    "instrument": "Boost Natural Gas x Short Daily ETP"
                                }
                            ],
                            "requests": [],
                            "validatedRequests": []
                        },
                        {
                            "id": "1bd7327d-d8a9-4a60-90df-c70424ed9140",
                            "version": 1,
                            "firstName": "Stana",
                            "lastName": "Hughes",
                            "dateOfBirth": "1966-01-23",
                            "currentBalances": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 66.0,
                                    "amount": 911604.0,
                                    "instrument": "FTSE  Pharmaceuticals and Biotechnology"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 14.0,
                                    "amount": 862884.0,
                                    "instrument": "FTSE  Support Services"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 20.0,
                                    "amount": 726696.0,
                                    "instrument": "FTSE  Aerospace and Defence"
                                }
                            ],
                            "portfolioAllocations": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 66.0,
                                    "instrument": "FTSE  Pharmaceuticals and Biotechnology"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 14.0,
                                    "instrument": "FTSE  Support Services"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 20.0,
                                    "instrument": "FTSE  Aerospace and Defence"
                                }
                            ],
                            "requests": [],
                            "validatedRequests": []
                        },
                        {
                            "id": "753f9273-f089-473a-b01a-3aaf53fbbd2b",
                            "version": 1,
                            "firstName": "Tihana",
                            "lastName": "Peters",
                            "dateOfBirth": "1990-02-14",
                            "currentBalances": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 32.0,
                                    "amount": 974402.0,
                                    "instrument": "Evolution Mining Ltd"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 13.0,
                                    "amount": 141729.0,
                                    "instrument": "Rio Tinto PLC"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 15.0,
                                    "amount": 772689.0,
                                    "instrument": "FTSE  Oil and Gas Producers"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 8.0,
                                    "amount": 666630.0,
                                    "instrument": "FTSE  Travel and Leisure"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 23.0,
                                    "amount": 611660.0,
                                    "instrument": "Silver Lake Resources Ltd"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 9.0,
                                    "amount": 945372.0,
                                    "instrument": "Rio Tinto Limited"
                                }
                            ],
                            "portfolioAllocations": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 32.0,
                                    "instrument": "Evolution Mining Ltd"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 13.0,
                                    "instrument": "Rio Tinto PLC"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 15.0,
                                    "instrument": "FTSE  Oil and Gas Producers"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 8.0,
                                    "instrument": "FTSE  Travel and Leisure"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 23.0,
                                    "instrument": "Silver Lake Resources Ltd"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 9.0,
                                    "instrument": "Rio Tinto Limited"
                                }
                            ],
                            "requests": [],
                            "validatedRequests": []
                        },
                        {
                            "id": "5d8624d9-eb68-4148-a408-aff88036eba9",
                            "version": 1,
                            "firstName": "Sam",
                            "lastName": "Henderson",
                            "dateOfBirth": "1995-11-05",
                            "currentBalances": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 85.0,
                                    "amount": 787317.0,
                                    "instrument": "Rio Tinto Limited"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 15.0,
                                    "amount": 493221.0,
                                    "instrument": "CSOP Hang Seng Index Daily (x) Inverse Product"
                                }
                            ],
                            "portfolioAllocations": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 85.0,
                                    "instrument": "Rio Tinto Limited"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 15.0,
                                    "instrument": "CSOP Hang Seng Index Daily (x) Inverse Product"
                                }
                            ],
                            "requests": [],
                            "validatedRequests": []
                        },
                        {
                            "id": "fe7a5f5f-7c7f-4884-86bf-0ff2b50fa36d",
                            "version": 1,
                            "firstName": "Sanja",
                            "lastName": "Skinner",
                            "dateOfBirth": "2011-07-06",
                            "currentBalances": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 49.0,
                                    "amount": 188282.0,
                                    "instrument": "CSOP SZSE ChiNext ETF"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 43.0,
                                    "amount": 513698.0,
                                    "instrument": "Boost Natural Gas x Short Daily ETP"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 8.0,
                                    "amount": 742210.0,
                                    "instrument": "Flight Centre Travel Group Ltd"
                                }
                            ],
                            "portfolioAllocations": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 49.0,
                                    "instrument": "CSOP SZSE ChiNext ETF"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 43.0,
                                    "instrument": "Boost Natural Gas x Short Daily ETP"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 8.0,
                                    "instrument": "Flight Centre Travel Group Ltd"
                                }
                            ],
                            "requests": [],
                            "validatedRequests": []
                        },
                        {
                            "id": "4a385a49-ff1e-4f5e-8fcc-fa983f24e695",
                            "version": 1,
                            "firstName": "Hranislava",
                            "lastName": "Ilić",
                            "dateOfBirth": "1960-07-16",
                            "currentBalances": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 9.0,
                                    "amount": 752628.0,
                                    "instrument": "Appen LimitedNIO Inc  ADR (All Sessions)"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 45.0,
                                    "amount": 16365.0,
                                    "instrument": "FTSE  Beverages"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 16.0,
                                    "amount": 334993.0,
                                    "instrument": "Boost Silver x Leverage Daily ETP  LSI"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 26.0,
                                    "amount": 870839.0,
                                    "instrument": "Cambria Foreign Shareholder Yield ETF"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 4.0,
                                    "amount": 258601.0,
                                    "instrument": "Nuix Pty LimitedXero LtdNorthern Star Resources Ltd"
                                }
                            ],
                            "portfolioAllocations": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 9.0,
                                    "instrument": "Appen LimitedNIO Inc  ADR (All Sessions)"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 45.0,
                                    "instrument": "FTSE  Beverages"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 16.0,
                                    "instrument": "Boost Silver x Leverage Daily ETP  LSI"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 26.0,
                                    "instrument": "Cambria Foreign Shareholder Yield ETF"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 4.0,
                                    "instrument": "Nuix Pty LimitedXero LtdNorthern Star Resources Ltd"
                                }
                            ],
                            "requests": [],
                            "validatedRequests": []
                        },
                        {
                            "id": "d9c738e6-a031-4de3-8589-bd1a0e693abd",
                            "version": 1,
                            "firstName": "Toplica",
                            "lastName": "Mackenzie",
                            "dateOfBirth": "2000-08-10",
                            "currentBalances": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 53.0,
                                    "amount": 645038.0,
                                    "instrument": "FTSE  Construction and Materials"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 1.0,
                                    "amount": 312601.0,
                                    "instrument": "CSOP Source FTSE China A UCITS ETF  USD"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 36.0,
                                    "amount": 229267.0,
                                    "instrument": "FTSE  Oil Equipment and Services"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 10.0,
                                    "amount": 178283.0,
                                    "instrument": "US Year TNote"
                                }
                            ],
                            "portfolioAllocations": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 53.0,
                                    "instrument": "FTSE  Construction and Materials"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 1.0,
                                    "instrument": "CSOP Source FTSE China A UCITS ETF  USD"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 36.0,
                                    "instrument": "FTSE  Oil Equipment and Services"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 10.0,
                                    "instrument": "US Year TNote"
                                }
                            ],
                            "requests": [],
                            "validatedRequests": []
                        },
                        {
                            "id": "3c10ca71-b37a-4b66-96e3-099af4101796",
                            "version": 1,
                            "firstName": "Soka",
                            "lastName": "Milovanović",
                            "dateOfBirth": "1986-05-20",
                            "currentBalances": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 15.0,
                                    "amount": 270382.0,
                                    "instrument": "Italian BTS"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 18.0,
                                    "amount": 235692.0,
                                    "instrument": "Euro Stoxx Banks Index"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 30.0,
                                    "amount": 986523.0,
                                    "instrument": "UK Long Gilt"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 8.0,
                                    "amount": 741682.0,
                                    "instrument": "Australia  Financials"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 12.0,
                                    "amount": 328217.0,
                                    "instrument": "Evolution Mining Ltd"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 17.0,
                                    "amount": 49816.0,
                                    "instrument": "German Bund"
                                }
                            ],
                            "portfolioAllocations": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 15.0,
                                    "instrument": "Italian BTS"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 18.0,
                                    "instrument": "Euro Stoxx Banks Index"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 30.0,
                                    "instrument": "UK Long Gilt"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 8.0,
                                    "instrument": "Australia  Financials"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 12.0,
                                    "instrument": "Evolution Mining Ltd"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 17.0,
                                    "instrument": "German Bund"
                                }
                            ],
                            "requests": [],
                            "validatedRequests": []
                        },
                        {
                            "id": "968fd8bd-b7a4-40c8-b0ef-cf9f4cfa3240",
                            "version": 1,
                            "firstName": "Dylan",
                            "lastName": "Vasić",
                            "dateOfBirth": "2006-10-21",
                            "currentBalances": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 11.0,
                                    "amount": 949456.0,
                                    "instrument": "Australia  Energy"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 32.0,
                                    "amount": 476361.0,
                                    "instrument": "German Bobl"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 55.0,
                                    "amount": 449018.0,
                                    "instrument": "Silver Lake Resources Ltd"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 2.0,
                                    "amount": 335194.0,
                                    "instrument": "Flight Centre Travel Group Ltd"
                                }
                            ],
                            "portfolioAllocations": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 11.0,
                                    "instrument": "Australia  Energy"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 32.0,
                                    "instrument": "German Bobl"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 55.0,
                                    "instrument": "Silver Lake Resources Ltd"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 2.0,
                                    "instrument": "Flight Centre Travel Group Ltd"
                                }
                            ],
                            "requests": [],
                            "validatedRequests": []
                        },
                        {
                            "id": "d9e5741e-1e20-4957-8a69-685abec59376",
                            "version": 1,
                            "firstName": "Toda",
                            "lastName": "Marinković",
                            "dateOfBirth": "1943-12-07",
                            "currentBalances": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 78.0,
                                    "amount": 155443.0,
                                    "instrument": "Greece "
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 22.0,
                                    "amount": 151987.0,
                                    "instrument": "FTSE  Construction and Materials"
                                }
                            ],
                            "portfolioAllocations": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 78.0,
                                    "instrument": "Greece "
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 22.0,
                                    "instrument": "FTSE  Construction and Materials"
                                }
                            ],
                            "requests": [],
                            "validatedRequests": []
                        },
                        {
                            "id": "365e6527-7c89-4574-a367-366ca5b80c8a",
                            "version": 1,
                            "firstName": "Kylie",
                            "lastName": "Ellison",
                            "dateOfBirth": "1920-09-18",
                            "currentBalances": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 31.0,
                                    "amount": 275905.0,
                                    "instrument": "FTSE  Construction and Materials"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 51.0,
                                    "amount": 336706.0,
                                    "instrument": "US Year TNote"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 18.0,
                                    "amount": 448805.0,
                                    "instrument": "Cambria Emerging Shareholder Yield ETF"
                                }
                            ],
                            "portfolioAllocations": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 31.0,
                                    "instrument": "FTSE  Construction and Materials"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 51.0,
                                    "instrument": "US Year TNote"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 18.0,
                                    "instrument": "Cambria Emerging Shareholder Yield ETF"
                                }
                            ],
                            "requests": [],
                            "validatedRequests": []
                        },
                        {
                            "id": "1f859e42-9145-4a20-b23a-f13e45dfd690",
                            "version": 1,
                            "firstName": "Fiona",
                            "lastName": "Ivković",
                            "dateOfBirth": "1991-06-03",
                            "currentBalances": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 55.0,
                                    "amount": 129861.0,
                                    "instrument": "FTSE  Chemicals"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 44.0,
                                    "amount": 396132.0,
                                    "instrument": "Australia  Communications"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 1.0,
                                    "amount": 271694.0,
                                    "instrument": "Fortescue Metals Group Ltd"
                                }
                            ],
                            "portfolioAllocations": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 55.0,
                                    "instrument": "FTSE  Chemicals"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 44.0,
                                    "instrument": "Australia  Communications"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 1.0,
                                    "instrument": "Fortescue Metals Group Ltd"
                                }
                            ],
                            "requests": [],
                            "validatedRequests": []
                        },
                        {
                            "id": "a956bd49-f321-4a6f-a2d2-2063d6ed3078",
                            "version": 1,
                            "firstName": "Ado",
                            "lastName": "Smith",
                            "dateOfBirth": "2000-10-16",
                            "currentBalances": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 58.0,
                                    "amount": 880301.0,
                                    "instrument": "US Treasury BondDenmark "
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 27.0,
                                    "amount": 434260.0,
                                    "instrument": "Boost ShortDAX x Daily ETP SDE"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 15.0,
                                    "amount": 955908.0,
                                    "instrument": "UK Long Gilt"
                                }
                            ],
                            "portfolioAllocations": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 58.0,
                                    "instrument": "US Treasury BondDenmark "
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 27.0,
                                    "instrument": "Boost ShortDAX x Daily ETP SDE"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 15.0,
                                    "instrument": "UK Long Gilt"
                                }
                            ],
                            "requests": [],
                            "validatedRequests": []
                        },
                        {
                            "id": "d4e57b7f-937a-4779-8cf4-19f490e48f0b",
                            "version": 1,
                            "firstName": "Trpimir",
                            "lastName": "Lambert",
                            "dateOfBirth": "1932-11-22",
                            "currentBalances": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 55.0,
                                    "amount": 35094.0,
                                    "instrument": "US Year TNote"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 43.0,
                                    "amount": 44817.0,
                                    "instrument": "Australia  Financials"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 2.0,
                                    "amount": 777738.0,
                                    "instrument": "Hungary "
                                }
                            ],
                            "portfolioAllocations": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 55.0,
                                    "instrument": "US Year TNote"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 43.0,
                                    "instrument": "Australia  Financials"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 2.0,
                                    "instrument": "Hungary "
                                }
                            ],
                            "requests": [],
                            "validatedRequests": []
                        },
                        {
                            "id": "1e4e5404-f3a8-4153-8451-c7d72626b33e",
                            "version": 1,
                            "firstName": "Sonia",
                            "lastName": "Đurić",
                            "dateOfBirth": "1986-05-31",
                            "currentBalances": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 53.0,
                                    "amount": 307205.0,
                                    "instrument": "Portugal "
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 3.0,
                                    "amount": 260332.0,
                                    "instrument": "FTSE  Travel and Leisure"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 22.0,
                                    "amount": 33185.0,
                                    "instrument": "FTSE  Tobacco"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 22.0,
                                    "amount": 929657.0,
                                    "instrument": "Boost ShortDAX x Daily ETP SDE"
                                }
                            ],
                            "portfolioAllocations": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 53.0,
                                    "instrument": "Portugal "
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 3.0,
                                    "instrument": "FTSE  Travel and Leisure"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 22.0,
                                    "instrument": "FTSE  Tobacco"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 22.0,
                                    "instrument": "Boost ShortDAX x Daily ETP SDE"
                                }
                            ],
                            "requests": [],
                            "validatedRequests": []
                        },
                        {
                            "id": "523121c4-09d1-4135-8d84-1d123fda541f",
                            "version": 1,
                            "firstName": "Tracey",
                            "lastName": "Lewis",
                            "dateOfBirth": "2000-12-28",
                            "currentBalances": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 2.0,
                                    "amount": 392195.0,
                                    "instrument": "Australia  Consumer Disc"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 89.0,
                                    "amount": 531093.0,
                                    "instrument": "CSOP Source FTSE China A UCITS ETF  USD"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 9.0,
                                    "amount": 8179.0,
                                    "instrument": "Boost US Treasuries Y x Short Daily ETP"
                                }
                            ],
                            "portfolioAllocations": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 2.0,
                                    "instrument": "Australia  Consumer Disc"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 89.0,
                                    "instrument": "CSOP Source FTSE China A UCITS ETF  USD"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 9.0,
                                    "instrument": "Boost US Treasuries Y x Short Daily ETP"
                                }
                            ],
                            "requests": [],
                            "validatedRequests": []
                        },
                        {
                            "id": "94fe3ee4-fd49-4949-bf20-1103c471e272",
                            "version": 1,
                            "firstName": "Stole",
                            "lastName": "Urošević",
                            "dateOfBirth": "2000-11-11",
                            "currentBalances": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 34.0,
                                    "amount": 47398.0,
                                    "instrument": "Portugal "
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 17.0,
                                    "amount": 610520.0,
                                    "instrument": "CSOP FTSE China A ETF  AFTY"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 11.0,
                                    "amount": 758458.0,
                                    "instrument": "Cambria Global Value ETF"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 1.0,
                                    "amount": 325629.0,
                                    "instrument": "FTSE  Oil and Gas Producers"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 27.0,
                                    "amount": 623579.0,
                                    "instrument": "Flight Centre Travel Group Ltd"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 10.0,
                                    "amount": 942215.0,
                                    "instrument": "CSOP FTSE China A ETF  "
                                }
                            ],
                            "portfolioAllocations": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 34.0,
                                    "instrument": "Portugal "
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 17.0,
                                    "instrument": "CSOP FTSE China A ETF  AFTY"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 11.0,
                                    "instrument": "Cambria Global Value ETF"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 1.0,
                                    "instrument": "FTSE  Oil and Gas Producers"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 27.0,
                                    "instrument": "Flight Centre Travel Group Ltd"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 10.0,
                                    "instrument": "CSOP FTSE China A ETF  "
                                }
                            ],
                            "requests": [],
                            "validatedRequests": []
                        },
                        {
                            "id": "740b5d10-41b1-4323-985d-12fe7f58d28c",
                            "version": 1,
                            "firstName": "Antea",
                            "lastName": "Allan",
                            "dateOfBirth": "1940-03-13",
                            "currentBalances": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 8.0,
                                    "amount": 737861.0,
                                    "instrument": "Breakwave Dry Bulk Shipping ETF"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 30.0,
                                    "amount": 608059.0,
                                    "instrument": "CSOP FTSE China A ETF  "
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 20.0,
                                    "amount": 375328.0,
                                    "instrument": "Italian BTP"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 20.0,
                                    "amount": 92142.0,
                                    "instrument": "Norway "
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 22.0,
                                    "amount": 339512.0,
                                    "instrument": "Woodside Petroleum Ltd"
                                }
                            ],
                            "portfolioAllocations": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 8.0,
                                    "instrument": "Breakwave Dry Bulk Shipping ETF"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 30.0,
                                    "instrument": "CSOP FTSE China A ETF  "
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 20.0,
                                    "instrument": "Italian BTP"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 20.0,
                                    "instrument": "Norway "
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 22.0,
                                    "instrument": "Woodside Petroleum Ltd"
                                }
                            ],
                            "requests": [],
                            "validatedRequests": []
                        },
                        {
                            "id": "ca43c0c9-fdf4-40ee-bedf-7d0bae3150c2",
                            "version": 1,
                            "firstName": "Stamena",
                            "lastName": "Walsh",
                            "dateOfBirth": "1992-07-30",
                            "currentBalances": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 21.0,
                                    "amount": 766858.0,
                                    "instrument": "Macquarie Group Ltd"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 7.0,
                                    "amount": 941698.0,
                                    "instrument": "FTSE Mid "
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 19.0,
                                    "amount": 235656.0,
                                    "instrument": "German Buxl"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 7.0,
                                    "amount": 892032.0,
                                    "instrument": "FTSE  Personal Goods"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 36.0,
                                    "amount": 746954.0,
                                    "instrument": "FTSE  Aerospace and Defence"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 10.0,
                                    "amount": 967333.0,
                                    "instrument": "FTSE  Chemicals"
                                }
                            ],
                            "portfolioAllocations": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 21.0,
                                    "instrument": "Macquarie Group Ltd"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 7.0,
                                    "instrument": "FTSE Mid "
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 19.0,
                                    "instrument": "German Buxl"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 7.0,
                                    "instrument": "FTSE  Personal Goods"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 36.0,
                                    "instrument": "FTSE  Aerospace and Defence"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 10.0,
                                    "instrument": "FTSE  Chemicals"
                                }
                            ],
                            "requests": [],
                            "validatedRequests": []
                        },
                        {
                            "id": "ae23d524-c453-4557-8dcc-9936add64fd0",
                            "version": 1,
                            "firstName": "Smiljana",
                            "lastName": "Burgess",
                            "dateOfBirth": "1935-07-06",
                            "currentBalances": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 81.0,
                                    "amount": 406741.0,
                                    "instrument": "Rio Tinto PLC"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 19.0,
                                    "amount": 528197.0,
                                    "instrument": "a Milk Co Ltd"
                                }
                            ],
                            "portfolioAllocations": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 81.0,
                                    "instrument": "Rio Tinto PLC"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 19.0,
                                    "instrument": "a Milk Co Ltd"
                                }
                            ],
                            "requests": [],
                            "validatedRequests": []
                        },
                        {
                            "id": "e540e824-313e-4f04-a8c6-6d322e729943",
                            "version": 1,
                            "firstName": "Srpko",
                            "lastName": "Short",
                            "dateOfBirth": "1937-12-14",
                            "currentBalances": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 88.0,
                                    "amount": 437520.0,
                                    "instrument": "FTSE  Electricity"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 12.0,
                                    "amount": 441915.0,
                                    "instrument": "Boost WTI Oil x Leverage Daily ETP"
                                }
                            ],
                            "portfolioAllocations": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 88.0,
                                    "instrument": "FTSE  Electricity"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 12.0,
                                    "instrument": "Boost WTI Oil x Leverage Daily ETP"
                                }
                            ],
                            "requests": [],
                            "validatedRequests": []
                        },
                        {
                            "id": "9ffba9a4-ebbc-4a7d-9b5d-fef2144c7ac4",
                            "version": 1,
                            "firstName": "Stojka",
                            "lastName": "Vasiljević",
                            "dateOfBirth": "1980-05-19",
                            "currentBalances": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 19.0,
                                    "amount": 861977.0,
                                    "instrument": "Boost Silver x Leverage Daily ETP  LSI"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 67.0,
                                    "amount": 539154.0,
                                    "instrument": "Hungary "
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 14.0,
                                    "amount": 59120.0,
                                    "instrument": "Norway "
                                }
                            ],
                            "portfolioAllocations": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 19.0,
                                    "instrument": "Boost Silver x Leverage Daily ETP  LSI"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 67.0,
                                    "instrument": "Hungary "
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 14.0,
                                    "instrument": "Norway "
                                }
                            ],
                            "requests": [],
                            "validatedRequests": []
                        },
                        {
                            "id": "4d8ba090-271c-45a4-a7a8-99962dc71cfb",
                            "version": 1,
                            "firstName": "Alan",
                            "lastName": "Kostić",
                            "dateOfBirth": "1982-02-23",
                            "currentBalances": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 46.0,
                                    "amount": 12337.0,
                                    "instrument": "FTSE  Electricity"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 16.0,
                                    "amount": 927359.0,
                                    "instrument": "CSOP SZSE ChiNext ETF"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 14.0,
                                    "amount": 534821.0,
                                    "instrument": "Flight Centre Travel Group Ltd"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 24.0,
                                    "amount": 253559.0,
                                    "instrument": "Cambria Foreign Shareholder Yield ETF"
                                }
                            ],
                            "portfolioAllocations": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 46.0,
                                    "instrument": "FTSE  Electricity"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 16.0,
                                    "instrument": "CSOP SZSE ChiNext ETF"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 14.0,
                                    "instrument": "Flight Centre Travel Group Ltd"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 24.0,
                                    "instrument": "Cambria Foreign Shareholder Yield ETF"
                                }
                            ],
                            "requests": [],
                            "validatedRequests": []
                        },
                        {
                            "id": "d5d79df8-c472-4f49-ada1-1580a82004ec",
                            "version": 1,
                            "firstName": "Ronald",
                            "lastName": "White",
                            "dateOfBirth": "2009-01-24",
                            "currentBalances": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 8.0,
                                    "amount": 557229.0,
                                    "instrument": "Macquarie Group Ltd"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 32.0,
                                    "amount": 243882.0,
                                    "instrument": "FTSE  Pharmaceuticals and Biotechnology"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 42.0,
                                    "amount": 473870.0,
                                    "instrument": "FTSE  Construction and Materials"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 18.0,
                                    "amount": 682501.0,
                                    "instrument": "National Australia Bank Ltd"
                                }
                            ],
                            "portfolioAllocations": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 8.0,
                                    "instrument": "Macquarie Group Ltd"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 32.0,
                                    "instrument": "FTSE  Pharmaceuticals and Biotechnology"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 42.0,
                                    "instrument": "FTSE  Construction and Materials"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 18.0,
                                    "instrument": "National Australia Bank Ltd"
                                }
                            ],
                            "requests": [],
                            "validatedRequests": []
                        },
                        {
                            "id": "3683e75d-0af8-4571-aa15-b1a38c5ce0a8",
                            "version": 1,
                            "firstName": "Hristina",
                            "lastName": "Murray",
                            "dateOfBirth": "1916-03-28",
                            "currentBalances": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 82.0,
                                    "amount": 826309.0,
                                    "instrument": "FTSE  Software and Computer Services"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 18.0,
                                    "amount": 906052.0,
                                    "instrument": "Australia  Information Tech"
                                }
                            ],
                            "portfolioAllocations": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 82.0,
                                    "instrument": "FTSE  Software and Computer Services"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 18.0,
                                    "instrument": "Australia  Information Tech"
                                }
                            ],
                            "requests": [],
                            "validatedRequests": []
                        },
                        {
                            "id": "8d7e85d3-9de9-4d45-acd4-04eb4b78458c",
                            "version": 1,
                            "firstName": "Stokan",
                            "lastName": "Pešić",
                            "dateOfBirth": "1907-03-12",
                            "currentBalances": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 5.0,
                                    "amount": 468541.0,
                                    "instrument": "FTSE  Electricity"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 71.0,
                                    "amount": 721069.0,
                                    "instrument": "US Treasury BondDenmark "
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 24.0,
                                    "amount": 21305.0,
                                    "instrument": "US Year TNote"
                                }
                            ],
                            "portfolioAllocations": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 5.0,
                                    "instrument": "FTSE  Electricity"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 71.0,
                                    "instrument": "US Treasury BondDenmark "
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 24.0,
                                    "instrument": "US Year TNote"
                                }
                            ],
                            "requests": [],
                            "validatedRequests": []
                        },
                        {
                            "id": "cce12b6e-69dc-4b66-aeff-79afafa37b78",
                            "version": 1,
                            "firstName": "Steva",
                            "lastName": "Petković",
                            "dateOfBirth": "1993-07-12",
                            "currentBalances": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 79.0,
                                    "amount": 840253.0,
                                    "instrument": "US Year TNote"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 21.0,
                                    "amount": 252978.0,
                                    "instrument": "FTSE  Electronic"
                                }
                            ],
                            "portfolioAllocations": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 79.0,
                                    "instrument": "US Year TNote"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 21.0,
                                    "instrument": "FTSE  Electronic"
                                }
                            ],
                            "requests": [],
                            "validatedRequests": []
                        },
                        {
                            "id": "0a25bda4-a57d-4805-bc38-96802bd77254",
                            "version": 1,
                            "firstName": "Roko",
                            "lastName": "Simpson",
                            "dateOfBirth": "1977-11-25",
                            "currentBalances": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 23.0,
                                    "amount": 726987.0,
                                    "instrument": "Rio Tinto PLC"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 20.0,
                                    "amount": 524037.0,
                                    "instrument": "US Year TNote"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 42.0,
                                    "amount": 481787.0,
                                    "instrument": "FTSE  Personal Goods"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 15.0,
                                    "amount": 291322.0,
                                    "instrument": "Techmark"
                                }
                            ],
                            "portfolioAllocations": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 23.0,
                                    "instrument": "Rio Tinto PLC"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 20.0,
                                    "instrument": "US Year TNote"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 42.0,
                                    "instrument": "FTSE  Personal Goods"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 15.0,
                                    "instrument": "Techmark"
                                }
                            ],
                            "requests": [],
                            "validatedRequests": []
                        },
                        {
                            "id": "42b84ce4-b646-4bfe-8c2c-40fec3af7b51",
                            "version": 1,
                            "firstName": "Tamara",
                            "lastName": "Ristić",
                            "dateOfBirth": "1937-12-26",
                            "currentBalances": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 32.0,
                                    "amount": 269571.0,
                                    "instrument": "Zip Company Limited"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 67.0,
                                    "amount": 121384.0,
                                    "instrument": "Apple Inc (All Sessions)"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 1.0,
                                    "amount": 386257.0,
                                    "instrument": "FTSE  Electricity"
                                }
                            ],
                            "portfolioAllocations": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 32.0,
                                    "instrument": "Zip Company Limited"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 67.0,
                                    "instrument": "Apple Inc (All Sessions)"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 1.0,
                                    "instrument": "FTSE  Electricity"
                                }
                            ],
                            "requests": [],
                            "validatedRequests": []
                        },
                        {
                            "id": "bd534edb-c371-41dd-8f20-a9c91713cf39",
                            "version": 1,
                            "firstName": "Srđan",
                            "lastName": "Milovanović",
                            "dateOfBirth": "2013-09-28",
                            "currentBalances": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 96.0,
                                    "amount": 671379.0,
                                    "instrument": "Italian BTS"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 4.0,
                                    "amount": 22599.0,
                                    "instrument": "Whitehaven Coal Ltd"
                                }
                            ],
                            "portfolioAllocations": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 96.0,
                                    "instrument": "Italian BTS"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 4.0,
                                    "instrument": "Whitehaven Coal Ltd"
                                }
                            ],
                            "requests": [],
                            "validatedRequests": []
                        },
                        {
                            "id": "2f04b590-13f3-44cf-ad55-e7b7467bb8ed",
                            "version": 1,
                            "firstName": "Tanasije",
                            "lastName": "Paterson",
                            "dateOfBirth": "1996-10-06",
                            "currentBalances": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 22.0,
                                    "amount": 207813.0,
                                    "instrument": "Hungary "
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 9.0,
                                    "amount": 460057.0,
                                    "instrument": "Woodside Petroleum Ltd"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 55.0,
                                    "amount": 154752.0,
                                    "instrument": "FTSE  Real Estate Investment Trusts"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 14.0,
                                    "amount": 135470.0,
                                    "instrument": "FTSE  Electricity"
                                }
                            ],
                            "portfolioAllocations": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 22.0,
                                    "instrument": "Hungary "
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 9.0,
                                    "instrument": "Woodside Petroleum Ltd"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 55.0,
                                    "instrument": "FTSE  Real Estate Investment Trusts"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 14.0,
                                    "instrument": "FTSE  Electricity"
                                }
                            ],
                            "requests": [],
                            "validatedRequests": []
                        },
                        {
                            "id": "da02f15d-879f-4416-a58c-884b0aa533aa",
                            "version": 1,
                            "firstName": "Radmilo",
                            "lastName": "Ćirić",
                            "dateOfBirth": "1949-09-18",
                            "currentBalances": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 21.0,
                                    "amount": 192878.0,
                                    "instrument": "Australia  Health Care"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 34.0,
                                    "amount": 910964.0,
                                    "instrument": "CSOP Source FTSE China A UCITS ETF  GBP"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 21.0,
                                    "amount": 81788.0,
                                    "instrument": "National Australia Bank Ltd"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 24.0,
                                    "amount": 866000.0,
                                    "instrument": "FTSE  Beverages"
                                }
                            ],
                            "portfolioAllocations": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 21.0,
                                    "instrument": "Australia  Health Care"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 34.0,
                                    "instrument": "CSOP Source FTSE China A UCITS ETF  GBP"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 21.0,
                                    "instrument": "National Australia Bank Ltd"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 24.0,
                                    "instrument": "FTSE  Beverages"
                                }
                            ],
                            "requests": [],
                            "validatedRequests": []
                        }
                    ]
                },
                {
                    "id": "36cfad7f-5217-4fde-b0ac-98de99eaf418",
                    "version": 1,
                    "name": "Royal Plan",
                    "participants": [
                        {
                            "id": "8facc281-e22a-4d11-82c5-edec33cfc79a",
                            "version": 1,
                            "firstName": "Rodoljub",
                            "lastName": "Marinković",
                            "dateOfBirth": "1981-08-05",
                            "currentBalances": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 59.0,
                                    "amount": 505082.0,
                                    "instrument": "Boost WTI Oil x Leverage Daily ETP"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 3.0,
                                    "amount": 712113.0,
                                    "instrument": "Australia  Communications"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 30.0,
                                    "amount": 597588.0,
                                    "instrument": "Australia  Consumer Disc"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 8.0,
                                    "amount": 785035.0,
                                    "instrument": "Australia  Utilities"
                                }
                            ],
                            "portfolioAllocations": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 59.0,
                                    "instrument": "Boost WTI Oil x Leverage Daily ETP"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 3.0,
                                    "instrument": "Australia  Communications"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 30.0,
                                    "instrument": "Australia  Consumer Disc"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 8.0,
                                    "instrument": "Australia  Utilities"
                                }
                            ],
                            "requests": [],
                            "validatedRequests": []
                        },
                        {
                            "id": "85998600-c9a9-4730-b68d-bd94677ecd22",
                            "version": 1,
                            "firstName": "Ćetko",
                            "lastName": "Vučković",
                            "dateOfBirth": "1904-02-08",
                            "currentBalances": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 56.0,
                                    "amount": 660844.0,
                                    "instrument": "US Treasury BondDenmark "
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 8.0,
                                    "amount": 36154.0,
                                    "instrument": "Apple Inc (All Sessions)"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 22.0,
                                    "amount": 642393.0,
                                    "instrument": "Commonwealth Bank of Australia"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 14.0,
                                    "amount": 643085.0,
                                    "instrument": "Australia  Financials"
                                }
                            ],
                            "portfolioAllocations": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 56.0,
                                    "instrument": "US Treasury BondDenmark "
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 8.0,
                                    "instrument": "Apple Inc (All Sessions)"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 22.0,
                                    "instrument": "Commonwealth Bank of Australia"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 14.0,
                                    "instrument": "Australia  Financials"
                                }
                            ],
                            "requests": [],
                            "validatedRequests": []
                        },
                        {
                            "id": "1ed3264a-7546-4625-a29b-3d6ba41ccbe0",
                            "version": 1,
                            "firstName": "Aleksandra",
                            "lastName": "Berry",
                            "dateOfBirth": "1935-04-23",
                            "currentBalances": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 9.0,
                                    "amount": 389441.0,
                                    "instrument": "German Schatz"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 84.0,
                                    "amount": 700939.0,
                                    "instrument": "Italian BTP"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 7.0,
                                    "amount": 652717.0,
                                    "instrument": "Australia  Utilities"
                                }
                            ],
                            "portfolioAllocations": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 9.0,
                                    "instrument": "German Schatz"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 84.0,
                                    "instrument": "Italian BTP"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 7.0,
                                    "instrument": "Australia  Utilities"
                                }
                            ],
                            "requests": [],
                            "validatedRequests": []
                        },
                        {
                            "id": "95383549-68d4-46b7-aba8-6202b5f1b464",
                            "version": 1,
                            "firstName": "Sotir",
                            "lastName": "Alsop",
                            "dateOfBirth": "1919-03-03",
                            "currentBalances": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 6.0,
                                    "amount": 672046.0,
                                    "instrument": "FTSE  Real Estate Investment Trusts"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 24.0,
                                    "amount": 827744.0,
                                    "instrument": "US Year TNote"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 58.0,
                                    "amount": 938118.0,
                                    "instrument": "UK Long Gilt"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 12.0,
                                    "amount": 522185.0,
                                    "instrument": "Cambria Foreign Shareholder Yield ETF"
                                }
                            ],
                            "portfolioAllocations": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 6.0,
                                    "instrument": "FTSE  Real Estate Investment Trusts"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 24.0,
                                    "instrument": "US Year TNote"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 58.0,
                                    "instrument": "UK Long Gilt"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 12.0,
                                    "instrument": "Cambria Foreign Shareholder Yield ETF"
                                }
                            ],
                            "requests": [],
                            "validatedRequests": []
                        },
                        {
                            "id": "067d3367-e455-49e3-832b-f58f50ca5f5d",
                            "version": 1,
                            "firstName": "Sue",
                            "lastName": "Kostić",
                            "dateOfBirth": "1931-12-09",
                            "currentBalances": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 0.0,
                                    "amount": 30944.0,
                                    "instrument": "FTSE  Oil and Gas Producers"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 98.0,
                                    "amount": 60671.0,
                                    "instrument": "Boost Natural Gas x Leverage Daily ETP"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 2.0,
                                    "amount": 306915.0,
                                    "instrument": "Boost Natural Gas x Leverage Daily ETP"
                                }
                            ],
                            "portfolioAllocations": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 0.0,
                                    "instrument": "FTSE  Oil and Gas Producers"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 98.0,
                                    "instrument": "Boost Natural Gas x Leverage Daily ETP"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 2.0,
                                    "instrument": "Boost Natural Gas x Leverage Daily ETP"
                                }
                            ],
                            "requests": [],
                            "validatedRequests": []
                        },
                        {
                            "id": "d19ea2d9-e0e3-4859-923f-c4e75c3d167d",
                            "version": 1,
                            "firstName": "Andreas",
                            "lastName": "Duncan",
                            "dateOfBirth": "1992-05-02",
                            "currentBalances": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 28.0,
                                    "amount": 71451.0,
                                    "instrument": "UK Long Gilt"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 35.0,
                                    "amount": 809102.0,
                                    "instrument": "Boost US Treasuries Y x Short Daily ETP"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 23.0,
                                    "amount": 613580.0,
                                    "instrument": "Rio Tinto Limited"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 14.0,
                                    "amount": 581544.0,
                                    "instrument": "Boost WTI Oil x Leverage Daily ETP"
                                }
                            ],
                            "portfolioAllocations": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 28.0,
                                    "instrument": "UK Long Gilt"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 35.0,
                                    "instrument": "Boost US Treasuries Y x Short Daily ETP"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 23.0,
                                    "instrument": "Rio Tinto Limited"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 14.0,
                                    "instrument": "Boost WTI Oil x Leverage Daily ETP"
                                }
                            ],
                            "requests": [],
                            "validatedRequests": []
                        },
                        {
                            "id": "37ac094c-1f9c-4c8b-b859-cf98bc296689",
                            "version": 1,
                            "firstName": "Ružica",
                            "lastName": "Wilson",
                            "dateOfBirth": "1900-08-28",
                            "currentBalances": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 55.0,
                                    "amount": 469092.0,
                                    "instrument": "Boost ShortDAX x Daily ETP SDE"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 16.0,
                                    "amount": 911382.0,
                                    "instrument": "Flight Centre Travel Group Ltd"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 14.0,
                                    "amount": 149150.0,
                                    "instrument": "CSOP Hang Seng Index Daily (x) Inverse Product"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 15.0,
                                    "amount": 767999.0,
                                    "instrument": "Boost Natural Gas x Leverage Daily ETP"
                                }
                            ],
                            "portfolioAllocations": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 55.0,
                                    "instrument": "Boost ShortDAX x Daily ETP SDE"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 16.0,
                                    "instrument": "Flight Centre Travel Group Ltd"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 14.0,
                                    "instrument": "CSOP Hang Seng Index Daily (x) Inverse Product"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 15.0,
                                    "instrument": "Boost Natural Gas x Leverage Daily ETP"
                                }
                            ],
                            "requests": [],
                            "validatedRequests": []
                        },
                        {
                            "id": "c219ec8f-e6e1-47e8-b7bb-f7d1f1d2b45a",
                            "version": 1,
                            "firstName": "Hranislav",
                            "lastName": "Knox",
                            "dateOfBirth": "1951-06-23",
                            "currentBalances": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 59.0,
                                    "amount": 278863.0,
                                    "instrument": "French OAT"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 1.0,
                                    "amount": 452198.0,
                                    "instrument": "Boost Natural Gas x Short Daily ETP"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 27.0,
                                    "amount": 502395.0,
                                    "instrument": "FTSE  Electricity"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 13.0,
                                    "amount": 688206.0,
                                    "instrument": "Brazil "
                                }
                            ],
                            "portfolioAllocations": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 59.0,
                                    "instrument": "French OAT"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 1.0,
                                    "instrument": "Boost Natural Gas x Short Daily ETP"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 27.0,
                                    "instrument": "FTSE  Electricity"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 13.0,
                                    "instrument": "Brazil "
                                }
                            ],
                            "requests": [],
                            "validatedRequests": []
                        },
                        {
                            "id": "4c1372f3-df8e-4897-86d1-fe9d5ab787f6",
                            "version": 1,
                            "firstName": "Zoe",
                            "lastName": "Glover",
                            "dateOfBirth": "1995-03-04",
                            "currentBalances": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 45.0,
                                    "amount": 6079.0,
                                    "instrument": "CSOP Hang Seng Index Daily (x) Inverse Product"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 41.0,
                                    "amount": 222347.0,
                                    "instrument": "Cambria Global Momentum ETF"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 14.0,
                                    "amount": 485967.0,
                                    "instrument": "Apple Inc (All Sessions)"
                                }
                            ],
                            "portfolioAllocations": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 45.0,
                                    "instrument": "CSOP Hang Seng Index Daily (x) Inverse Product"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 41.0,
                                    "instrument": "Cambria Global Momentum ETF"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 14.0,
                                    "instrument": "Apple Inc (All Sessions)"
                                }
                            ],
                            "requests": [],
                            "validatedRequests": []
                        },
                        {
                            "id": "f05fbb71-b523-4f5a-9038-f2533e40ccc5",
                            "version": 1,
                            "firstName": "Todor",
                            "lastName": "Tucker",
                            "dateOfBirth": "2011-08-01",
                            "currentBalances": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 28.0,
                                    "amount": 383068.0,
                                    "instrument": "Italian BTP"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 44.0,
                                    "amount": 428028.0,
                                    "instrument": "Flight Centre Travel Group Ltd"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 15.0,
                                    "amount": 930543.0,
                                    "instrument": "UK Long Gilt"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 13.0,
                                    "amount": 894995.0,
                                    "instrument": "Zip Company Limited"
                                }
                            ],
                            "portfolioAllocations": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 28.0,
                                    "instrument": "Italian BTP"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 44.0,
                                    "instrument": "Flight Centre Travel Group Ltd"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 15.0,
                                    "instrument": "UK Long Gilt"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 13.0,
                                    "instrument": "Zip Company Limited"
                                }
                            ],
                            "requests": [],
                            "validatedRequests": []
                        },
                        {
                            "id": "4e6678f5-3b6a-4097-a158-11b2de40976e",
                            "version": 1,
                            "firstName": "Strahinja",
                            "lastName": "Sanderson",
                            "dateOfBirth": "1983-03-24",
                            "currentBalances": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 2.0,
                                    "amount": 818540.0,
                                    "instrument": "FTSE  Pharmaceuticals and Biotechnology"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 51.0,
                                    "amount": 895971.0,
                                    "instrument": "Boost US Treasuries Y x Short Daily ETP"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 16.0,
                                    "amount": 611579.0,
                                    "instrument": "Boost Natural Gas x Short Daily ETP"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 6.0,
                                    "amount": 489328.0,
                                    "instrument": "FTSE  Pharmaceuticals and Biotechnology"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 7.0,
                                    "amount": 737706.0,
                                    "instrument": "Nuix Pty LimitedXero LtdNorthern Star Resources Ltd"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 18.0,
                                    "amount": 108503.0,
                                    "instrument": "Appen LimitedNIO Inc  ADR (All Sessions)"
                                }
                            ],
                            "portfolioAllocations": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 2.0,
                                    "instrument": "FTSE  Pharmaceuticals and Biotechnology"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 51.0,
                                    "instrument": "Boost US Treasuries Y x Short Daily ETP"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 16.0,
                                    "instrument": "Boost Natural Gas x Short Daily ETP"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 6.0,
                                    "instrument": "FTSE  Pharmaceuticals and Biotechnology"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 7.0,
                                    "instrument": "Nuix Pty LimitedXero LtdNorthern Star Resources Ltd"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 18.0,
                                    "instrument": "Appen LimitedNIO Inc  ADR (All Sessions)"
                                }
                            ],
                            "requests": [],
                            "validatedRequests": []
                        },
                        {
                            "id": "29545472-a8cb-4241-ac9f-a7ff577b8f47",
                            "version": 1,
                            "firstName": "Fanija",
                            "lastName": "Đukić",
                            "dateOfBirth": "1955-09-10",
                            "currentBalances": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 92.0,
                                    "amount": 890102.0,
                                    "instrument": "FTSE  Oil and Gas Producers"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 8.0,
                                    "amount": 746174.0,
                                    "instrument": "Carsalescom LtdLynas Rare Earths LimitedWestpac Banking Corp"
                                }
                            ],
                            "portfolioAllocations": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 92.0,
                                    "instrument": "FTSE  Oil and Gas Producers"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 8.0,
                                    "instrument": "Carsalescom LtdLynas Rare Earths LimitedWestpac Banking Corp"
                                }
                            ],
                            "requests": [],
                            "validatedRequests": []
                        },
                        {
                            "id": "b944557f-b839-495e-9b98-caad2d67065f",
                            "version": 1,
                            "firstName": "Sanja",
                            "lastName": "Smith",
                            "dateOfBirth": "1912-12-04",
                            "currentBalances": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 23.0,
                                    "amount": 749417.0,
                                    "instrument": "Apple Inc (All Sessions)"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 50.0,
                                    "amount": 92629.0,
                                    "instrument": "Italian BTS"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 4.0,
                                    "amount": 808982.0,
                                    "instrument": "CSOP FTSE China A ETF  AFTY"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 23.0,
                                    "amount": 897960.0,
                                    "instrument": "FTSE  Real Estate Investment Trusts"
                                }
                            ],
                            "portfolioAllocations": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 23.0,
                                    "instrument": "Apple Inc (All Sessions)"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 50.0,
                                    "instrument": "Italian BTS"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 4.0,
                                    "instrument": "CSOP FTSE China A ETF  AFTY"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 23.0,
                                    "instrument": "FTSE  Real Estate Investment Trusts"
                                }
                            ],
                            "requests": [],
                            "validatedRequests": []
                        },
                        {
                            "id": "c25a6ad3-70be-4299-a916-20895af59a7d",
                            "version": 1,
                            "firstName": "Stepan",
                            "lastName": "Milić",
                            "dateOfBirth": "1927-07-06",
                            "currentBalances": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 11.0,
                                    "amount": 662585.0,
                                    "instrument": "Cambria Emerging Shareholder Yield ETF"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 48.0,
                                    "amount": 833705.0,
                                    "instrument": "Australia  Information Tech"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 31.0,
                                    "amount": 484019.0,
                                    "instrument": "Cambria Foreign Shareholder Yield ETF"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 10.0,
                                    "amount": 536527.0,
                                    "instrument": "Boost US S&P x Short Daily ETP"
                                }
                            ],
                            "portfolioAllocations": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 11.0,
                                    "instrument": "Cambria Emerging Shareholder Yield ETF"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 48.0,
                                    "instrument": "Australia  Information Tech"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 31.0,
                                    "instrument": "Cambria Foreign Shareholder Yield ETF"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 10.0,
                                    "instrument": "Boost US S&P x Short Daily ETP"
                                }
                            ],
                            "requests": [],
                            "validatedRequests": []
                        },
                        {
                            "id": "a69c12b6-d49e-4319-b143-6a62590b2235",
                            "version": 1,
                            "firstName": "Stipe",
                            "lastName": "Glover",
                            "dateOfBirth": "1947-10-20",
                            "currentBalances": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 54.0,
                                    "amount": 676778.0,
                                    "instrument": "Boost US S&P x Short Daily ETP"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 34.0,
                                    "amount": 467757.0,
                                    "instrument": "CSOP Hang Seng TECH Index Daily X Leveraged Product"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 12.0,
                                    "amount": 752593.0,
                                    "instrument": "Boost WTI Oil x Leverage Daily ETP"
                                }
                            ],
                            "portfolioAllocations": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 54.0,
                                    "instrument": "Boost US S&P x Short Daily ETP"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 34.0,
                                    "instrument": "CSOP Hang Seng TECH Index Daily X Leveraged Product"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 12.0,
                                    "instrument": "Boost WTI Oil x Leverage Daily ETP"
                                }
                            ],
                            "requests": [],
                            "validatedRequests": []
                        },
                        {
                            "id": "24f81613-3c46-46a4-a831-8b53b43390d6",
                            "version": 1,
                            "firstName": "Natalie",
                            "lastName": "Novaković",
                            "dateOfBirth": "1967-09-03",
                            "currentBalances": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 35.0,
                                    "amount": 750269.0,
                                    "instrument": "Rio Tinto Limited"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 52.0,
                                    "amount": 377936.0,
                                    "instrument": "Breakwave Dry Bulk Shipping ETF"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 13.0,
                                    "amount": 909852.0,
                                    "instrument": "Japanese Government Bond"
                                }
                            ],
                            "portfolioAllocations": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 35.0,
                                    "instrument": "Rio Tinto Limited"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 52.0,
                                    "instrument": "Breakwave Dry Bulk Shipping ETF"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 13.0,
                                    "instrument": "Japanese Government Bond"
                                }
                            ],
                            "requests": [],
                            "validatedRequests": []
                        },
                        {
                            "id": "a222979d-89f0-42fb-a396-164a376550e7",
                            "version": 1,
                            "firstName": "Staniša",
                            "lastName": "Mathis",
                            "dateOfBirth": "1901-12-04",
                            "currentBalances": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 76.0,
                                    "amount": 127925.0,
                                    "instrument": "Techmark"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 24.0,
                                    "amount": 305606.0,
                                    "instrument": "Germany MidCap "
                                }
                            ],
                            "portfolioAllocations": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 76.0,
                                    "instrument": "Techmark"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 24.0,
                                    "instrument": "Germany MidCap "
                                }
                            ],
                            "requests": [],
                            "validatedRequests": []
                        },
                        {
                            "id": "f3a3f05c-813b-48a2-9b37-eaad00898bd3",
                            "version": 1,
                            "firstName": "Stamenko",
                            "lastName": "Nikolić",
                            "dateOfBirth": "1998-09-26",
                            "currentBalances": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 38.0,
                                    "amount": 595359.0,
                                    "instrument": "Nuix Pty LimitedXero LtdNorthern Star Resources Ltd"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 45.0,
                                    "amount": 760051.0,
                                    "instrument": "a Milk Co Ltd"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 17.0,
                                    "amount": 254550.0,
                                    "instrument": "Whitehaven Coal Ltd"
                                }
                            ],
                            "portfolioAllocations": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 38.0,
                                    "instrument": "Nuix Pty LimitedXero LtdNorthern Star Resources Ltd"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 45.0,
                                    "instrument": "a Milk Co Ltd"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 17.0,
                                    "instrument": "Whitehaven Coal Ltd"
                                }
                            ],
                            "requests": [],
                            "validatedRequests": []
                        },
                        {
                            "id": "ccfb8cec-ef56-4c9e-8f85-b9c1c37f40cd",
                            "version": 1,
                            "firstName": "Hannah",
                            "lastName": "Quinn",
                            "dateOfBirth": "1975-02-11",
                            "currentBalances": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 6.0,
                                    "amount": 369002.0,
                                    "instrument": "Silver Lake Resources Ltd"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 58.0,
                                    "amount": 234125.0,
                                    "instrument": "Zip Company Limited"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 5.0,
                                    "amount": 531999.0,
                                    "instrument": "Cambria Foreign Shareholder Yield ETF"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 9.0,
                                    "amount": 685136.0,
                                    "instrument": "Boost Silver x Leverage Daily ETP  LSI"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 22.0,
                                    "amount": 680356.0,
                                    "instrument": "Australia  Health Care"
                                }
                            ],
                            "portfolioAllocations": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 6.0,
                                    "instrument": "Silver Lake Resources Ltd"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 58.0,
                                    "instrument": "Zip Company Limited"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 5.0,
                                    "instrument": "Cambria Foreign Shareholder Yield ETF"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 9.0,
                                    "instrument": "Boost Silver x Leverage Daily ETP  LSI"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 22.0,
                                    "instrument": "Australia  Health Care"
                                }
                            ],
                            "requests": [],
                            "validatedRequests": []
                        },
                        {
                            "id": "425b4ff8-1e7c-4829-bb42-f4cc60713d9e",
                            "version": 1,
                            "firstName": "Sofija",
                            "lastName": "Miletić",
                            "dateOfBirth": "1951-02-28",
                            "currentBalances": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 69.0,
                                    "amount": 552411.0,
                                    "instrument": "CSOP SZSE ChiNext ETF"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 11.0,
                                    "amount": 265371.0,
                                    "instrument": "German Bobl"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 20.0,
                                    "amount": 182582.0,
                                    "instrument": "FTSE  Pharmaceuticals and Biotechnology"
                                }
                            ],
                            "portfolioAllocations": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 69.0,
                                    "instrument": "CSOP SZSE ChiNext ETF"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 11.0,
                                    "instrument": "German Bobl"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 20.0,
                                    "instrument": "FTSE  Pharmaceuticals and Biotechnology"
                                }
                            ],
                            "requests": [],
                            "validatedRequests": []
                        },
                        {
                            "id": "c5cc2be5-d937-41a9-82f5-dc40d0d1f98f",
                            "version": 1,
                            "firstName": "Sandra",
                            "lastName": "Antić",
                            "dateOfBirth": "2005-12-13",
                            "currentBalances": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 76.0,
                                    "amount": 60806.0,
                                    "instrument": "Zip Company Limited"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 24.0,
                                    "amount": 482287.0,
                                    "instrument": "Nuix Pty LimitedXero LtdNorthern Star Resources Ltd"
                                }
                            ],
                            "portfolioAllocations": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 76.0,
                                    "instrument": "Zip Company Limited"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 24.0,
                                    "instrument": "Nuix Pty LimitedXero LtdNorthern Star Resources Ltd"
                                }
                            ],
                            "requests": [],
                            "validatedRequests": []
                        },
                        {
                            "id": "56c4aa07-4ea6-4b86-a388-a37e0b550245",
                            "version": 1,
                            "firstName": "Stracimir",
                            "lastName": "MacLeod",
                            "dateOfBirth": "1980-05-23",
                            "currentBalances": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 74.0,
                                    "amount": 107030.0,
                                    "instrument": "German Schatz"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 4.0,
                                    "amount": 47944.0,
                                    "instrument": "FTSE  Aerospace and Defence"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 22.0,
                                    "amount": 493041.0,
                                    "instrument": "FTSE  Construction and Materials"
                                }
                            ],
                            "portfolioAllocations": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 74.0,
                                    "instrument": "German Schatz"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 4.0,
                                    "instrument": "FTSE  Aerospace and Defence"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 22.0,
                                    "instrument": "FTSE  Construction and Materials"
                                }
                            ],
                            "requests": [],
                            "validatedRequests": []
                        },
                        {
                            "id": "9d92aed3-2abc-487b-b38b-e2e95e7b83e3",
                            "version": 1,
                            "firstName": "Hristivoj",
                            "lastName": "Paunović",
                            "dateOfBirth": "1939-12-17",
                            "currentBalances": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 22.0,
                                    "amount": 644437.0,
                                    "instrument": "Techmark"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 58.0,
                                    "amount": 270364.0,
                                    "instrument": "Portugal "
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 20.0,
                                    "amount": 825486.0,
                                    "instrument": "Australia  Health Care"
                                }
                            ],
                            "portfolioAllocations": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 22.0,
                                    "instrument": "Techmark"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 58.0,
                                    "instrument": "Portugal "
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 20.0,
                                    "instrument": "Australia  Health Care"
                                }
                            ],
                            "requests": [],
                            "validatedRequests": []
                        },
                        {
                            "id": "985a26f8-5581-4074-9fef-469e504a8e84",
                            "version": 1,
                            "firstName": "Cvijan",
                            "lastName": "Tucker",
                            "dateOfBirth": "2014-02-15",
                            "currentBalances": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 95.0,
                                    "amount": 485521.0,
                                    "instrument": "CSOP Hang Seng TECH Index Daily X Leveraged Product"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 5.0,
                                    "amount": 680174.0,
                                    "instrument": "Whitehaven Coal Ltd"
                                }
                            ],
                            "portfolioAllocations": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 95.0,
                                    "instrument": "CSOP Hang Seng TECH Index Daily X Leveraged Product"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 5.0,
                                    "instrument": "Whitehaven Coal Ltd"
                                }
                            ],
                            "requests": [],
                            "validatedRequests": []
                        },
                        {
                            "id": "90a7f97d-d21e-4ac8-9da8-829be88f18e1",
                            "version": 1,
                            "firstName": "Svetislav",
                            "lastName": "Filipović",
                            "dateOfBirth": "1914-09-19",
                            "currentBalances": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 54.0,
                                    "amount": 409357.0,
                                    "instrument": "FTSE  Tobacco"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 39.0,
                                    "amount": 834731.0,
                                    "instrument": "FTSE  Oil Equipment and Services"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 7.0,
                                    "amount": 930000.0,
                                    "instrument": "FTSE  Aerospace and Defence"
                                }
                            ],
                            "portfolioAllocations": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 54.0,
                                    "instrument": "FTSE  Tobacco"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 39.0,
                                    "instrument": "FTSE  Oil Equipment and Services"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 7.0,
                                    "instrument": "FTSE  Aerospace and Defence"
                                }
                            ],
                            "requests": [],
                            "validatedRequests": []
                        },
                        {
                            "id": "d9ecee25-6a4c-4250-8353-e809d9f0a44a",
                            "version": 1,
                            "firstName": "Stanko",
                            "lastName": "Davidson",
                            "dateOfBirth": "1946-08-25",
                            "currentBalances": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 60.0,
                                    "amount": 609168.0,
                                    "instrument": "German Buxl"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 6.0,
                                    "amount": 855460.0,
                                    "instrument": "Australia  Consumer Disc"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 24.0,
                                    "amount": 786998.0,
                                    "instrument": "Australia  Industrials"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 10.0,
                                    "amount": 954219.0,
                                    "instrument": "FTSE  Aerospace and Defence"
                                }
                            ],
                            "portfolioAllocations": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 60.0,
                                    "instrument": "German Buxl"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 6.0,
                                    "instrument": "Australia  Consumer Disc"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 24.0,
                                    "instrument": "Australia  Industrials"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 10.0,
                                    "instrument": "FTSE  Aerospace and Defence"
                                }
                            ],
                            "requests": [],
                            "validatedRequests": []
                        },
                        {
                            "id": "16560372-4b02-4174-8944-cd8ae7941e82",
                            "version": 1,
                            "firstName": "Albin",
                            "lastName": "Paterson",
                            "dateOfBirth": "1931-04-28",
                            "currentBalances": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 67.0,
                                    "amount": 194220.0,
                                    "instrument": "Euro Stoxx Banks Index"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 6.0,
                                    "amount": 4855.0,
                                    "instrument": "Techmark"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 0.0,
                                    "amount": 1834.0,
                                    "instrument": "German Schatz"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 26.0,
                                    "amount": 499866.0,
                                    "instrument": "Norway "
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 1.0,
                                    "amount": 715447.0,
                                    "instrument": "Greece "
                                }
                            ],
                            "portfolioAllocations": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 67.0,
                                    "instrument": "Euro Stoxx Banks Index"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 6.0,
                                    "instrument": "Techmark"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 0.0,
                                    "instrument": "German Schatz"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 26.0,
                                    "instrument": "Norway "
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 1.0,
                                    "instrument": "Greece "
                                }
                            ],
                            "requests": [],
                            "validatedRequests": []
                        },
                        {
                            "id": "b0274a48-2815-432a-8bce-45f1ab4e5c0c",
                            "version": 1,
                            "firstName": "Stipe",
                            "lastName": "Avery",
                            "dateOfBirth": "2012-06-28",
                            "currentBalances": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 24.0,
                                    "amount": 802604.0,
                                    "instrument": "Australia  Communications"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 1.0,
                                    "amount": 960122.0,
                                    "instrument": "Techmark"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 25.0,
                                    "amount": 306175.0,
                                    "instrument": "Boost S&P  VIX ShortTerm Futures x Leverage Daily ETP  USD"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 19.0,
                                    "amount": 305432.0,
                                    "instrument": "Australia  Consumer Staples"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 8.0,
                                    "amount": 94087.0,
                                    "instrument": "FTSE  Oil and Gas Producers"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 23.0,
                                    "amount": 645237.0,
                                    "instrument": "FTSE  Chemicals"
                                }
                            ],
                            "portfolioAllocations": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 24.0,
                                    "instrument": "Australia  Communications"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 1.0,
                                    "instrument": "Techmark"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 25.0,
                                    "instrument": "Boost S&P  VIX ShortTerm Futures x Leverage Daily ETP  USD"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 19.0,
                                    "instrument": "Australia  Consumer Staples"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 8.0,
                                    "instrument": "FTSE  Oil and Gas Producers"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 23.0,
                                    "instrument": "FTSE  Chemicals"
                                }
                            ],
                            "requests": [],
                            "validatedRequests": []
                        },
                        {
                            "id": "49be7dc6-6eb6-4563-ba36-ec098d8c0b45",
                            "version": 1,
                            "firstName": "Slavko",
                            "lastName": "Paunović",
                            "dateOfBirth": "1902-03-19",
                            "currentBalances": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 98.0,
                                    "amount": 133153.0,
                                    "instrument": "FTSE  Pharmaceuticals and Biotechnology"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 2.0,
                                    "amount": 982634.0,
                                    "instrument": "German Bobl"
                                }
                            ],
                            "portfolioAllocations": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 98.0,
                                    "instrument": "FTSE  Pharmaceuticals and Biotechnology"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 2.0,
                                    "instrument": "German Bobl"
                                }
                            ],
                            "requests": [],
                            "validatedRequests": []
                        },
                        {
                            "id": "373cbb11-f9e9-4833-a911-aefb1fcaa465",
                            "version": 1,
                            "firstName": "Tim",
                            "lastName": "MacDonald",
                            "dateOfBirth": "1904-12-23",
                            "currentBalances": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 56.0,
                                    "amount": 299731.0,
                                    "instrument": "Australia  Health Care"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 4.0,
                                    "amount": 492277.0,
                                    "instrument": "Commonwealth Bank of Australia"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 38.0,
                                    "amount": 744471.0,
                                    "instrument": "Euro Stoxx Banks Index"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 2.0,
                                    "amount": 901126.0,
                                    "instrument": "Australia  Materials"
                                }
                            ],
                            "portfolioAllocations": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 56.0,
                                    "instrument": "Australia  Health Care"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 4.0,
                                    "instrument": "Commonwealth Bank of Australia"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 38.0,
                                    "instrument": "Euro Stoxx Banks Index"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 2.0,
                                    "instrument": "Australia  Materials"
                                }
                            ],
                            "requests": [],
                            "validatedRequests": []
                        },
                        {
                            "id": "3ced8111-3700-4918-8fbd-558c06a492b7",
                            "version": 1,
                            "firstName": "Ryan",
                            "lastName": "Alsop",
                            "dateOfBirth": "1924-05-17",
                            "currentBalances": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 4.0,
                                    "amount": 409147.0,
                                    "instrument": "FTSE  Software and Computer Services"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 67.0,
                                    "amount": 962794.0,
                                    "instrument": "FTSE  Tobacco"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 25.0,
                                    "amount": 687377.0,
                                    "instrument": "FTSE  Oil Equipment and Services"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 4.0,
                                    "amount": 366782.0,
                                    "instrument": "Portugal "
                                }
                            ],
                            "portfolioAllocations": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 4.0,
                                    "instrument": "FTSE  Software and Computer Services"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 67.0,
                                    "instrument": "FTSE  Tobacco"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 25.0,
                                    "instrument": "FTSE  Oil Equipment and Services"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 4.0,
                                    "instrument": "Portugal "
                                }
                            ],
                            "requests": [],
                            "validatedRequests": []
                        },
                        {
                            "id": "3b4c5ba7-29f9-48c0-b143-d659858c5f96",
                            "version": 1,
                            "firstName": "Radmila",
                            "lastName": "Veljković",
                            "dateOfBirth": "1975-02-15",
                            "currentBalances": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 40.0,
                                    "amount": 244388.0,
                                    "instrument": "Greece "
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 11.0,
                                    "amount": 481766.0,
                                    "instrument": "CSOP Hang Seng Index Daily (x) Inverse Product"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 11.0,
                                    "amount": 114357.0,
                                    "instrument": "National Australia Bank Ltd"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 20.0,
                                    "amount": 731099.0,
                                    "instrument": "CSOP Hang Seng Index Daily (x) Inverse Product"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 18.0,
                                    "amount": 195329.0,
                                    "instrument": "FTSE  Software and Computer Services"
                                }
                            ],
                            "portfolioAllocations": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 40.0,
                                    "instrument": "Greece "
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 11.0,
                                    "instrument": "CSOP Hang Seng Index Daily (x) Inverse Product"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 11.0,
                                    "instrument": "National Australia Bank Ltd"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 20.0,
                                    "instrument": "CSOP Hang Seng Index Daily (x) Inverse Product"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 18.0,
                                    "instrument": "FTSE  Software and Computer Services"
                                }
                            ],
                            "requests": [],
                            "validatedRequests": []
                        },
                        {
                            "id": "eace920a-4134-44c1-8cde-228ed719b2e1",
                            "version": 1,
                            "firstName": "Slaven",
                            "lastName": "Bower",
                            "dateOfBirth": "1999-05-24",
                            "currentBalances": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 65.0,
                                    "amount": 819476.0,
                                    "instrument": "Rio Tinto PLC"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 10.0,
                                    "amount": 998762.0,
                                    "instrument": "FTSE  Banks"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 24.0,
                                    "amount": 564717.0,
                                    "instrument": "CSOP FTSE China A ETF  "
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 1.0,
                                    "amount": 368572.0,
                                    "instrument": "Boost Silver x Leverage Daily ETP  LSI"
                                }
                            ],
                            "portfolioAllocations": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 65.0,
                                    "instrument": "Rio Tinto PLC"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 10.0,
                                    "instrument": "FTSE  Banks"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 24.0,
                                    "instrument": "CSOP FTSE China A ETF  "
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 1.0,
                                    "instrument": "Boost Silver x Leverage Daily ETP  LSI"
                                }
                            ],
                            "requests": [],
                            "validatedRequests": []
                        },
                        {
                            "id": "cef47e68-5e73-49fe-9cce-8a114b9375fd",
                            "version": 1,
                            "firstName": "Sotir",
                            "lastName": "North",
                            "dateOfBirth": "1964-02-16",
                            "currentBalances": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 24.0,
                                    "amount": 995280.0,
                                    "instrument": "German Bobl"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 39.0,
                                    "amount": 671048.0,
                                    "instrument": "FTSE  Personal Goods"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 22.0,
                                    "amount": 362352.0,
                                    "instrument": "FTSE  Oil Equipment and Services"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 15.0,
                                    "amount": 632278.0,
                                    "instrument": "Cambria Foreign Shareholder Yield ETF"
                                }
                            ],
                            "portfolioAllocations": [
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 24.0,
                                    "instrument": "German Bobl"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 39.0,
                                    "instrument": "FTSE  Personal Goods"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 22.0,
                                    "instrument": "FTSE  Oil Equipment and Services"
                                },
                                {
                                    "id": null,
                                    "version": 1,
                                    "percentage": 15.0,
                                    "instrument": "Cambria Foreign Shareholder Yield ETF"
                                }
                            ],
                            "requests": [],
                            "validatedRequests": []
                        }
                    ]
                }
            ]
        }
    ]