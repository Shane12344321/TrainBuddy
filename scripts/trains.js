/**
 * TrainBuddy — Indian Railways Train Database
 * Source: schedules.json + VIT-specific trains
 * Total trains: 2098
 */

const TRAINS_DB = [
  {
    "number": "02423",
    "name": "Dibrugarh Guwahati Rajdhani Express",
    "sourceCode": "DBRT",
    "source": "Dibrugarh Town",
    "destCode": "GHY",
    "dest": "Guwahati"
  },
  {
    "number": "02424",
    "name": "Guwahati Dibrugarh Rajdhani Express",
    "sourceCode": "GHY",
    "source": "Guwahati",
    "destCode": "DBRT",
    "dest": "Dibrugarh Town"
  },
  {
    "number": "02435",
    "name": "Dibrugarh Guwahati Rajdhani Express",
    "sourceCode": "DBRT",
    "source": "Dibrugarh Town",
    "destCode": "GHY",
    "dest": "Guwahati"
  },
  {
    "number": "02436",
    "name": "Guwahati Dibrugarh Rajdhani Express",
    "sourceCode": "GHY",
    "source": "Guwahati",
    "destCode": "DBRT",
    "dest": "Dibrugarh Town"
  },
  {
    "number": "02779",
    "name": "Vasco da Gama Bangalore Link Express",
    "sourceCode": "VSG",
    "source": "Vasco Da Gama",
    "destCode": "SBC",
    "dest": "Bangalore City Jn"
  },
  {
    "number": "05697",
    "name": "Hill Queen Express",
    "sourceCode": "LMG",
    "source": "Lumding Jn",
    "destCode": "LFG",
    "dest": "Lower Haflong"
  },
  {
    "number": "05698",
    "name": "Hill Queen Express",
    "sourceCode": "LFG",
    "source": "Lower Haflong",
    "destCode": "LMG",
    "dest": "Lumding Jn"
  },
  {
    "number": "06228",
    "name": "Shimoga Mysore Express",
    "sourceCode": "SMET",
    "source": "Shimoga Town",
    "destCode": "MYS",
    "dest": "Mysore Jn"
  },
  {
    "number": "06501",
    "name": "Yesvantpur - Ahmedabad Garib Rath Special",
    "sourceCode": "YPR",
    "source": "Yesvantpur Jn",
    "destCode": "ADI",
    "dest": "Ahmedabad Jn"
  },
  {
    "number": "06502",
    "name": "Ahmedabad -Yesvantpur Garib Rath Special",
    "sourceCode": "ADI",
    "source": "Ahmedabad Jn",
    "destCode": "YPR",
    "dest": "Yesvantpur Jn"
  },
  {
    "number": "06535",
    "name": "Bijapur Express",
    "sourceCode": "YPR",
    "source": "Yesvantpur Jn",
    "destCode": "BJP",
    "dest": "Bijapur"
  },
  {
    "number": "06948",
    "name": "Hubli Jn - Vasco Da Gama Link Express",
    "sourceCode": "UBL",
    "source": "Hubli Jn",
    "destCode": "VSG",
    "dest": "Vasco Da Gama"
  },
  {
    "number": "07301",
    "name": "Mysore Shimoga Express",
    "sourceCode": "MYS",
    "source": "Mysore Jn",
    "destCode": "SMET",
    "dest": "Shimoga Town"
  },
  {
    "number": "08001",
    "name": "Kharagpur-Jhargram Express Special",
    "sourceCode": "KGP",
    "source": "Kharagpur Jn",
    "destCode": "JGM",
    "dest": "Jhargram"
  },
  {
    "number": "08469",
    "name": "Puri-Bangalore weekly Garib Rath special",
    "sourceCode": "PURI",
    "source": "Puri",
    "destCode": "SBC",
    "dest": "Bangalore City Jn"
  },
  {
    "number": "08470",
    "name": "Bangalore-Puri Garib Rath Special",
    "sourceCode": "SBC",
    "source": "Bangalore City Jn",
    "destCode": "PURI",
    "dest": "Puri"
  },
  {
    "number": "10001",
    "name": "Satpura Express",
    "sourceCode": "BTC",
    "source": "Balaghat Junction",
    "destCode": "JBP",
    "dest": "Jabalpur"
  },
  {
    "number": "10002",
    "name": "Satpura Express",
    "sourceCode": "JBP",
    "source": "Jabalpur",
    "destCode": "BTC",
    "dest": "Balaghat Junction"
  },
  {
    "number": "10103",
    "name": "MUMBAI CST - MADGAON Mandovi Exp",
    "sourceCode": "CSTM",
    "source": "Mumbai Cst",
    "destCode": "MAO",
    "dest": "Madgaon"
  },
  {
    "number": "10104",
    "name": "MADGAON - MUMBAI CST Mandovi Exp",
    "sourceCode": "MAO",
    "source": "Madgaon",
    "destCode": "CSTM",
    "dest": "Mumbai Cst"
  },
  {
    "number": "10111",
    "name": "MUMBAI CST - MADGAON Konkan Knaya Exp",
    "sourceCode": "CSTM",
    "source": "Mumbai Cst",
    "destCode": "MAO",
    "dest": "Madgaon"
  },
  {
    "number": "10112",
    "name": "MADGAON - MUMBAI CST Konkan Knaya Exp",
    "sourceCode": "MAO",
    "source": "Madgaon",
    "destCode": "CSTM",
    "dest": "Mumbai Cst"
  },
  {
    "number": "10215",
    "name": "Madgaon Ernakulam Weekly Super Fast Express",
    "sourceCode": "MAO",
    "source": "Madgaon",
    "destCode": "ERS",
    "dest": "Ernakulam Jn"
  },
  {
    "number": "10216",
    "name": "Ernakulam Madgaon Weekly SF Express",
    "sourceCode": "ERS",
    "source": "Ernakulam Jn",
    "destCode": "MAO",
    "dest": "Madgaon"
  },
  {
    "number": "11003",
    "name": "DADAR - SAWANTWADI RD Rajya Rani Exp",
    "sourceCode": "DR",
    "source": "Mumbai Dadar Central",
    "destCode": "SWV",
    "dest": "Sawantwadi Road"
  },
  {
    "number": "11004",
    "name": "SAWANTWADI RD - DADAR Rajya Rani Exp",
    "sourceCode": "SWV",
    "source": "Sawantwadi Road",
    "destCode": "DR",
    "dest": "Mumbai Dadar Central"
  },
  {
    "number": "11007",
    "name": "Deccan Express",
    "sourceCode": "CSTM",
    "source": "Mumbai Cst",
    "destCode": "PUNE",
    "dest": "Pune Jn"
  },
  {
    "number": "11008",
    "name": "Deccan Express",
    "sourceCode": "PUNE",
    "source": "Pune Jn",
    "destCode": "CSTM",
    "dest": "Mumbai Cst"
  },
  {
    "number": "11009",
    "name": "Sinhagad Express",
    "sourceCode": "CSTM",
    "source": "Mumbai Cst",
    "destCode": "PUNE",
    "dest": "Pune Jn"
  },
  {
    "number": "11010",
    "name": "Sinhagad Express",
    "sourceCode": "PUNE",
    "source": "Pune Jn",
    "destCode": "CSTM",
    "dest": "Mumbai Cst"
  },
  {
    "number": "11011",
    "name": "Mahalaxmi Express",
    "sourceCode": "CSTM",
    "source": "Mumbai Cst",
    "destCode": "KOP",
    "dest": "C Shahu M Raj Kolhapur Term"
  },
  {
    "number": "11012",
    "name": "Mahalaxmi Express",
    "sourceCode": "KOP",
    "source": "C Shahu M Raj Kolhapur Term",
    "destCode": "CSTM",
    "dest": "Mumbai Cst"
  },
  {
    "number": "11013",
    "name": "Mumbai LTT-Coimbatore Express",
    "sourceCode": "LTT",
    "source": "Lokmanya Tilak Term",
    "destCode": "CBE",
    "dest": "Coimbatore Jn"
  },
  {
    "number": "11014",
    "name": "Coimbatore Mumbai LTT Express",
    "sourceCode": "CBE",
    "source": "Coimbatore Jn",
    "destCode": "LTT",
    "dest": "Lokmanya Tilak Term"
  },
  {
    "number": "11015",
    "name": "Kushinagar Express",
    "sourceCode": "LTT",
    "source": "Lokmanya Tilak Term",
    "destCode": "GKP",
    "dest": "Gorakhpur Jn"
  },
  {
    "number": "11016",
    "name": "Kushinagar Express",
    "sourceCode": "GKP",
    "source": "Gorakhpur Jn",
    "destCode": "LTT",
    "dest": "Lokmanya Tilak Term"
  },
  {
    "number": "11017",
    "name": "Chalukya Express",
    "sourceCode": "DR",
    "source": "Mumbai Dadar Central",
    "destCode": "YPR",
    "dest": "Yesvantpur Jn"
  },
  {
    "number": "11018",
    "name": "Chalukya Express",
    "sourceCode": "YPR",
    "source": "Yesvantpur Jn",
    "destCode": "DR",
    "dest": "Mumbai Dadar Central"
  },
  {
    "number": "11019",
    "name": "Konark Express",
    "sourceCode": "CSTM",
    "source": "Mumbai Cst",
    "destCode": "BBS",
    "dest": "Bhubaneswar"
  },
  {
    "number": "11020",
    "name": "Konark Express",
    "sourceCode": "BBS",
    "source": "Bhubaneswar",
    "destCode": "CSTM",
    "dest": "Mumbai Cst"
  },
  {
    "number": "11023",
    "name": "Sahyadri Express",
    "sourceCode": "CSTM",
    "source": "Mumbai Cst",
    "destCode": "KOP",
    "dest": "C Shahu M Raj Kolhapur Term"
  },
  {
    "number": "11024",
    "name": "Sahyadri Express",
    "sourceCode": "KOP",
    "source": "C Shahu M Raj Kolhapur Term",
    "destCode": "CSTM",
    "dest": "Mumbai Cst"
  },
  {
    "number": "11025",
    "name": "Manmad Pune Express(Via Nasik)",
    "sourceCode": "MMR",
    "source": "Manmad Jn",
    "destCode": "PUNE",
    "dest": "Pune Jn"
  },
  {
    "number": "11026",
    "name": "Pune Manmad Express",
    "sourceCode": "PUNE",
    "source": "Pune Jn",
    "destCode": "MMR",
    "dest": "Manmad Jn"
  },
  {
    "number": "11027",
    "name": "Mumbai CST-Chennai Mail",
    "sourceCode": "CSTM",
    "source": "Mumbai Cst",
    "destCode": "MAS",
    "dest": "Chennai Central"
  },
  {
    "number": "11028",
    "name": "Chennai-Mumbai CST Mail",
    "sourceCode": "MAS",
    "source": "Chennai Central",
    "destCode": "CSTM",
    "dest": "Mumbai Cst"
  },
  {
    "number": "11029",
    "name": "Koyna Express",
    "sourceCode": "CSTM",
    "source": "Mumbai Cst",
    "destCode": "KOP",
    "dest": "C Shahu M Raj Kolhapur Term"
  },
  {
    "number": "11030",
    "name": "Koyna Express",
    "sourceCode": "KOP",
    "source": "C Shahu M Raj Kolhapur Term",
    "destCode": "CSTM",
    "dest": "Mumbai Cst"
  },
  {
    "number": "11033",
    "name": "PUNE - DARBHANGA Gyan Ganga Exp",
    "sourceCode": "PUNE",
    "source": "Pune Jn",
    "destCode": "DBG",
    "dest": "Darbhanga Jn"
  },
  {
    "number": "11034",
    "name": "DARBHANGA - PUNE Gyan Ganga Exp",
    "sourceCode": "DBG",
    "source": "Darbhanga Jn",
    "destCode": "PUNE",
    "dest": "Pune Jn"
  },
  {
    "number": "11035",
    "name": "Dadar-Mysore Sharavati Express",
    "sourceCode": "DR",
    "source": "Mumbai Dadar Central",
    "destCode": "MYS",
    "dest": "Mysore Jn"
  },
  {
    "number": "11036",
    "name": "Mysore-Dadar Sharavati Express",
    "sourceCode": "MYS",
    "source": "Mysore Jn",
    "destCode": "DR",
    "dest": "Mumbai Dadar Central"
  },
  {
    "number": "11037",
    "name": "PUNE - GORAKHPUR Exp",
    "sourceCode": "PUNE",
    "source": "Pune Jn",
    "destCode": "GKP",
    "dest": "Gorakhpur Jn"
  },
  {
    "number": "11038",
    "name": "GORAKHPUR - PUNE Exp",
    "sourceCode": "GKP",
    "source": "Gorakhpur Jn",
    "destCode": "PUNE",
    "dest": "Pune Jn"
  },
  {
    "number": "11039",
    "name": "Maharashtra Express",
    "sourceCode": "KOP",
    "source": "C Shahu M Raj Kolhapur Term",
    "destCode": "G",
    "dest": "Gondia Jn"
  },
  {
    "number": "11040",
    "name": "Maharashtra Express",
    "sourceCode": "G",
    "source": "Gondia Jn",
    "destCode": "KOP",
    "dest": "C Shahu M Raj Kolhapur Term"
  },
  {
    "number": "11041",
    "name": "Mumbai - Chennai Express",
    "sourceCode": "CSTM",
    "source": "Mumbai Cst",
    "destCode": "MAS",
    "dest": "Chennai Central"
  },
  {
    "number": "11042",
    "name": "ChennaiCentral-CST Mumbai Express",
    "sourceCode": "MAS",
    "source": "Chennai Central",
    "destCode": "CSTM",
    "dest": "Mumbai Cst"
  },
  {
    "number": "11043",
    "name": "MUMBAI LTT - MADURAI Exp",
    "sourceCode": "LTT",
    "source": "Lokmanya Tilak Term",
    "destCode": "MDU",
    "dest": "Madurai Jn"
  },
  {
    "number": "11044",
    "name": "MADURAI - MUMBAI LTT Exp",
    "sourceCode": "MDU",
    "source": "Madurai Jn",
    "destCode": "LTT",
    "dest": "Lokmanya Tilak Term"
  },
  {
    "number": "11045",
    "name": "KOLHAPUR CSMT - DHANBAD Deekshabhoomi Exp",
    "sourceCode": "KOP",
    "source": "C Shahu M Raj Kolhapur Term",
    "destCode": "DHN",
    "dest": "Dhanbad Jn"
  },
  {
    "number": "11046",
    "name": "DHANBAD - KOLHAPUR CSMT Deekshabhoomi Exp",
    "sourceCode": "DHN",
    "source": "Dhanbad Jn",
    "destCode": "KOP",
    "dest": "C Shahu M Raj Kolhapur Term"
  },
  {
    "number": "11047",
    "name": "Hubli Express",
    "sourceCode": "MRJ",
    "source": "Miraj Jn",
    "destCode": "UBL",
    "dest": "Hubli Jn"
  },
  {
    "number": "11048",
    "name": "Hubli Miraj Express",
    "sourceCode": "UBL",
    "source": "Hubli Jn",
    "destCode": "MRJ",
    "dest": "Miraj Jn"
  },
  {
    "number": "11049",
    "name": "Ahmedabad-Kolhapur Express",
    "sourceCode": "ADI",
    "source": "Ahmedabad Jn",
    "destCode": "KOP",
    "dest": "C Shahu M Raj Kolhapur Term"
  },
  {
    "number": "11050",
    "name": "Kolhapur-Ahmedabad Express",
    "sourceCode": "KOP",
    "source": "C Shahu M Raj Kolhapur Term",
    "destCode": "ADI",
    "dest": "Ahmedabad Jn"
  },
  {
    "number": "11051",
    "name": "Solapur-Kolhapur Express",
    "sourceCode": "SUR",
    "source": "Solapur Jn",
    "destCode": "KOP",
    "dest": "C Shahu M Raj Kolhapur Term"
  },
  {
    "number": "11052",
    "name": "Kolhapur Solapur Express",
    "sourceCode": "KOP",
    "source": "C Shahu M Raj Kolhapur Term",
    "destCode": "SUR",
    "dest": "Solapur Jn"
  },
  {
    "number": "11055",
    "name": "MUMBAI LTT - GORAKHPUR Exp",
    "sourceCode": "LTT",
    "source": "Lokmanya Tilak Term",
    "destCode": "GKP",
    "dest": "Gorakhpur Jn"
  },
  {
    "number": "11056",
    "name": "GORAKHPUR - MUMBAI LTT Exp",
    "sourceCode": "GKP",
    "source": "Gorakhpur Jn",
    "destCode": "LTT",
    "dest": "Lokmanya Tilak Term"
  },
  {
    "number": "11057",
    "name": "Dadar Amritsar Express",
    "sourceCode": "DR",
    "source": "Mumbai Dadar Central",
    "destCode": "ASR",
    "dest": "Amritsar Jn"
  },
  {
    "number": "11058",
    "name": "Amritsar Dadar Express",
    "sourceCode": "ASR",
    "source": "Amritsar Jn",
    "destCode": "DR",
    "dest": "Mumbai Dadar Central"
  },
  {
    "number": "11059",
    "name": "MUMBAI LTT - CHHAPRA Godan Exp",
    "sourceCode": "LTT",
    "source": "Lokmanya Tilak Term",
    "destCode": "CPR",
    "dest": "Chhapra"
  },
  {
    "number": "11060",
    "name": "CHHAPRA - MUMBAI LTT Godan Exp",
    "sourceCode": "CPR",
    "source": "Chhapra",
    "destCode": "LTT",
    "dest": "Lokmanya Tilak Term"
  },
  {
    "number": "11061",
    "name": "MUMBAI LTT - DARBHANGA Pawan Exp",
    "sourceCode": "LTT",
    "source": "Lokmanya Tilak Term",
    "destCode": "MFP",
    "dest": "Muzaffarpur Jn"
  },
  {
    "number": "11062",
    "name": "DARBHANGA - MUMBAI LTT Pawan Exp",
    "sourceCode": "MFP",
    "source": "Muzaffarpur Jn",
    "destCode": "LTT",
    "dest": "Lokmanya Tilak Term"
  },
  {
    "number": "11063",
    "name": "CHENNAI EGMORE - METTUR DAM SLIP EXP",
    "sourceCode": "MS",
    "source": "Chennai Egmore",
    "destCode": "SA",
    "dest": "Salem Jn"
  },
  {
    "number": "11064",
    "name": "SALEM - CHENNAI EGMORE Exp",
    "sourceCode": "SA",
    "source": "Salem Jn",
    "destCode": "MS",
    "dest": "Chennai Egmore"
  },
  {
    "number": "11065",
    "name": "MUMBAI LTT - DARBHANGA Pawan Exp",
    "sourceCode": "LTT",
    "source": "Lokmanya Tilak Term",
    "destCode": "DBG",
    "dest": "Darbhanga Jn"
  },
  {
    "number": "11066",
    "name": "DARBHANGA - MUMBAI LTT Pawan Exp",
    "sourceCode": "DBG",
    "source": "Darbhanga Jn",
    "destCode": "LTT",
    "dest": "Lokmanya Tilak Term"
  },
  {
    "number": "11067",
    "name": "MUMBAI LTT - FAIZABAD Saket Exp",
    "sourceCode": "LTT",
    "source": "Lokmanya Tilak Term",
    "destCode": "FD",
    "dest": "Faizabad Jn"
  },
  {
    "number": "11068",
    "name": "FAIZABAD - MUMBAI LTT Saket Exp",
    "sourceCode": "FD",
    "source": "Faizabad Jn",
    "destCode": "LTT",
    "dest": "Lokmanya Tilak Term"
  },
  {
    "number": "11069",
    "name": "Tulsi Express",
    "sourceCode": "LTT",
    "source": "Lokmanya Tilak Term",
    "destCode": "ALD",
    "dest": "Allahabad Jn"
  },
  {
    "number": "11070",
    "name": "Tulsi Express",
    "sourceCode": "ALD",
    "source": "Allahabad Jn",
    "destCode": "LTT",
    "dest": "Lokmanya Tilak Term"
  },
  {
    "number": "11071",
    "name": "Kamayani Express",
    "sourceCode": "LTT",
    "source": "Lokmanya Tilak Term",
    "destCode": "BSB",
    "dest": "Varanasi Jn"
  },
  {
    "number": "11072",
    "name": "Kamayani Express",
    "sourceCode": "BSB",
    "source": "Varanasi Jn",
    "destCode": "LTT",
    "dest": "Lokmanya Tilak Term"
  },
  {
    "number": "11077",
    "name": "Jhelum Express",
    "sourceCode": "PUNE",
    "source": "Pune Jn",
    "destCode": "JAT",
    "dest": "Jammu Tawi"
  },
  {
    "number": "11078",
    "name": "Jhelum Express",
    "sourceCode": "JAT",
    "source": "Jammu Tawi",
    "destCode": "PUNE",
    "dest": "Pune Jn"
  },
  {
    "number": "11087",
    "name": "Veraval Pune Express",
    "sourceCode": "VRL",
    "source": "Veraval",
    "destCode": "PUNE",
    "dest": "Pune Jn"
  },
  {
    "number": "11088",
    "name": "Pune Veraval Express",
    "sourceCode": "PUNE",
    "source": "Pune Jn",
    "destCode": "VRL",
    "dest": "Veraval"
  },
  {
    "number": "11091",
    "name": "BHUJ - PUNE Ahimsa Exp",
    "sourceCode": "BHUJ",
    "source": "Bhuj",
    "destCode": "PUNE",
    "dest": "Pune Jn"
  },
  {
    "number": "11092",
    "name": "PUNE - BHUJ Ahimsa Exp",
    "sourceCode": "PUNE",
    "source": "Pune Jn",
    "destCode": "BHUJ",
    "dest": "Bhuj"
  },
  {
    "number": "11093",
    "name": "MUMBAI CST - VARANASI Mahanagari Exp",
    "sourceCode": "CSTM",
    "source": "Mumbai Cst",
    "destCode": "BSB",
    "dest": "Varanasi Jn"
  },
  {
    "number": "11094",
    "name": "VARANASI - MUMBAI CST Mahanagari Exp",
    "sourceCode": "BSB",
    "source": "Varanasi Jn",
    "destCode": "CSTM",
    "dest": "Mumbai Cst"
  },
  {
    "number": "11095",
    "name": "Ahimsa Express",
    "sourceCode": "ADI",
    "source": "Ahmedabad Jn",
    "destCode": "PUNE",
    "dest": "Pune Jn"
  },
  {
    "number": "11096",
    "name": "Ahimsa Express",
    "sourceCode": "PUNE",
    "source": "Pune Jn",
    "destCode": "ADI",
    "dest": "Ahmedabad Jn"
  },
  {
    "number": "11097",
    "name": "PUNE - ERNAKULAM Poorna Exp",
    "sourceCode": "PUNE",
    "source": "Pune Jn",
    "destCode": "ERS",
    "dest": "Ernakulam Jn"
  },
  {
    "number": "11098",
    "name": "ERNAKULAM - PUNE Poorna Exp",
    "sourceCode": "ERS",
    "source": "Ernakulam Jn",
    "destCode": "PUNE",
    "dest": "Pune Jn"
  },
  {
    "number": "11105",
    "name": "Pratham Swatantrata Sangram Express",
    "sourceCode": "KOAA",
    "source": "Kolkata Chitpur",
    "destCode": "JHS",
    "dest": "Jhansi Jn"
  },
  {
    "number": "11106",
    "name": "Pratham Swatantrata Sangram Express",
    "sourceCode": "JHS",
    "source": "Jhansi Jn",
    "destCode": "KOAA",
    "dest": "Kolkata Chitpur"
  },
  {
    "number": "11107",
    "name": "Gwalior-Varanasi Bundelkhand Express",
    "sourceCode": "GWL",
    "source": "Gwalior Jn",
    "destCode": "BSB",
    "dest": "Varanasi Jn"
  },
  {
    "number": "11108",
    "name": "Varanasi-Gwalior Bundelkhand Express",
    "sourceCode": "BSB",
    "source": "Varanasi Jn",
    "destCode": "GWL",
    "dest": "Gwalior Jn"
  },
  {
    "number": "11109",
    "name": "Jhansi-Lucknow Intercity Express",
    "sourceCode": "JHS",
    "source": "Jhansi Jn",
    "destCode": "LKO",
    "dest": "Lucknow"
  },
  {
    "number": "11110",
    "name": "Lucknow-Jhansi InterCity",
    "sourceCode": "LKO",
    "source": "Lucknow",
    "destCode": "JHS",
    "dest": "Jhansi Jn"
  },
  {
    "number": "11123",
    "name": "Barauni-Gwalior Mail",
    "sourceCode": "BJU",
    "source": "Barauni Jn",
    "destCode": "GWL",
    "dest": "Gwalior Jn"
  },
  {
    "number": "11124",
    "name": "Gwalior Barauni Mail",
    "sourceCode": "GWL",
    "source": "Gwalior Jn",
    "destCode": "BJU",
    "dest": "Barauni Jn"
  },
  {
    "number": "11125",
    "name": "Indore Gwalior Express",
    "sourceCode": "INDB",
    "source": "Indore Jn Bg",
    "destCode": "GWL",
    "dest": "Gwalior Jn"
  },
  {
    "number": "11126",
    "name": "Gwalior Indore Express",
    "sourceCode": "GWL",
    "source": "Gwalior Jn",
    "destCode": "INDB",
    "dest": "Indore Jn Bg"
  },
  {
    "number": "11265",
    "name": "JABALPUR - AMBIKAPUR Exp",
    "sourceCode": "JBP",
    "source": "Jabalpur",
    "destCode": "ABKP",
    "dest": "Ambikapur"
  },
  {
    "number": "11266",
    "name": "AMBIKAPUR - JABALPUR Exp",
    "sourceCode": "ABKP",
    "source": "Ambikapur",
    "destCode": "JBP",
    "dest": "Jabalpur"
  },
  {
    "number": "11271",
    "name": "ITARSI - BHOPAL Vindhyachal Exp",
    "sourceCode": "ET",
    "source": "Itarsi Jn",
    "destCode": "BPL",
    "dest": "Bhopal Jn"
  },
  {
    "number": "11272",
    "name": "BHOPAL - ITARSI Vindhyachal Exp",
    "sourceCode": "BPL",
    "source": "Bhopal Jn",
    "destCode": "ET",
    "dest": "Itarsi Jn"
  },
  {
    "number": "11401",
    "name": "Nandigram Express",
    "sourceCode": "CSTM",
    "source": "Mumbai Cst",
    "destCode": "NGP",
    "dest": "Nagpur"
  },
  {
    "number": "11402",
    "name": "Nandigram Express",
    "sourceCode": "NGP",
    "source": "Nagpur",
    "destCode": "CSTM",
    "dest": "Mumbai Cst"
  },
  {
    "number": "11403",
    "name": "NAGPUR - KOLHAPUR EXP",
    "sourceCode": "NGP",
    "source": "Nagpur",
    "destCode": "KOP",
    "dest": "C Shahu M Raj Kolhapur Term"
  },
  {
    "number": "11404",
    "name": "KOLHAPUR - NAGPUR EXP",
    "sourceCode": "KOP",
    "source": "C Shahu M Raj Kolhapur Term",
    "destCode": "NGP",
    "dest": "Nagpur"
  },
  {
    "number": "11423",
    "name": "Solapur - Hubli Express",
    "sourceCode": "SUR",
    "source": "Solapur Jn",
    "destCode": "UBL",
    "dest": "Hubli Jn"
  },
  {
    "number": "11424",
    "name": "Hubli Jn - Solapur Express",
    "sourceCode": "UBL",
    "source": "Hubli Jn",
    "destCode": "SUR",
    "dest": "Solapur Jn"
  },
  {
    "number": "11447",
    "name": "JABALPUR - KOL HOWRAH Shaktipunj Exp",
    "sourceCode": "JBP",
    "source": "Jabalpur",
    "destCode": "HWH",
    "dest": "Howrah Jn"
  },
  {
    "number": "11448",
    "name": "HOWRAH - JABALPUR Shaktipunj Exp",
    "sourceCode": "HWH",
    "source": "Howrah Jn",
    "destCode": "JBP",
    "dest": "Jabalpur"
  },
  {
    "number": "11449",
    "name": "JABALPUR - SHRI MATA VAISHNO DEVI KATRA Express",
    "sourceCode": "JBP",
    "source": "Jabalpur",
    "destCode": "JAT",
    "dest": "Jammu Tawi"
  },
  {
    "number": "11450",
    "name": "SHRI MATA VAISHNO DEVI KATRA - JABALPUR Express",
    "sourceCode": "JAT",
    "source": "Jammu Tawi",
    "destCode": "JBP",
    "dest": "Jabalpur"
  },
  {
    "number": "11451",
    "name": "JABALPUR - REWA Intercity Exp",
    "sourceCode": "JBP",
    "source": "Jabalpur",
    "destCode": "REWA",
    "dest": "Rewa"
  },
  {
    "number": "11452",
    "name": "REWA - JABALPUR Intercity Exp",
    "sourceCode": "REWA",
    "source": "Rewa",
    "destCode": "JBP",
    "dest": "Jabalpur"
  },
  {
    "number": "11453",
    "name": "Prerna Express",
    "sourceCode": "ADI",
    "source": "Ahmedabad Jn",
    "destCode": "NGP",
    "dest": "Nagpur"
  },
  {
    "number": "11454",
    "name": "Prerna Express",
    "sourceCode": "NGP",
    "source": "Nagpur",
    "destCode": "ADI",
    "dest": "Ahmedabad Jn"
  },
  {
    "number": "11463",
    "name": "Somnath-Jabalpur Express",
    "sourceCode": "SMNH",
    "source": "Somnath",
    "destCode": "JBP",
    "dest": "Jabalpur"
  },
  {
    "number": "11464",
    "name": "Jabalpur-Somnath Express",
    "sourceCode": "JBP",
    "source": "Jabalpur",
    "destCode": "SMNH",
    "dest": "Somnath"
  },
  {
    "number": "11465",
    "name": "SOMNATH - JABALPUR Exp (via Bina)",
    "sourceCode": "SMNH",
    "source": "Somnath",
    "destCode": "JBP",
    "dest": "Jabalpur"
  },
  {
    "number": "11466",
    "name": "JABALPUR - SOMNATH Exp (via Bina)",
    "sourceCode": "JBP",
    "source": "Jabalpur",
    "destCode": "SMNH",
    "dest": "Somnath"
  },
  {
    "number": "11471",
    "name": "Indore-Jabalpur Overnight Express",
    "sourceCode": "INDB",
    "source": "Indore Jn Bg",
    "destCode": "JBP",
    "dest": "Jabalpur"
  },
  {
    "number": "11472",
    "name": "Jabalpur-Indore Express",
    "sourceCode": "JBP",
    "source": "Jabalpur",
    "destCode": "INDB",
    "dest": "Indore Jn Bg"
  },
  {
    "number": "11701",
    "name": "JABALPUR - INDORE Intercity Exp",
    "sourceCode": "JBP",
    "source": "Jabalpur",
    "destCode": "INDB",
    "dest": "Indore Jn Bg"
  },
  {
    "number": "11702",
    "name": "INDORE - JABALPUR Intercity Exp",
    "sourceCode": "INDB",
    "source": "Indore Jn Bg",
    "destCode": "JBP",
    "dest": "Jabalpur"
  },
  {
    "number": "12001",
    "name": "Bhopal-New Delhi Shatabdi Express",
    "sourceCode": "BPL",
    "source": "Bhopal Jn",
    "destCode": "NDLS",
    "dest": "New Delhi"
  },
  {
    "number": "12002",
    "name": "New Delhi-Bhopal Shatabdi Express",
    "sourceCode": "NDLS",
    "source": "New Delhi",
    "destCode": "BPL",
    "dest": "Bhopal Jn"
  },
  {
    "number": "12003",
    "name": "Lucknow-NewDelhi Swarn Shatabdi Express",
    "sourceCode": "LKO",
    "source": "Lucknow",
    "destCode": "NDLS",
    "dest": "New Delhi"
  },
  {
    "number": "12004",
    "name": "NewDelh-Lucknowi Swarn Shatabdi Express",
    "sourceCode": "NDLS",
    "source": "New Delhi",
    "destCode": "LKO",
    "dest": "Lucknow"
  },
  {
    "number": "12005",
    "name": "New Delhi-Kalka Shatabdi",
    "sourceCode": "NDLS",
    "source": "New Delhi",
    "destCode": "KLK",
    "dest": "Kalka"
  },
  {
    "number": "12006",
    "name": "Kalka-New Delhi Shatabdi",
    "sourceCode": "KLK",
    "source": "Kalka",
    "destCode": "NDLS",
    "dest": "New Delhi"
  },
  {
    "number": "12007",
    "name": "Shatabdi Express",
    "sourceCode": "MAS",
    "source": "Chennai Central",
    "destCode": "MYS",
    "dest": "Mysore"
  },
  {
    "number": "12008",
    "name": "Shatabdi Express",
    "sourceCode": "MYS",
    "source": "Mysore",
    "destCode": "MAS",
    "dest": "Chennai Central"
  },
  {
    "number": "12009",
    "name": "Mumbai-Ahmedabad Shatabdi Express",
    "sourceCode": "BCT",
    "source": "Mumbai Central",
    "destCode": "ADI",
    "dest": "Ahmedabad Jn"
  },
  {
    "number": "12010",
    "name": "Ahmedabad-Mumbai Central Shatabdi",
    "sourceCode": "ADI",
    "source": "Ahmedabad Jn",
    "destCode": "BCT",
    "dest": "Mumbai Central"
  },
  {
    "number": "12011",
    "name": "Kalka Shatabdi Express",
    "sourceCode": "NDLS",
    "source": "New Delhi",
    "destCode": "KLK",
    "dest": "Kalka"
  },
  {
    "number": "12012",
    "name": "Kalka-New Delhi Shatabdi",
    "sourceCode": "KLK",
    "source": "Kalka",
    "destCode": "NDLS",
    "dest": "New Delhi"
  },
  {
    "number": "12013",
    "name": "New Delhi-Amritsar Shatabdi Express",
    "sourceCode": "NDLS",
    "source": "New Delhi",
    "destCode": "ASR",
    "dest": "Amritsar Jn"
  },
  {
    "number": "12014",
    "name": "Amritsar-NewDelhi Shatabdi",
    "sourceCode": "ASR",
    "source": "Amritsar Jn",
    "destCode": "NDLS",
    "dest": "New Delhi"
  },
  {
    "number": "12015",
    "name": "New Delhi-Ajmer Shatabdi",
    "sourceCode": "NDLS",
    "source": "New Delhi",
    "destCode": "AII",
    "dest": "Ajmer Jn"
  },
  {
    "number": "12016",
    "name": "Ajmer-New Delhi Shatabdi",
    "sourceCode": "AII",
    "source": "Ajmer Jn",
    "destCode": "NDLS",
    "dest": "New Delhi"
  },
  {
    "number": "12017",
    "name": "New Delhi-Dehradun Shatabdi",
    "sourceCode": "NDLS",
    "source": "New Delhi",
    "destCode": "DDN",
    "dest": "Dehradun"
  },
  {
    "number": "12018",
    "name": "Dehradun-New Delhi Shatabdi",
    "sourceCode": "DDN",
    "source": "Dehradun",
    "destCode": "NDLS",
    "dest": "New Delhi"
  },
  {
    "number": "12019",
    "name": "Howrah-Ranchi Shatabdi Express",
    "sourceCode": "HWH",
    "source": "Howrah Jn",
    "destCode": "RNC",
    "dest": "Ranchi"
  },
  {
    "number": "12020",
    "name": "Ranchi-Howrah Shatabdi Express",
    "sourceCode": "RNC",
    "source": "Ranchi",
    "destCode": "HWH",
    "dest": "Howrah Jn"
  },
  {
    "number": "12021",
    "name": "Barbil Janshatabdi",
    "sourceCode": "HWH",
    "source": "Howrah Jn",
    "destCode": "BBN",
    "dest": "Barbil"
  },
  {
    "number": "12022",
    "name": "Barbil Howrah Janshatabdi",
    "sourceCode": "BBN",
    "source": "Barbil",
    "destCode": "HWH",
    "dest": "Howrah Jn"
  },
  {
    "number": "12023",
    "name": "Howrah-Patna Jan Shatabdi",
    "sourceCode": "HWH",
    "source": "Howrah Jn",
    "destCode": "PNBE",
    "dest": "Patna Jn"
  },
  {
    "number": "12024",
    "name": "Patna-Howrah Jan Shatabdi",
    "sourceCode": "PNBE",
    "source": "Patna Jn",
    "destCode": "HWH",
    "dest": "Howrah Jn"
  },
  {
    "number": "12025",
    "name": "Pune-Secunderabad Shatabdi Express",
    "sourceCode": "PUNE",
    "source": "Pune Jn",
    "destCode": "SC",
    "dest": "Secunderabad Jn"
  },
  {
    "number": "12026",
    "name": "Secunderabad-Pune Shatabdi",
    "sourceCode": "SC",
    "source": "Secunderabad Jn",
    "destCode": "PUNE",
    "dest": "Pune Jn"
  },
  {
    "number": "12027",
    "name": "Chennai Shatabdi",
    "sourceCode": "MAS",
    "source": "Chennai Central",
    "destCode": "SBC",
    "dest": "Bangalore City"
  },
  {
    "number": "12028",
    "name": "Bangalore Shatabdi",
    "sourceCode": "SBC",
    "source": "Bangalore City",
    "destCode": "MAS",
    "dest": "Chennai Central"
  },
  {
    "number": "12029",
    "name": "New Delhi-Amritsar Swarna Shatabdi Express",
    "sourceCode": "NDLS",
    "source": "New Delhi",
    "destCode": "ASR",
    "dest": "Amritsar Jn"
  },
  {
    "number": "12030",
    "name": "Amritsar-New Delhi Swarna Shatabdi Express",
    "sourceCode": "ASR",
    "source": "Amritsar Jn",
    "destCode": "NDLS",
    "dest": "New Delhi"
  },
  {
    "number": "12031",
    "name": "Amritsar Shatabdi Express",
    "sourceCode": "NDLS",
    "source": "New Delhi",
    "destCode": "ASR",
    "dest": "Amritsar Jn"
  },
  {
    "number": "12032",
    "name": "Amritsar Shatabdi Express",
    "sourceCode": "ASR",
    "source": "Amritsar Jn",
    "destCode": "NDLS",
    "dest": "New Delhi"
  },
  {
    "number": "12033",
    "name": "Kanpur Shatabdi",
    "sourceCode": "CNB",
    "source": "Kanpur Central",
    "destCode": "NDLS",
    "dest": "New Delhi"
  },
  {
    "number": "12034",
    "name": "New Delhi-Kanpur Shatabdi Express",
    "sourceCode": "NDLS",
    "source": "New Delhi",
    "destCode": "CNB",
    "dest": "Kanpur Central"
  },
  {
    "number": "12037",
    "name": "New Delhi-Ludhiana Shatabdi Express",
    "sourceCode": "NDLS",
    "source": "New Delhi",
    "destCode": "LDH",
    "dest": "Ludhiana Jn"
  },
  {
    "number": "12038",
    "name": "Ludhiana-New Delhi Shatabdi Express",
    "sourceCode": "LDH",
    "source": "Ludhiana Jn",
    "destCode": "NDLS",
    "dest": "New Delhi"
  },
  {
    "number": "12053",
    "name": "Haridwar Amritsar Jan Shatabdi Express",
    "sourceCode": "HW",
    "source": "Haridwar Jn",
    "destCode": "ASR",
    "dest": "Amritsar Jn"
  },
  {
    "number": "12054",
    "name": "Amritsar Haridwar Jan Shatabdi",
    "sourceCode": "ASR",
    "source": "Amritsar Jn",
    "destCode": "HW",
    "dest": "Haridwar Jn"
  },
  {
    "number": "12055",
    "name": "Dehradun Jan Shatabdi Express",
    "sourceCode": "NDLS",
    "source": "New Delhi",
    "destCode": "DDN",
    "dest": "Dehradun"
  },
  {
    "number": "12056",
    "name": "Dehradun Jan Shatabdi Express",
    "sourceCode": "DDN",
    "source": "Dehradun",
    "destCode": "NDLS",
    "dest": "New Delhi"
  },
  {
    "number": "12057",
    "name": "New Delhi-Una Janshatabdi",
    "sourceCode": "NDLS",
    "source": "New Delhi",
    "destCode": "UHL",
    "dest": "Una Himachal"
  },
  {
    "number": "12058",
    "name": "Una-New Delhi Janshatabdi",
    "sourceCode": "UHL",
    "source": "Una Himachal",
    "destCode": "NDLS",
    "dest": "New Delhi"
  },
  {
    "number": "12059",
    "name": "Kota-Hazrat Nizamuddin Jan Shatabdi",
    "sourceCode": "KOTA",
    "source": "Kota Jn",
    "destCode": "NZM",
    "dest": "Delhi H Nizamuddin"
  },
  {
    "number": "12060",
    "name": "Hazarat Nizamuddin-Kota Jan Shatabdi",
    "sourceCode": "NZM",
    "source": "Delhi H Nizamuddin",
    "destCode": "KOTA",
    "dest": "Kota Jn"
  },
  {
    "number": "12061",
    "name": "HabibGanj Bhopal-Jabalpur Jan Shatabdi",
    "sourceCode": "HBJ",
    "source": "Habibganj",
    "destCode": "JBP",
    "dest": "Jabalpur"
  },
  {
    "number": "12062",
    "name": "Jabalpur-HabibGanj Bhopal Jan Shatabdi",
    "sourceCode": "JBP",
    "source": "Jabalpur",
    "destCode": "HBJ",
    "dest": "Habibganj"
  },
  {
    "number": "12063",
    "name": "Haridwar Chandigarh Una Link Jan Shatabdi Express",
    "sourceCode": "HW",
    "source": "Haridwar Jn",
    "destCode": "UHL",
    "dest": "Una Himachal"
  },
  {
    "number": "12064",
    "name": "Una Chandigarh Haridwar Link Jan Shatabdi",
    "sourceCode": "UHL",
    "source": "Una Himachal",
    "destCode": "HW",
    "dest": "Haridwar Jn"
  },
  {
    "number": "12067",
    "name": "Guwahati Jorhat Jan Shatabdi",
    "sourceCode": "GHY",
    "source": "Guwahati",
    "destCode": "JTTN",
    "dest": "Jorhat Town"
  },
  {
    "number": "12068",
    "name": "Jorhat Guwahati Jan Shatabdi",
    "sourceCode": "JTTN",
    "source": "Jorhat Town",
    "destCode": "GHY",
    "dest": "Guwahati"
  },
  {
    "number": "12069",
    "name": "Raigarh-Gondia Jan Shatabdi",
    "sourceCode": "RIG",
    "source": "Raigarh",
    "destCode": "G",
    "dest": "Gondia Jn"
  },
  {
    "number": "12070",
    "name": "Gondia-Raigarh Jan Shatabdi",
    "sourceCode": "G",
    "source": "Gondia Jn",
    "destCode": "RIG",
    "dest": "Raigarh"
  },
  {
    "number": "12071",
    "name": "Mumbai Aurangabad Jan Shatabdi",
    "sourceCode": "CSTM",
    "source": "Mumbai Cst",
    "destCode": "AWB",
    "dest": "Aurangabad"
  },
  {
    "number": "12072",
    "name": "Aurangabad Mumbai Jan Shatabdi",
    "sourceCode": "AWB",
    "source": "Aurangabad",
    "destCode": "CSTM",
    "dest": "Mumbai Cst"
  },
  {
    "number": "12073",
    "name": "Howrah-Bhubaneswar Jan Shatabdi Express",
    "sourceCode": "HWH",
    "source": "Howrah Jn",
    "destCode": "BBS",
    "dest": "Bhubaneswar"
  },
  {
    "number": "12074",
    "name": "Bhubaneswar-Howrah Jan Shatabdi Express",
    "sourceCode": "BBS",
    "source": "Bhubaneswar",
    "destCode": "HWH",
    "dest": "Howrah Jn"
  },
  {
    "number": "12075",
    "name": "Kozhikode-Trivandrum Jan Shatabdi Express",
    "sourceCode": "CLT",
    "source": "Kozhikode",
    "destCode": "TVC",
    "dest": "Trivandrum Central"
  },
  {
    "number": "12076",
    "name": "Trivandrum-Kozhikode Jan Shatabdi Express",
    "sourceCode": "TVC",
    "source": "Trivandrum Central",
    "destCode": "CLT",
    "dest": "Kozhikode"
  },
  {
    "number": "12077",
    "name": "Chennai Vijayawada Jan Shatabdi Express",
    "sourceCode": "MAS",
    "source": "Chennai Central",
    "destCode": "BZA",
    "dest": "Vijayawada Jn"
  },
  {
    "number": "12078",
    "name": "Vijayawada Chennai Jan Shatabdi",
    "sourceCode": "BZA",
    "source": "Vijayawada Jn",
    "destCode": "MAS",
    "dest": "Chennai Central"
  },
  {
    "number": "12079",
    "name": "Bangalore City-Hubli Jan Shatabdi",
    "sourceCode": "SBC",
    "source": "Bangalore City Jn",
    "destCode": "UBL",
    "dest": "Hubli Jn"
  },
  {
    "number": "12080",
    "name": "Hubli Bangalore Janshatabdi",
    "sourceCode": "UBL",
    "source": "Hubli Jn",
    "destCode": "SBC",
    "dest": "Bangalore City Jn"
  },
  {
    "number": "12081",
    "name": "Kozhikode - Trivandrum Jan Shatabdi",
    "sourceCode": "CLT",
    "source": "Kozhikode",
    "destCode": "TVC",
    "dest": "Trivandrum Central"
  },
  {
    "number": "12082",
    "name": "Trivandrum-Kozhikode Jan Shatabdi",
    "sourceCode": "TVC",
    "source": "Trivandrum Central",
    "destCode": "CLT",
    "dest": "Kozhikode"
  },
  {
    "number": "12083",
    "name": "Mayiladuturai-Coimbatore Jan Shatabdi",
    "sourceCode": "MV",
    "source": "Mayiladuturai Jn",
    "destCode": "CBE",
    "dest": "Coimbatore Jn"
  },
  {
    "number": "12084",
    "name": "Coimbatore-Mayiladuturai Jan Shatabdi",
    "sourceCode": "CBE",
    "source": "Coimbatore Jn",
    "destCode": "MV",
    "dest": "Mayiladuturai Jn"
  },
  {
    "number": "12087",
    "name": "Janmabhoomi Express",
    "sourceCode": "MAS",
    "source": "Chennai Central",
    "destCode": "VSKP",
    "dest": "Visakhapatnam"
  },
  {
    "number": "12088",
    "name": "Janmabhoomi Express",
    "sourceCode": "VSKP",
    "source": "Visakhapatnam",
    "destCode": "MAS",
    "dest": "Chennai Central"
  },
  {
    "number": "12101",
    "name": "MUMBAI LTT - HOWRAH Janeswari Super Deluxe Exp",
    "sourceCode": "LTT",
    "source": "Lokmanya Tilak Term",
    "destCode": "HWH",
    "dest": "Howrah Jn"
  },
  {
    "number": "12102",
    "name": "HOWRAH - MUMBAI LTT Janeswari Super Deluxe Exp",
    "sourceCode": "HWH",
    "source": "Howrah Jn",
    "destCode": "LTT",
    "dest": "Lokmanya Tilak Term"
  },
  {
    "number": "12103",
    "name": "Pune Lucknow Jn SuperFast Express",
    "sourceCode": "PUNE",
    "source": "Pune Jn",
    "destCode": "LJN",
    "dest": "Lucknow Jn"
  },
  {
    "number": "12104",
    "name": "Lucknow Jn - Pune Express",
    "sourceCode": "LJN",
    "source": "Lucknow Jn",
    "destCode": "PUNE",
    "dest": "Pune Jn"
  },
  {
    "number": "12105",
    "name": "Vidarbha Express",
    "sourceCode": "CSTM",
    "source": "Mumbai Cst",
    "destCode": "G",
    "dest": "Gondia Jn"
  },
  {
    "number": "12106",
    "name": "Vidarbha Express",
    "sourceCode": "G",
    "source": "Gondia Jn",
    "destCode": "CSTM",
    "dest": "Mumbai Cst"
  },
  {
    "number": "12107",
    "name": "Mumbai LTT Lucknow Superfast Express",
    "sourceCode": "LTT",
    "source": "Lokmanya Tilak Term",
    "destCode": "LJN",
    "dest": "Lucknow Jn"
  },
  {
    "number": "12108",
    "name": "Lucknow Mumbai LTT Superfast Express",
    "sourceCode": "LJN",
    "source": "Lucknow Jn",
    "destCode": "LTT",
    "dest": "Lokmanya Tilak Term"
  },
  {
    "number": "12109",
    "name": "Panchavati Express",
    "sourceCode": "CSTM",
    "source": "Mumbai Cst",
    "destCode": "MMR",
    "dest": "Manmad Jn"
  },
  {
    "number": "12110",
    "name": "Panchavati Express",
    "sourceCode": "MMR",
    "source": "Manmad Jn",
    "destCode": "CSTM",
    "dest": "Mumbai Cst"
  },
  {
    "number": "12111",
    "name": "Mumbai CST-Amaravati SF Express",
    "sourceCode": "CSTM",
    "source": "Mumbai Cst",
    "destCode": "AMI",
    "dest": "Amravati"
  },
  {
    "number": "12112",
    "name": "Amaravati-Mumbai CST Express",
    "sourceCode": "AMI",
    "source": "Amravati",
    "destCode": "CSTM",
    "dest": "Mumbai Cst"
  },
  {
    "number": "12113",
    "name": "Pune-Nagpur Garib Rath Express",
    "sourceCode": "PUNE",
    "source": "Pune Jn",
    "destCode": "NGP",
    "dest": "Nagpur"
  },
  {
    "number": "12114",
    "name": "Nagpur-Pune Garib Rath",
    "sourceCode": "NGP",
    "source": "Nagpur",
    "destCode": "PUNE",
    "dest": "Pune Jn"
  },
  {
    "number": "12115",
    "name": "Siddheshwar Express",
    "sourceCode": "CSTM",
    "source": "Mumbai Cst",
    "destCode": "SUR",
    "dest": "Solapur Jn"
  },
  {
    "number": "12116",
    "name": "Siddheshwar Express",
    "sourceCode": "SUR",
    "source": "Solapur Jn",
    "destCode": "CSTM",
    "dest": "Mumbai Cst"
  },
  {
    "number": "12117",
    "name": "Mumbai LTT- Manmad Express",
    "sourceCode": "LTT",
    "source": "Lokmanya Tilak Term",
    "destCode": "MMR",
    "dest": "Manmad Jn"
  },
  {
    "number": "12118",
    "name": "Manmad-Mumbai LTT Express",
    "sourceCode": "MMR",
    "source": "Manmad Jn",
    "destCode": "LTT",
    "dest": "Lokmanya Tilak Term"
  },
  {
    "number": "12119",
    "name": "Amaravati Nagpur Express",
    "sourceCode": "AMI",
    "source": "Amravati",
    "destCode": "NGP",
    "dest": "Nagpur"
  },
  {
    "number": "12120",
    "name": "Nagpur Amravati Express",
    "sourceCode": "NGP",
    "source": "Nagpur",
    "destCode": "AMI",
    "dest": "Amravati"
  },
  {
    "number": "12121",
    "name": "JABALPUR - DELHI H NIZAMUDDIN S Kranti Exp",
    "sourceCode": "JBP",
    "source": "Jabalpur",
    "destCode": "NZM",
    "dest": "Delhi H Nizamuddin"
  },
  {
    "number": "12122",
    "name": "DELHI H NIZAMUDDIN - JABALPUR S Kranti Exp",
    "sourceCode": "NZM",
    "source": "Delhi H Nizamuddin",
    "destCode": "JBP",
    "dest": "Jabalpur"
  },
  {
    "number": "12123",
    "name": "Deccan Queen SF Express",
    "sourceCode": "CSTM",
    "source": "Mumbai Cst",
    "destCode": "PUNE",
    "dest": "Pune Jn"
  },
  {
    "number": "12124",
    "name": "Deccan Queen SF Express",
    "sourceCode": "PUNE",
    "source": "Pune Jn",
    "destCode": "CSTM",
    "dest": "Mumbai Cst"
  },
  {
    "number": "12125",
    "name": "Pragati Superfast Express",
    "sourceCode": "CSTM",
    "source": "Mumbai Cst",
    "destCode": "PUNE",
    "dest": "Pune Jn"
  },
  {
    "number": "12126",
    "name": "Pragati Superfast Express",
    "sourceCode": "PUNE",
    "source": "Pune Jn",
    "destCode": "CSTM",
    "dest": "Mumbai Cst"
  },
  {
    "number": "12127",
    "name": "MumbaiCST-Pune SF InterCity",
    "sourceCode": "CSTM",
    "source": "Mumbai Cst",
    "destCode": "PUNE",
    "dest": "Pune Jn"
  },
  {
    "number": "12128",
    "name": "Pune-MumbaiCST Intercity Express",
    "sourceCode": "PUNE",
    "source": "Pune Jn",
    "destCode": "CSTM",
    "dest": "Mumbai Cst"
  },
  {
    "number": "12129",
    "name": "PUNE - HOWRAH Azad Hind SF Exp",
    "sourceCode": "PUNE",
    "source": "Pune Jn",
    "destCode": "HWH",
    "dest": "Howrah Jn"
  },
  {
    "number": "12130",
    "name": "HOWRAH - PUNE Azad Hind SF Exp",
    "sourceCode": "HWH",
    "source": "Howrah Jn",
    "destCode": "PUNE",
    "dest": "Pune Jn"
  },
  {
    "number": "12131",
    "name": "Mumbai Dadar-Sainagar Shirdi Express",
    "sourceCode": "DR",
    "source": "Mumbai Dadar Central",
    "destCode": "SNSI",
    "dest": "Sainagar Shirdi"
  },
  {
    "number": "12132",
    "name": "Sainagar Shirdi-Mumbai Dadar Express",
    "sourceCode": "SNSI",
    "source": "Sainagar Shirdi",
    "destCode": "DR",
    "dest": "Mumbai Dadar Central"
  },
  {
    "number": "12133",
    "name": "MUMBAI CST - MANGALORE Exp",
    "sourceCode": "CSTM",
    "source": "Mumbai Cst",
    "destCode": "MAJN",
    "dest": "Mangalore Jn"
  },
  {
    "number": "12134",
    "name": "MANGALORE - MUMBAI CST Exp",
    "sourceCode": "MAJN",
    "source": "Mangalore Jn",
    "destCode": "CSTM",
    "dest": "Mumbai Cst"
  },
  {
    "number": "12135",
    "name": "Pune -Nagpur SuperFast Express",
    "sourceCode": "PUNE",
    "source": "Pune Jn",
    "destCode": "NGP",
    "dest": "Nagpur"
  },
  {
    "number": "12136",
    "name": "Nagpur Pune Express",
    "sourceCode": "NGP",
    "source": "Nagpur",
    "destCode": "PUNE",
    "dest": "Pune Jn"
  },
  {
    "number": "12137",
    "name": "Punjab Mail",
    "sourceCode": "CSTM",
    "source": "Mumbai Cst",
    "destCode": "FZR",
    "dest": "Firozpur Cant"
  },
  {
    "number": "12138",
    "name": "Punjab Mail",
    "sourceCode": "FZR",
    "source": "Firozpur Cant",
    "destCode": "CSTM",
    "dest": "Mumbai Cst"
  },
  {
    "number": "12139",
    "name": "Sewagram SF Express",
    "sourceCode": "MAS",
    "source": "Chennai Central",
    "destCode": "NGP",
    "dest": "Nagpur"
  },
  {
    "number": "12140",
    "name": "Sewagram SF Express",
    "sourceCode": "NGP",
    "source": "Nagpur",
    "destCode": "MAS",
    "dest": "Chennai Central"
  },
  {
    "number": "12143",
    "name": "LTT Sultanpur Superfast Weekly Express",
    "sourceCode": "LTT",
    "source": "Lokmanya Tilak Term",
    "destCode": "SLN",
    "dest": "Sultanpur"
  },
  {
    "number": "12144",
    "name": "Sultanpur-LTT Weekly SF Express",
    "sourceCode": "SLN",
    "source": "Sultanpur",
    "destCode": "LTT",
    "dest": "Lokmanya Tilak Term"
  },
  {
    "number": "12145",
    "name": "MUMBAI LTT - PURI SF Exp",
    "sourceCode": "LTT",
    "source": "Lokmanya Tilak Term",
    "destCode": "BBS",
    "dest": "Bhubaneswar"
  },
  {
    "number": "12146",
    "name": "PURI - MUMBAI LTT SF Exp",
    "sourceCode": "BBS",
    "source": "Bhubaneswar",
    "destCode": "LTT",
    "dest": "Lokmanya Tilak Term"
  },
  {
    "number": "12147",
    "name": "Kolhapur-Nizamuddin Express",
    "sourceCode": "KOP",
    "source": "C Shahu M Raj Kolhapur Term",
    "destCode": "NZM",
    "dest": "Delhi H Nizamuddin"
  },
  {
    "number": "12148",
    "name": "Nizamuddin-Kolhapur Express",
    "sourceCode": "NZM",
    "source": "Delhi H Nizamuddin",
    "destCode": "KOP",
    "dest": "C Shahu M Raj Kolhapur Term"
  },
  {
    "number": "12151",
    "name": "MUMBAI LTT - HOWRAH Samarsata SF Exp",
    "sourceCode": "LTT",
    "source": "Lokmanya Tilak Term",
    "destCode": "HWH",
    "dest": "Howrah Jn"
  },
  {
    "number": "12152",
    "name": "HOWRAH - MUMBAI LTT Samarsata SF Exp",
    "sourceCode": "HWH",
    "source": "Howrah Jn",
    "destCode": "LTT",
    "dest": "Lokmanya Tilak Term"
  },
  {
    "number": "12153",
    "name": "Lokmanya Tilak (T) Habibganj Express",
    "sourceCode": "LTT",
    "source": "Lokmanya Tilak Term",
    "destCode": "HBJ",
    "dest": "Habibganj"
  },
  {
    "number": "12154",
    "name": "Habibganj LTT Superfast Express",
    "sourceCode": "HBJ",
    "source": "Habibganj",
    "destCode": "LTT",
    "dest": "Lokmanya Tilak Term"
  },
  {
    "number": "12155",
    "name": "Shaan-e-Bhopal Express",
    "sourceCode": "HBJ",
    "source": "Habibganj",
    "destCode": "NZM",
    "dest": "Delhi H Nizamuddin"
  },
  {
    "number": "12156",
    "name": "Shaan E Bhopal SF Express",
    "sourceCode": "NZM",
    "source": "Delhi H Nizamuddin",
    "destCode": "HBJ",
    "dest": "Habibganj"
  },
  {
    "number": "12157",
    "name": "Hutatma Express",
    "sourceCode": "PUNE",
    "source": "Pune Jn",
    "destCode": "SUR",
    "dest": "Solapur Jn"
  },
  {
    "number": "12158",
    "name": "Hutatma Express",
    "sourceCode": "SUR",
    "source": "Solapur Jn",
    "destCode": "PUNE",
    "dest": "Pune Jn"
  },
  {
    "number": "12159",
    "name": "Amravati -Jabalpur Express",
    "sourceCode": "AMI",
    "source": "Amravati",
    "destCode": "JBP",
    "dest": "Jabalpur"
  },
  {
    "number": "12160",
    "name": "Jabalpur - Amravati Express",
    "sourceCode": "JBP",
    "source": "Jabalpur",
    "destCode": "AMI",
    "dest": "Amravati"
  },
  {
    "number": "12161",
    "name": "Lashkar Superfast Express",
    "sourceCode": "LTT",
    "source": "Lokmanya Tilak Term",
    "destCode": "AGC",
    "dest": "Agra Cantt"
  },
  {
    "number": "12162",
    "name": "Lashkar Express",
    "sourceCode": "AGC",
    "source": "Agra Cantt",
    "destCode": "LTT",
    "dest": "Lokmanya Tilak Term"
  },
  {
    "number": "12163",
    "name": "DADAR - CHENNAI EGMORE SF Exp",
    "sourceCode": "DR",
    "source": "Mumbai Dadar Central",
    "destCode": "MS",
    "dest": "Chennai Egmore"
  },
  {
    "number": "12164",
    "name": "DADAR - CHENNAI EGMORE SF Exp",
    "sourceCode": "MS",
    "source": "Chennai Egmore",
    "destCode": "DR",
    "dest": "Mumbai Dadar Central"
  },
  {
    "number": "12165",
    "name": "MUMBAI LTT - VARANASI Ratnagiri Exp",
    "sourceCode": "LTT",
    "source": "Lokmanya Tilak Term",
    "destCode": "BSB",
    "dest": "Varanasi Jn"
  },
  {
    "number": "12166",
    "name": "VARANASI - MUMBAI LTT Ratnagiri SF Exp",
    "sourceCode": "BSB",
    "source": "Varanasi Jn",
    "destCode": "LTT",
    "dest": "Lokmanya Tilak Term"
  },
  {
    "number": "12169",
    "name": "Pune Solapur InterCity Express",
    "sourceCode": "PUNE",
    "source": "Pune Jn",
    "destCode": "SUR",
    "dest": "Solapur Jn"
  },
  {
    "number": "12170",
    "name": "Solapur Pune Intercity Express",
    "sourceCode": "SUR",
    "source": "Solapur Jn",
    "destCode": "PUNE",
    "dest": "Pune Jn"
  },
  {
    "number": "12171",
    "name": "Mumbai LTT -Haridwar AC Express",
    "sourceCode": "LTT",
    "source": "Lokmanya Tilak Term",
    "destCode": "HW",
    "dest": "Haridwar Jn"
  },
  {
    "number": "12172",
    "name": "Haridwar-Mumbai LTT AC Express",
    "sourceCode": "HW",
    "source": "Haridwar Jn",
    "destCode": "LTT",
    "dest": "Lokmanya Tilak Term"
  },
  {
    "number": "12173",
    "name": "Udyog Nagri Express",
    "sourceCode": "LTT",
    "source": "Lokmanya Tilak Term",
    "destCode": "PBH",
    "dest": "Partapgarh Jn"
  },
  {
    "number": "12174",
    "name": "Udyog Nagri Express",
    "sourceCode": "PBH",
    "source": "Partapgarh Jn",
    "destCode": "LTT",
    "dest": "Lokmanya Tilak Term"
  },
  {
    "number": "12175",
    "name": "Chambal Express",
    "sourceCode": "HWH",
    "source": "Howrah Jn",
    "destCode": "GWL",
    "dest": "Gwalior Jn"
  },
  {
    "number": "12176",
    "name": "Chambal Express",
    "sourceCode": "GWL",
    "source": "Gwalior Jn",
    "destCode": "HWH",
    "dest": "Howrah Jn"
  },
  {
    "number": "12177",
    "name": "Chambal Express",
    "sourceCode": "HWH",
    "source": "Howrah Jn",
    "destCode": "MTJ",
    "dest": "Mathura Jn"
  },
  {
    "number": "12178",
    "name": "Chambal Express",
    "sourceCode": "MTJ",
    "source": "Mathura Jn",
    "destCode": "HWH",
    "dest": "Howrah Jn"
  },
  {
    "number": "12179",
    "name": "Lucknow Agra Intercity SF Express",
    "sourceCode": "LJN",
    "source": "Lucknow Jn",
    "destCode": "AGC",
    "dest": "Agra Cantt"
  },
  {
    "number": "12180",
    "name": "Agra Lucknow Intercity SF Express",
    "sourceCode": "AGC",
    "source": "Agra Cantt",
    "destCode": "LJN",
    "dest": "Lucknow Jn"
  },
  {
    "number": "12181",
    "name": "JABALPUR - AJMER Dayodaya Exp",
    "sourceCode": "JBP",
    "source": "Jabalpur",
    "destCode": "JP",
    "dest": "Jaipur"
  },
  {
    "number": "12182",
    "name": "AJMER - JABALPUR Dayodaya Express",
    "sourceCode": "JP",
    "source": "Jaipur",
    "destCode": "JBP",
    "dest": "Jabalpur"
  },
  {
    "number": "12183",
    "name": "Bhopal Partapgarh Express",
    "sourceCode": "BPL",
    "source": "Bhopal Jn",
    "destCode": "PBH",
    "dest": "Partapgarh Jn"
  },
  {
    "number": "12184",
    "name": "Pratapgarh-Bhopal Express",
    "sourceCode": "PBH",
    "source": "Partapgarh Jn",
    "destCode": "BPL",
    "dest": "Bhopal Jn"
  },
  {
    "number": "12185",
    "name": "BHOPAL HABIBGANJ - REWA Rewanchal Exp",
    "sourceCode": "HBJ",
    "source": "Habibganj",
    "destCode": "REWA",
    "dest": "Rewa"
  },
  {
    "number": "12186",
    "name": "REWA - BHOPAL HABIBGANJ Rewanchal Exp",
    "sourceCode": "REWA",
    "source": "Rewa",
    "destCode": "HBJ",
    "dest": "Habibganj"
  },
  {
    "number": "12187",
    "name": "Jabalpur-CST Garib Rath Express",
    "sourceCode": "JBP",
    "source": "Jabalpur",
    "destCode": "CSTM",
    "dest": "Mumbai Cst"
  },
  {
    "number": "12188",
    "name": "Mumbai-Jabalpur Garib Rath Express",
    "sourceCode": "CSTM",
    "source": "Mumbai Cst",
    "destCode": "JBP",
    "dest": "Jabalpur"
  },
  {
    "number": "12189",
    "name": "JABALPUR - DELHI H NIZAMUDDIN Mahakoshal SF Exp",
    "sourceCode": "JBP",
    "source": "Jabalpur",
    "destCode": "NZM",
    "dest": "Delhi H Nizamuddin"
  },
  {
    "number": "12190",
    "name": "DELHI H NIZAMUDDIN - JABALPUR Mahakoshal SF Exp",
    "sourceCode": "NZM",
    "source": "Delhi H Nizamuddin",
    "destCode": "JBP",
    "dest": "Jabalpur"
  },
  {
    "number": "12191",
    "name": "Shridham Express",
    "sourceCode": "NDLS",
    "source": "New Delhi",
    "destCode": "JBP",
    "dest": "Jabalpur"
  },
  {
    "number": "12192",
    "name": "Jabalpur-New Delhi Superfast Express",
    "sourceCode": "JBP",
    "source": "Jabalpur",
    "destCode": "NDLS",
    "dest": "New Delhi"
  },
  {
    "number": "12193",
    "name": "Yesvantpur Jn Express",
    "sourceCode": "JBP",
    "source": "Jabalpur",
    "destCode": "YPR",
    "dest": "Yesvantpur"
  },
  {
    "number": "12194",
    "name": "Yesvantpur Jabalpur SF",
    "sourceCode": "YPR",
    "source": "Yesvantpur",
    "destCode": "JBP",
    "dest": "Jabalpur"
  },
  {
    "number": "12195",
    "name": "Agra Fort - Ajmer Express",
    "sourceCode": "AF",
    "source": "Agra Fort",
    "destCode": "AII",
    "dest": "Ajmer Jn"
  },
  {
    "number": "12196",
    "name": "Ajmer-Agra Fort Express",
    "sourceCode": "AII",
    "source": "Ajmer Jn",
    "destCode": "AF",
    "dest": "Agra Fort"
  },
  {
    "number": "12197",
    "name": "Bhopal Gwalior InterCity Express",
    "sourceCode": "BPL",
    "source": "Bhopal Jn",
    "destCode": "GWL",
    "dest": "Gwalior Jn"
  },
  {
    "number": "12198",
    "name": "Gwalior Bhopal InterCity Express",
    "sourceCode": "GWL",
    "source": "Gwalior Jn",
    "destCode": "BPL",
    "dest": "Bhopal Jn"
  },
  {
    "number": "12201",
    "name": "MUMBAI LTT - KOCHUVELI Garib Rath Exp",
    "sourceCode": "LTT",
    "source": "Lokmanya Tilak Term",
    "destCode": "KCVL",
    "dest": "Kochuveli"
  },
  {
    "number": "12202",
    "name": "KOCHUVELI - MUMBAI LTT Garib Rath Exp",
    "sourceCode": "KCVL",
    "source": "Kochuveli",
    "destCode": "LTT",
    "dest": "Lokmanya Tilak Term"
  },
  {
    "number": "12203",
    "name": "Saharsa Amritsar Garib Rath",
    "sourceCode": "SHC",
    "source": "Saharsa Jn",
    "destCode": "ASR",
    "dest": "Amritsar Jn"
  },
  {
    "number": "12204",
    "name": "Amritsar Saharsa Garib Rath",
    "sourceCode": "ASR",
    "source": "Amritsar Jn",
    "destCode": "SHC",
    "dest": "Saharsa Jn"
  },
  {
    "number": "12205",
    "name": "New Delhi-Dehradun AC Express",
    "sourceCode": "NDLS",
    "source": "New Delhi",
    "destCode": "DDN",
    "dest": "Dehradun"
  },
  {
    "number": "12206",
    "name": "Dehradun-NewDelhi AC Express",
    "sourceCode": "DDN",
    "source": "Dehradun",
    "destCode": "NDLS",
    "dest": "New Delhi"
  },
  {
    "number": "12207",
    "name": "Kathgodam-Jammu Garib Rath Express",
    "sourceCode": "KGM",
    "source": "Kathgodam",
    "destCode": "JAT",
    "dest": "Jammu Tawi"
  },
  {
    "number": "12208",
    "name": "Jammu-Kathgodam Garib Rath Express",
    "sourceCode": "JAT",
    "source": "Jammu Tawi",
    "destCode": "KGM",
    "dest": "Kathgodam"
  },
  {
    "number": "12209",
    "name": "Kanpur-Kathgodam Garib Rath",
    "sourceCode": "CNB",
    "source": "Kanpur Central",
    "destCode": "KGM",
    "dest": "Kathgodam"
  },
  {
    "number": "12210",
    "name": "Kathgodam-Kanpur Garib Rath",
    "sourceCode": "KGM",
    "source": "Kathgodam",
    "destCode": "CNB",
    "dest": "Kanpur Central"
  },
  {
    "number": "12211",
    "name": "Muzaffarpur-Anand Vihar(T) Garib Rath Exp.",
    "sourceCode": "MFP",
    "source": "Muzaffarpur Jn",
    "destCode": "ANVT",
    "dest": "Anand Vihar Trm"
  },
  {
    "number": "12212",
    "name": "Anand Vihar T.- Muzaffarpur Garib Rath",
    "sourceCode": "ANVT",
    "source": "Anand Vihar Trm",
    "destCode": "MFP",
    "dest": "Muzaffarpur Jn"
  },
  {
    "number": "12213",
    "name": "Yeswantpur-Delhi Sarai Rohilla AC Duronto Express",
    "sourceCode": "YPR",
    "source": "Yesvantpur Jn",
    "destCode": "DEE",
    "dest": "Delhi Sarai Rohilla"
  },
  {
    "number": "12214",
    "name": "Delhi Sarai Rohilla-Yesvantpur AC Duronto Express",
    "sourceCode": "DEE",
    "source": "Delhi Sarai Rohilla",
    "destCode": "YPR",
    "dest": "Yesvantpur Jn"
  },
  {
    "number": "12215",
    "name": "Delhi Sarai Rohilla-Mumbai BandraT Garib Rath",
    "sourceCode": "DEE",
    "source": "Delhi Sarai Rohilla",
    "destCode": "BDTS",
    "dest": "Mumbai Bandra Terminus"
  },
  {
    "number": "12216",
    "name": "Mumbai Bandra T. - Delhi Sarai Rohilla Garib Rath",
    "sourceCode": "BDTS",
    "source": "Mumbai Bandra Terminus",
    "destCode": "DEE",
    "dest": "Delhi Sarai Rohilla"
  },
  {
    "number": "12217",
    "name": "KOCHUVELI - CHANDIGARH Kerala Sampark Kranti Exp",
    "sourceCode": "KCVL",
    "source": "Kochuveli",
    "destCode": "CDG",
    "dest": "Chandigarh"
  },
  {
    "number": "12218",
    "name": "CHANDIGARH - KOCHUVELI Kerala Sampark Kranti Exp",
    "sourceCode": "CDG",
    "source": "Chandigarh",
    "destCode": "KCVL",
    "dest": "Kochuveli"
  },
  {
    "number": "12219",
    "name": "Lokmanya Tilak (T)-Secunderabad AC Duronto Express",
    "sourceCode": "LTT",
    "source": "Lokmanya Tilak Term",
    "destCode": "SC",
    "dest": "Secunderabad Jn"
  },
  {
    "number": "12220",
    "name": "Secunderabad-Mumbai LTT AC Duronto Express",
    "sourceCode": "SC",
    "source": "Secunderabad Jn",
    "destCode": "LTT",
    "dest": "Lokmanya Tilak Term"
  },
  {
    "number": "12221",
    "name": "PUNE - HOWRAH AC Duronto Exp",
    "sourceCode": "PUNE",
    "source": "Pune Jn",
    "destCode": "HWH",
    "dest": "Howrah Jn"
  },
  {
    "number": "12222",
    "name": "HOWRAH - PUNE AC Duronto Exp",
    "sourceCode": "HWH",
    "source": "Howrah Jn",
    "destCode": "PUNE",
    "dest": "Pune Jn"
  },
  {
    "number": "12223",
    "name": "MUM LTT - ERNAKULAM AC Duronto",
    "sourceCode": "LTT",
    "source": "Lokmanya Tilak Term",
    "destCode": "ERS",
    "dest": "Ernakulam Jn"
  },
  {
    "number": "12224",
    "name": "ERNAKULAM - MUM LTT AC Duronto",
    "sourceCode": "ERS",
    "source": "Ernakulam Jn",
    "destCode": "LTT",
    "dest": "Lokmanya Tilak Term"
  },
  {
    "number": "12225",
    "name": "Kaifiat Express",
    "sourceCode": "AMH",
    "source": "Azamgarh",
    "destCode": "DLI",
    "dest": "Old Delhi"
  },
  {
    "number": "12226",
    "name": "Kaifiat Express",
    "sourceCode": "DLI",
    "source": "Old Delhi",
    "destCode": "AMH",
    "dest": "Azamgarh"
  },
  {
    "number": "12227",
    "name": "Mumbai Central- Indore Duronto Express",
    "sourceCode": "BCT",
    "source": "Mumbai Central",
    "destCode": "INDB",
    "dest": "Indore Jn Bg"
  },
  {
    "number": "12228",
    "name": "Indore- Mumbai Central Duronto Express",
    "sourceCode": "INDB",
    "source": "Indore Jn Bg",
    "destCode": "BCT",
    "dest": "Mumbai Central"
  },
  {
    "number": "12229",
    "name": "Lucknow Mail",
    "sourceCode": "LKO",
    "source": "Lucknow",
    "destCode": "NDLS",
    "dest": "New Delhi"
  },
  {
    "number": "12230",
    "name": "Lucknow Mail",
    "sourceCode": "NDLS",
    "source": "New Delhi",
    "destCode": "LKO",
    "dest": "Lucknow"
  },
  {
    "number": "12231",
    "name": "Lucknow-Chandigarh Express",
    "sourceCode": "LKO",
    "source": "Lucknow",
    "destCode": "CDG",
    "dest": "Chandigarh"
  },
  {
    "number": "12232",
    "name": "Chandigarh - Lucknow Sadhbhavna SF Express",
    "sourceCode": "CDG",
    "source": "Chandigarh",
    "destCode": "LKO",
    "dest": "Lucknow"
  },
  {
    "number": "12233",
    "name": "Lucknow New Delhi AC Express",
    "sourceCode": "LKO",
    "source": "Lucknow",
    "destCode": "NDLS",
    "dest": "New Delhi"
  },
  {
    "number": "12234",
    "name": "NewDelhi-Lucknow AC Express",
    "sourceCode": "NDLS",
    "source": "New Delhi",
    "destCode": "LKO",
    "dest": "Lucknow"
  },
  {
    "number": "12235",
    "name": "DIBRUGARH - NEW DELHI Rajdhani Exp",
    "sourceCode": "DBRG",
    "source": "Dibrugarh",
    "destCode": "NDLS",
    "dest": "New Delhi"
  },
  {
    "number": "12236",
    "name": "NEW DELHI - DIBRUGARH Rajdhani Exp",
    "sourceCode": "NDLS",
    "source": "New Delhi",
    "destCode": "DBRG",
    "dest": "Dibrugarh"
  },
  {
    "number": "12237",
    "name": "Varanasi-Jammu Tawi SF Express",
    "sourceCode": "BSB",
    "source": "Varanasi Jn",
    "destCode": "JAT",
    "dest": "Jammu Tawi"
  },
  {
    "number": "12238",
    "name": "Jammu-Varanasi SF Express",
    "sourceCode": "JAT",
    "source": "Jammu Tawi",
    "destCode": "BSB",
    "dest": "Varanasi Jn"
  },
  {
    "number": "12239",
    "name": "Mumbai Central Jaipur AC Duronto Express",
    "sourceCode": "BCT",
    "source": "Mumbai Central",
    "destCode": "JP",
    "dest": "Jaipur"
  },
  {
    "number": "12240",
    "name": "Jaipur-Mumbai Central AC Duronto Express",
    "sourceCode": "JP",
    "source": "Jaipur",
    "destCode": "BCT",
    "dest": "Mumbai Central"
  },
  {
    "number": "12241",
    "name": "Chandigarh-Amritsar Duronto Express",
    "sourceCode": "CDG",
    "source": "Chandigarh",
    "destCode": "ASR",
    "dest": "Amritsar Jn"
  },
  {
    "number": "12242",
    "name": "Amritsar-Chandigarh Duronto Express",
    "sourceCode": "ASR",
    "source": "Amritsar Jn",
    "destCode": "CDG",
    "dest": "Chandigarh"
  },
  {
    "number": "12243",
    "name": "Chennai Central-Coimbatore AC Duronto Express",
    "sourceCode": "MAS",
    "source": "Chennai Central",
    "destCode": "CBE",
    "dest": "Coimbatore Jn"
  },
  {
    "number": "12244",
    "name": "Coimbatore-Chennai Central AC Duronto Express",
    "sourceCode": "CBE",
    "source": "Coimbatore Jn",
    "destCode": "MAS",
    "dest": "Chennai Central"
  },
  {
    "number": "12245",
    "name": "HOWRAH - YESVANTPUR AC Duronto Exp",
    "sourceCode": "HWH",
    "source": "Howrah Jn",
    "destCode": "YPR",
    "dest": "Yesvantpur Jn"
  },
  {
    "number": "12246",
    "name": "YESVANTPUR - HOWRAH AC Duronto Exp",
    "sourceCode": "YPR",
    "source": "Yesvantpur Jn",
    "destCode": "HWH",
    "dest": "Howrah Jn"
  },
  {
    "number": "12251",
    "name": "Wainganga express",
    "sourceCode": "YPR",
    "source": "Yesvantpur Jn",
    "destCode": "KRBA",
    "dest": "Korba"
  },
  {
    "number": "12252",
    "name": "Wainganga express",
    "sourceCode": "KRBA",
    "source": "Korba",
    "destCode": "YPR",
    "dest": "Yesvantpur Jn"
  },
  {
    "number": "12253",
    "name": "YESVANTPUR - BHAGALPUR Anga SF Exp",
    "sourceCode": "YPR",
    "source": "Yesvantpur Jn",
    "destCode": "BGP",
    "dest": "Bhagalpur"
  },
  {
    "number": "12254",
    "name": "BHAGALPUR - YESVANTPUR Anga SF Exp",
    "sourceCode": "BGP",
    "source": "Bhagalpur",
    "destCode": "YPR",
    "dest": "Yesvantpur Jn"
  },
  {
    "number": "12257",
    "name": "Yesvantapur Kochuveli Garib Rath Express",
    "sourceCode": "YPR",
    "source": "Yesvantpur Jn",
    "destCode": "KCVL",
    "dest": "Kochuveli"
  },
  {
    "number": "12258",
    "name": "Kochuveli-Yesvantpur Garib Rath",
    "sourceCode": "KCVL",
    "source": "Kochuveli",
    "destCode": "YPR",
    "dest": "Yesvantpur Jn"
  },
  {
    "number": "12259",
    "name": "Sealdah-New Delhi AC Duronto Express",
    "sourceCode": "SDAH",
    "source": "Kolkata Sealdah",
    "destCode": "NDLS",
    "dest": "New Delhi"
  },
  {
    "number": "12260",
    "name": "New Delhi-Sealdah AC Duronto Express",
    "sourceCode": "NDLS",
    "source": "New Delhi",
    "destCode": "SDAH",
    "dest": "Kolkata Sealdah"
  },
  {
    "number": "12261",
    "name": "MUMBAI CST - HOWRAH AC Duronto Exp",
    "sourceCode": "CSTM",
    "source": "Mumbai Cst",
    "destCode": "HWH",
    "dest": "Howrah Jn"
  },
  {
    "number": "12262",
    "name": "HOWRAH - MUMBAI CST AC Duronto Exp",
    "sourceCode": "HWH",
    "source": "Howrah Jn",
    "destCode": "CSTM",
    "dest": "Mumbai Cst"
  },
  {
    "number": "12263",
    "name": "Pune - Hazrat Nizamuddin AC Duronto Express",
    "sourceCode": "PUNE",
    "source": "Pune Jn",
    "destCode": "NZM",
    "dest": "Delhi H Nizamuddin"
  },
  {
    "number": "12264",
    "name": "Hazrat Nizamuddin-Pune AC Duronto Express",
    "sourceCode": "NZM",
    "source": "Delhi H Nizamuddin",
    "destCode": "PUNE",
    "dest": "Pune Jn"
  },
  {
    "number": "12265",
    "name": "Delhi Sarai Rohilla Jammu Tawi Duronto Express",
    "sourceCode": "DEE",
    "source": "Delhi Sarai Rohilla",
    "destCode": "JAT",
    "dest": "Jammu Tawi"
  },
  {
    "number": "12266",
    "name": "Jammu Tawi-Delhi Sarai Rohilla Duronto Express",
    "sourceCode": "JAT",
    "source": "Jammu Tawi",
    "destCode": "DEE",
    "dest": "Delhi Sarai Rohilla"
  },
  {
    "number": "12267",
    "name": "Mumbai Central-Ahmedabad AC Duronto Express",
    "sourceCode": "BCT",
    "source": "Mumbai Central",
    "destCode": "ADI",
    "dest": "Ahmedabad Jn"
  },
  {
    "number": "12268",
    "name": "Ahmedabad-Mumbai Central AC Duronto Express",
    "sourceCode": "ADI",
    "source": "Ahmedabad Jn",
    "destCode": "BCT",
    "dest": "Mumbai Central"
  },
  {
    "number": "12269",
    "name": "Chennai-Hazrat Nizamuddin Duronto Express",
    "sourceCode": "MAS",
    "source": "Chennai Central",
    "destCode": "NZM",
    "dest": "Delhi H Nizamuddin"
  },
  {
    "number": "12270",
    "name": "Hazrat Nizamuddin-Chennai Duronto",
    "sourceCode": "NZM",
    "source": "Delhi H Nizamuddin",
    "destCode": "MAS",
    "dest": "Chennai Central"
  },
  {
    "number": "12271",
    "name": "Lucknow-New Delhi AC Duronto Express",
    "sourceCode": "LKO",
    "source": "Lucknow",
    "destCode": "NDLS",
    "dest": "New Delhi"
  },
  {
    "number": "12272",
    "name": "New Delhi-Lucknow AC Duronto Express",
    "sourceCode": "NDLS",
    "source": "New Delhi",
    "destCode": "LKO",
    "dest": "Lucknow"
  },
  {
    "number": "12273",
    "name": "Howrah-New Delhi Duronto Express",
    "sourceCode": "HWH",
    "source": "Howrah Jn",
    "destCode": "NDLS",
    "dest": "New Delhi"
  },
  {
    "number": "12274",
    "name": "New Delhi-Howrah Duronto Express",
    "sourceCode": "NDLS",
    "source": "New Delhi",
    "destCode": "HWH",
    "dest": "Howrah Jn"
  },
  {
    "number": "12275",
    "name": "Allahabad-New Delhi Duronto Express",
    "sourceCode": "ALD",
    "source": "Allahabad Jn",
    "destCode": "NDLS",
    "dest": "New Delhi"
  },
  {
    "number": "12276",
    "name": "New Delhi-Allahabad Duronto Express",
    "sourceCode": "NDLS",
    "source": "New Delhi",
    "destCode": "ALD",
    "dest": "Allahabad Jn"
  },
  {
    "number": "12277",
    "name": "Howrah Puri Duronto Express",
    "sourceCode": "HWH",
    "source": "Howrah Jn",
    "destCode": "PURI",
    "dest": "Puri"
  },
  {
    "number": "12278",
    "name": "Puri-Howrah AC Duronto Express",
    "sourceCode": "PURI",
    "source": "Puri",
    "destCode": "HWH",
    "dest": "Howrah Jn"
  },
  {
    "number": "12279",
    "name": "Jhansi-H.Nizamuddin Taj Express",
    "sourceCode": "JHS",
    "source": "Jhansi Jn",
    "destCode": "NZM",
    "dest": "Delhi H Nizamuddin"
  },
  {
    "number": "12280",
    "name": "H.Nizamuddin-Jhansi Taj Express",
    "sourceCode": "NZM",
    "source": "Delhi H Nizamuddin",
    "destCode": "JHS",
    "dest": "Jhansi Jn"
  },
  {
    "number": "12281",
    "name": "Bhubaneswar-New Delhi Duronto",
    "sourceCode": "BBS",
    "source": "Bhubaneswar",
    "destCode": "NDLS",
    "dest": "New Delhi"
  },
  {
    "number": "12282",
    "name": "New Delhi-Bhubaneswar Duronto Express",
    "sourceCode": "NDLS",
    "source": "New Delhi",
    "destCode": "BBS",
    "dest": "Bhubaneswar"
  },
  {
    "number": "12283",
    "name": "ERNAKULAM - DELHI H NIZAMUDDIN Duronto Exp",
    "sourceCode": "ERS",
    "source": "Ernakulam Jn",
    "destCode": "NZM",
    "dest": "Delhi H Nizamuddin"
  },
  {
    "number": "12284",
    "name": "DELHI H NIZAMUDDIN - ERNAKULAM Duronto Exp",
    "sourceCode": "NZM",
    "source": "Delhi H Nizamuddin",
    "destCode": "ERS",
    "dest": "Ernakulam Jn"
  },
  {
    "number": "12285",
    "name": "Secunderabad- Hazrat Nizamuddin Duronto Express",
    "sourceCode": "SC",
    "source": "Secunderabad Jn",
    "destCode": "NZM",
    "dest": "Delhi H Nizamuddin"
  },
  {
    "number": "12286",
    "name": "Hazrat Nizamuddin-Secunderabad Duronto Express",
    "sourceCode": "NZM",
    "source": "Delhi H Nizamuddin",
    "destCode": "SC",
    "dest": "Secunderabad Jn"
  },
  {
    "number": "12287",
    "name": "Kochuveli-Dehradun Weekly Express",
    "sourceCode": "KCVL",
    "source": "Kochuveli",
    "destCode": "DDN",
    "dest": "Dehradun"
  },
  {
    "number": "12288",
    "name": "DEHRADUN - KOCHUVELI SF Express",
    "sourceCode": "DDN",
    "source": "Dehradun",
    "destCode": "KCVL",
    "dest": "Kochuveli"
  },
  {
    "number": "12289",
    "name": "Mumbai CSTM-Nagpur Duronto Express",
    "sourceCode": "CSTM",
    "source": "Mumbai Cst",
    "destCode": "NGP",
    "dest": "Nagpur"
  },
  {
    "number": "12290",
    "name": "Nagpur-Mumbai CST Duronto Express",
    "sourceCode": "NGP",
    "source": "Nagpur",
    "destCode": "CSTM",
    "dest": "Mumbai Cst"
  },
  {
    "number": "12291",
    "name": "YESVANTPUR - CHENNAI SF Exp",
    "sourceCode": "YPR",
    "source": "Yesvantpur Jn",
    "destCode": "MAS",
    "dest": "Chennai Central"
  },
  {
    "number": "12292",
    "name": "CHENNAI - YESVANTPUR SF Exp",
    "sourceCode": "MAS",
    "source": "Chennai Central",
    "destCode": "YPR",
    "dest": "Yesvantpur Jn"
  },
  {
    "number": "12295",
    "name": "Sanghamitra SF Express",
    "sourceCode": "SBC",
    "source": "Bangalore City",
    "destCode": "DNR",
    "dest": "Danapur"
  },
  {
    "number": "12296",
    "name": "Sanghamitra SF Express",
    "sourceCode": "DNR",
    "source": "Danapur",
    "destCode": "SBC",
    "dest": "Bangalore City"
  },
  {
    "number": "12301",
    "name": "Howrah-New Delhi Rajdhani Express",
    "sourceCode": "HWH",
    "source": "Howrah Jn",
    "destCode": "NDLS",
    "dest": "New Delhi"
  },
  {
    "number": "12302",
    "name": "New Delhi-Howrah Rajdhani Express",
    "sourceCode": "NDLS",
    "source": "New Delhi",
    "destCode": "HWH",
    "dest": "Howrah Jn"
  },
  {
    "number": "12303",
    "name": "Poorva Express",
    "sourceCode": "HWH",
    "source": "Howrah Jn",
    "destCode": "NDLS",
    "dest": "New Delhi"
  },
  {
    "number": "12304",
    "name": "Poorva Express",
    "sourceCode": "NDLS",
    "source": "New Delhi",
    "destCode": "HWH",
    "dest": "Howrah Jn"
  },
  {
    "number": "12305",
    "name": "Howrah-New Delhi Rajdhani Express",
    "sourceCode": "HWH",
    "source": "Howrah Jn",
    "destCode": "NDLS",
    "dest": "New Delhi"
  },
  {
    "number": "12306",
    "name": "New Delhi-Howrah Rajdhani Express",
    "sourceCode": "NDLS",
    "source": "New Delhi",
    "destCode": "HWH",
    "dest": "Howrah Jn"
  },
  {
    "number": "12307",
    "name": "Howrah-Jodhpur SF Express",
    "sourceCode": "HWH",
    "source": "Howrah Jn",
    "destCode": "JU",
    "dest": "Jodhpur Jn"
  },
  {
    "number": "12308",
    "name": "Jodhpur-Howrah SF Express",
    "sourceCode": "JU",
    "source": "Jodhpur Jn",
    "destCode": "HWH",
    "dest": "Howrah Jn"
  },
  {
    "number": "12309",
    "name": "Rajendra Nagar-New Delhi Rajdhani Express",
    "sourceCode": "RJPB",
    "source": "Rajendra Nagar Bihar",
    "destCode": "NDLS",
    "dest": "New Delhi"
  },
  {
    "number": "12310",
    "name": "New Delhi Rajendra Nagar Rajdhani Express",
    "sourceCode": "NDLS",
    "source": "New Delhi",
    "destCode": "RJPB",
    "dest": "Rajendra Nagar Bihar"
  },
  {
    "number": "12311",
    "name": "Kalka Mail",
    "sourceCode": "HWH",
    "source": "Howrah Jn",
    "destCode": "KLK",
    "dest": "Kalka"
  },
  {
    "number": "12312",
    "name": "Kalka Mail",
    "sourceCode": "KLK",
    "source": "Kalka",
    "destCode": "HWH",
    "dest": "Howrah Jn"
  },
  {
    "number": "12313",
    "name": "KOL SEALDAH - NEW DELHI Rajdhani Exp",
    "sourceCode": "SDAH",
    "source": "Kolkata Sealdah",
    "destCode": "NDLS",
    "dest": "New Delhi"
  },
  {
    "number": "12314",
    "name": "NEW DELHI - KOL SEALDAH Rajdhani Exp",
    "sourceCode": "NDLS",
    "source": "New Delhi",
    "destCode": "SDAH",
    "dest": "Kolkata Sealdah"
  },
  {
    "number": "12315",
    "name": "Ananya Express",
    "sourceCode": "SDAH",
    "source": "Kolkata Sealdah",
    "destCode": "UDZ",
    "dest": "Udaipur City"
  },
  {
    "number": "12316",
    "name": "Ananya Express",
    "sourceCode": "UDZ",
    "source": "Udaipur City",
    "destCode": "SDAH",
    "dest": "Kolkata Sealdah"
  },
  {
    "number": "12317",
    "name": "KOLKATA SEALDAH - AMRITSAR Akal Takht Exp",
    "sourceCode": "SDAH",
    "source": "Kolkata Sealdah",
    "destCode": "ASR",
    "dest": "Amritsar Jn"
  },
  {
    "number": "12318",
    "name": "AKAL TAKHT Express",
    "sourceCode": "ASR",
    "source": "Amritsar Jn",
    "destCode": "SDAH",
    "dest": "Kolkata Sealdah"
  },
  {
    "number": "12319",
    "name": "KOLKATA CHITPUR - AGRA CANTT SF Exp",
    "sourceCode": "KOAA",
    "source": "Kolkata Chitpur",
    "destCode": "AGC",
    "dest": "Agra Cantt"
  },
  {
    "number": "12320",
    "name": "AGRA CANTT - KOLKATA CHITPUR SF Exp",
    "sourceCode": "AGC",
    "source": "Agra Cantt",
    "destCode": "KOAA",
    "dest": "Kolkata Chitpur"
  },
  {
    "number": "12321",
    "name": "HOWRAH - MUMBAI CST Mail (via Allahabad)",
    "sourceCode": "HWH",
    "source": "Howrah Jn",
    "destCode": "CSTM",
    "dest": "Mumbai Cst"
  },
  {
    "number": "12322",
    "name": "MUMBAI CST - HOWRAH Mail (via Allahabad)",
    "sourceCode": "CSTM",
    "source": "Mumbai Cst",
    "destCode": "HWH",
    "dest": "Howrah Jn"
  },
  {
    "number": "12323",
    "name": "Howrah-NewDelhi SF Express",
    "sourceCode": "HWH",
    "source": "Howrah Jn",
    "destCode": "NDLS",
    "dest": "New Delhi"
  },
  {
    "number": "12324",
    "name": "New Delhi-Howrah SF Express",
    "sourceCode": "NDLS",
    "source": "New Delhi",
    "destCode": "HWH",
    "dest": "Howrah Jn"
  },
  {
    "number": "12325",
    "name": "KOLKATA CHITPUR - NANGAL DAM Gurumukhi Exp",
    "sourceCode": "KOAA",
    "source": "Kolkata Chitpur",
    "destCode": "NLDM",
    "dest": "Nangal Dam"
  },
  {
    "number": "12326",
    "name": "NANGAL DAM - KOLKATA CHITPUR Gurumukhi Exp",
    "sourceCode": "NLDM",
    "source": "Nangal Dam",
    "destCode": "KOAA",
    "dest": "Kolkata Chitpur"
  },
  {
    "number": "12327",
    "name": "Upasana Express",
    "sourceCode": "HWH",
    "source": "Howrah Jn",
    "destCode": "DDN",
    "dest": "Dehradun"
  },
  {
    "number": "12328",
    "name": "Upasana Express",
    "sourceCode": "DDN",
    "source": "Dehradun",
    "destCode": "HWH",
    "dest": "Howrah Jn"
  },
  {
    "number": "12329",
    "name": "West Bengal Sampark Kranti",
    "sourceCode": "SDAH",
    "source": "Kolkata Sealdah",
    "destCode": "DLI",
    "dest": "Old Delhi"
  },
  {
    "number": "12330",
    "name": "West Bengal Sampark Kranti Express",
    "sourceCode": "DLI",
    "source": "Old Delhi",
    "destCode": "SDAH",
    "dest": "Kolkata Sealdah"
  },
  {
    "number": "12331",
    "name": "Himgiri Express",
    "sourceCode": "HWH",
    "source": "Howrah Jn",
    "destCode": "JAT",
    "dest": "Jammu Tawi"
  },
  {
    "number": "12332",
    "name": "Himgiri Express",
    "sourceCode": "JAT",
    "source": "Jammu Tawi",
    "destCode": "HWH",
    "dest": "Howrah Jn"
  },
  {
    "number": "12333",
    "name": "Vibhuti Express",
    "sourceCode": "HWH",
    "source": "Howrah Jn",
    "destCode": "ALY",
    "dest": "Allahabad City"
  },
  {
    "number": "12334",
    "name": "Vibhuti Express",
    "sourceCode": "ALY",
    "source": "Allahabad City",
    "destCode": "HWH",
    "dest": "Howrah Jn"
  },
  {
    "number": "12335",
    "name": "BHAGALPUR - MUMBAI LTT SF Exp",
    "sourceCode": "BGP",
    "source": "Bhagalpur",
    "destCode": "LTT",
    "dest": "Lokmanya Tilak Term"
  },
  {
    "number": "12336",
    "name": "MUMBAI LTT - BHAGALPUR SF Exp",
    "sourceCode": "LTT",
    "source": "Lokmanya Tilak Term",
    "destCode": "BGP",
    "dest": "Bhagalpur"
  },
  {
    "number": "12337",
    "name": "Shantiniketan Express",
    "sourceCode": "HWH",
    "source": "Howrah Jn",
    "destCode": "BHP",
    "dest": "Bolpur Shantiniketan"
  },
  {
    "number": "12338",
    "name": "Shantiniketan Express",
    "sourceCode": "BHP",
    "source": "Bolpur Shantiniketan",
    "destCode": "HWH",
    "dest": "Howrah Jn"
  },
  {
    "number": "12339",
    "name": "Coalfield Express",
    "sourceCode": "HWH",
    "source": "Howrah Jn",
    "destCode": "DHN",
    "dest": "Dhanbad Jn"
  },
  {
    "number": "12340",
    "name": "Coalfield Express",
    "sourceCode": "DHN",
    "source": "Dhanbad Jn",
    "destCode": "HWH",
    "dest": "Howrah Jn"
  },
  {
    "number": "12341",
    "name": "Agniveena Express",
    "sourceCode": "HWH",
    "source": "Howrah Jn",
    "destCode": "ASN",
    "dest": "Asansol Jn"
  },
  {
    "number": "12342",
    "name": "Agniveena Express",
    "sourceCode": "ASN",
    "source": "Asansol Jn",
    "destCode": "HWH",
    "dest": "Howrah Jn"
  },
  {
    "number": "12343",
    "name": "Darjeeling Mail",
    "sourceCode": "SDAH",
    "source": "Kolkata Sealdah",
    "destCode": "NJP",
    "dest": "New Jalpaiguri"
  },
  {
    "number": "12344",
    "name": "Darjeeling Mail",
    "sourceCode": "HDB",
    "source": "Haldibari",
    "destCode": "SDAH",
    "dest": "Kolkata Sealdah"
  },
  {
    "number": "12345",
    "name": "HOWRAH - GUWAHATI Saraighat SF Exp",
    "sourceCode": "HWH",
    "source": "Howrah Jn",
    "destCode": "GHY",
    "dest": "Guwahati"
  },
  {
    "number": "12346",
    "name": "GUWAHATI - HOWRAH Saraighat SF Exp",
    "sourceCode": "GHY",
    "source": "Guwahati",
    "destCode": "HWH",
    "dest": "Howrah Jn"
  },
  {
    "number": "12347",
    "name": "Howrah-Rampur Hat SF Express",
    "sourceCode": "HWH",
    "source": "Howrah Jn",
    "destCode": "RPH",
    "dest": "Rampur Hat"
  },
  {
    "number": "12348",
    "name": "Rampur Hat-Howrah SF Express",
    "sourceCode": "RPH",
    "source": "Rampur Hat",
    "destCode": "HWH",
    "dest": "Howrah Jn"
  },
  {
    "number": "12349",
    "name": "Bhagalpur-NewDelhi Weekly SF Express",
    "sourceCode": "BGP",
    "source": "Bhagalpur",
    "destCode": "NDLS",
    "dest": "New Delhi"
  },
  {
    "number": "12350",
    "name": "NewDelhi-Bhagalpur Weekly SF Express",
    "sourceCode": "NDLS",
    "source": "New Delhi",
    "destCode": "BGP",
    "dest": "Bhagalpur"
  },
  {
    "number": "12351",
    "name": "Howrah- Danapur Express",
    "sourceCode": "HWH",
    "source": "Howrah Jn",
    "destCode": "DNR",
    "dest": "Danapur"
  },
  {
    "number": "12352",
    "name": "Danapur- Howrah Express",
    "sourceCode": "DNR",
    "source": "Danapur",
    "destCode": "HWH",
    "dest": "Howrah Jn"
  },
  {
    "number": "12355",
    "name": "Archana Express",
    "sourceCode": "RJPB",
    "source": "Rajendra Nagar Bihar",
    "destCode": "JAT",
    "dest": "Jammu Tawi"
  },
  {
    "number": "12356",
    "name": "Archana Express",
    "sourceCode": "JAT",
    "source": "Jammu Tawi",
    "destCode": "RJPB",
    "dest": "Rajendra Nagar Bihar"
  },
  {
    "number": "12357",
    "name": "KOLKATA CHITPUR - AMRITSAR Durgiana SF Exp",
    "sourceCode": "KOAA",
    "source": "Kolkata Chitpur",
    "destCode": "ASR",
    "dest": "Amritsar Jn"
  },
  {
    "number": "12358",
    "name": "AMRITSAR - KOLKATA CHITPUR Durgiana SF Exp",
    "sourceCode": "ASR",
    "source": "Amritsar Jn",
    "destCode": "KOAA",
    "dest": "Kolkata Chitpur"
  },
  {
    "number": "12359",
    "name": "KOLKATA CHITPUR - PATNA Garib Rath Exp",
    "sourceCode": "KOAA",
    "source": "Kolkata Chitpur",
    "destCode": "PNBE",
    "dest": "Patna Jn"
  },
  {
    "number": "12360",
    "name": "KOLKATA CHITPUR - PATNA Garib Rath Exp",
    "sourceCode": "PNBE",
    "source": "Patna Jn",
    "destCode": "KOAA",
    "dest": "Kolkata Chitpur"
  },
  {
    "number": "12361",
    "name": "ASANSOL - MUMBAI CST SF Exp",
    "sourceCode": "ASN",
    "source": "Asansol Jn",
    "destCode": "CSTM",
    "dest": "Mumbai Cst"
  },
  {
    "number": "12362",
    "name": "MUMBAI CST - ASANSOL SF Exp",
    "sourceCode": "CSTM",
    "source": "Mumbai Cst",
    "destCode": "ASN",
    "dest": "Asansol Jn"
  },
  {
    "number": "12363",
    "name": "KOLKATA CHITPUR - HALDIBARI SF Intercity Exp",
    "sourceCode": "KOAA",
    "source": "Kolkata Chitpur",
    "destCode": "HDB",
    "dest": "Haldibari"
  },
  {
    "number": "12364",
    "name": "HALDIBARI - KOLKATA CHITPUR SF Intercity Exp",
    "sourceCode": "HDB",
    "source": "Haldibari",
    "destCode": "KOAA",
    "dest": "Kolkata Chitpur"
  },
  {
    "number": "12365",
    "name": "Patna-Ranchi Jan Shatabdi Express",
    "sourceCode": "PNBE",
    "source": "Patna Jn",
    "destCode": "RNC",
    "dest": "Ranchi"
  },
  {
    "number": "12366",
    "name": "Ranchi Patna Jan Shatabdi Express",
    "sourceCode": "RNC",
    "source": "Ranchi",
    "destCode": "PNBE",
    "dest": "Patna Jn"
  },
  {
    "number": "12367",
    "name": "Vikramshila Express",
    "sourceCode": "BGP",
    "source": "Bhagalpur",
    "destCode": "ANVT",
    "dest": "Anand Vihar Trm"
  },
  {
    "number": "12368",
    "name": "Vikramshila Express",
    "sourceCode": "ANVT",
    "source": "Anand Vihar Trm",
    "destCode": "BGP",
    "dest": "Bhagalpur"
  },
  {
    "number": "12369",
    "name": "Kumbh Express",
    "sourceCode": "HWH",
    "source": "Howrah Jn",
    "destCode": "HW",
    "dest": "Haridwar Jn"
  },
  {
    "number": "12370",
    "name": "Kumbh Express",
    "sourceCode": "HW",
    "source": "Haridwar Jn",
    "destCode": "HWH",
    "dest": "Howrah Jn"
  },
  {
    "number": "12377",
    "name": "Padatik Express",
    "sourceCode": "SDAH",
    "source": "Kolkata Sealdah",
    "destCode": "NJP",
    "dest": "New Jalpaiguri"
  },
  {
    "number": "12378",
    "name": "Padatik Express",
    "sourceCode": "NJP",
    "source": "New Jalpaiguri",
    "destCode": "SDAH",
    "dest": "Kolkata Sealdah"
  },
  {
    "number": "12379",
    "name": "Sealdah - Amritsar Superfast Express",
    "sourceCode": "SDAH",
    "source": "Kolkata Sealdah",
    "destCode": "ASR",
    "dest": "Amritsar Jn"
  },
  {
    "number": "12380",
    "name": "Amritsar - Sealdah Superfast Express",
    "sourceCode": "ASR",
    "source": "Amritsar Jn",
    "destCode": "SDAH",
    "dest": "Kolkata Sealdah"
  },
  {
    "number": "12381",
    "name": "Poorva Express",
    "sourceCode": "HWH",
    "source": "Howrah Jn",
    "destCode": "NDLS",
    "dest": "New Delhi"
  },
  {
    "number": "12382",
    "name": "Poorva Express",
    "sourceCode": "NDLS",
    "source": "New Delhi",
    "destCode": "HWH",
    "dest": "Howrah Jn"
  },
  {
    "number": "12383",
    "name": "Howrah-Dhanbad AC DD Express",
    "sourceCode": "HWH",
    "source": "Howrah Jn",
    "destCode": "DHN",
    "dest": "Dhanbad Jn"
  },
  {
    "number": "12384",
    "name": "Dhanbad-Howrah AC DD Express",
    "sourceCode": "DHN",
    "source": "Dhanbad Jn",
    "destCode": "HWH",
    "dest": "Howrah Jn"
  },
  {
    "number": "12389",
    "name": "GAYA - CHENNAI EGMORE SF Exp",
    "sourceCode": "GAYA",
    "source": "Gaya Jn",
    "destCode": "MS",
    "dest": "Chennai Egmore"
  },
  {
    "number": "12390",
    "name": "CHENNAI EGMORE - GAYA SF Exp",
    "sourceCode": "MS",
    "source": "Chennai Egmore",
    "destCode": "GAYA",
    "dest": "Gaya Jn"
  },
  {
    "number": "12391",
    "name": "Shramjeevi Express",
    "sourceCode": "RGD",
    "source": "Rajgir",
    "destCode": "NDLS",
    "dest": "New Delhi"
  },
  {
    "number": "12392",
    "name": "Shramjeevi Express",
    "sourceCode": "NDLS",
    "source": "New Delhi",
    "destCode": "RGD",
    "dest": "Rajgir"
  },
  {
    "number": "12393",
    "name": "Sampoorna Kranti Express",
    "sourceCode": "RJPB",
    "source": "Rajendra Nagar Bihar",
    "destCode": "NDLS",
    "dest": "New Delhi"
  },
  {
    "number": "12394",
    "name": "Sampoorna Kranti Express",
    "sourceCode": "NDLS",
    "source": "New Delhi",
    "destCode": "RJPB",
    "dest": "Rajendra Nagar Bihar"
  },
  {
    "number": "12395",
    "name": "RajendraNagar-Ajmer Ibadat Express",
    "sourceCode": "RJPB",
    "source": "Rajendra Nagar Bihar",
    "destCode": "AII",
    "dest": "Ajmer Jn"
  },
  {
    "number": "12396",
    "name": "Ajmer-RajendraNagar Ziyarat Express",
    "sourceCode": "AII",
    "source": "Ajmer Jn",
    "destCode": "RJPB",
    "dest": "Rajendra Nagar Bihar"
  },
  {
    "number": "12397",
    "name": "Mahabodhi Express",
    "sourceCode": "GAYA",
    "source": "Gaya Jn",
    "destCode": "NDLS",
    "dest": "New Delhi"
  },
  {
    "number": "12398",
    "name": "Mahabodhi Express",
    "sourceCode": "NDLS",
    "source": "New Delhi",
    "destCode": "GAYA",
    "dest": "Gaya Jn"
  },
  {
    "number": "12401",
    "name": "Magadh Express",
    "sourceCode": "IPR",
    "source": "Islampur",
    "destCode": "NDLS",
    "dest": "New Delhi"
  },
  {
    "number": "12402",
    "name": "Magadh Express",
    "sourceCode": "NDLS",
    "source": "New Delhi",
    "destCode": "IPR",
    "dest": "Islampur"
  },
  {
    "number": "12403",
    "name": "Allahabad Mathura SF Express",
    "sourceCode": "ALD",
    "source": "Allahabad Jn",
    "destCode": "MTJ",
    "dest": "Mathura Jn"
  },
  {
    "number": "12404",
    "name": "Mathura Allahabad SF Express",
    "sourceCode": "MTJ",
    "source": "Mathura Jn",
    "destCode": "ALD",
    "dest": "Allahabad Jn"
  },
  {
    "number": "12405",
    "name": "Gondwana Express",
    "sourceCode": "BSL",
    "source": "Bhusaval Jn",
    "destCode": "NZM",
    "dest": "Delhi H Nizamuddin"
  },
  {
    "number": "12406",
    "name": "H.Nizamuddin-Bhusaval Gondwana Express",
    "sourceCode": "NZM",
    "source": "Delhi H Nizamuddin",
    "destCode": "BSL",
    "dest": "Bhusaval Jn"
  },
  {
    "number": "12407",
    "name": "NEW JALPAIGURI - AMRITSAR Karmabhoomi Exp",
    "sourceCode": "NJP",
    "source": "New Jalpaiguri",
    "destCode": "ASR",
    "dest": "Amritsar Jn"
  },
  {
    "number": "12408",
    "name": "AMRITSAR - NEW JALPAIGURI Karmabhoomi Exp",
    "sourceCode": "ASR",
    "source": "Amritsar Jn",
    "destCode": "NJP",
    "dest": "New Jalpaiguri"
  },
  {
    "number": "12409",
    "name": "Gondwana Express",
    "sourceCode": "RIG",
    "source": "Raigarh",
    "destCode": "NZM",
    "dest": "Delhi H Nizamuddin"
  },
  {
    "number": "12410",
    "name": "Gondwana Express",
    "sourceCode": "NZM",
    "source": "Delhi H Nizamuddin",
    "destCode": "RIG",
    "dest": "Raigarh"
  },
  {
    "number": "12413",
    "name": "Pooja express",
    "sourceCode": "AII",
    "source": "Ajmer Jn",
    "destCode": "JAT",
    "dest": "Jammu Tawi"
  },
  {
    "number": "12414",
    "name": "Pooja Express",
    "sourceCode": "JAT",
    "source": "Jammu Tawi",
    "destCode": "AII",
    "dest": "Ajmer Jn"
  },
  {
    "number": "12415",
    "name": "Indore-Nizamuddin Express",
    "sourceCode": "INDB",
    "source": "Indore Jn Bg",
    "destCode": "NZM",
    "dest": "Delhi H Nizamuddin"
  },
  {
    "number": "12416",
    "name": "Nizamuddin-Indore Express",
    "sourceCode": "NZM",
    "source": "Delhi H Nizamuddin",
    "destCode": "INDB",
    "dest": "Indore Jn Bg"
  },
  {
    "number": "12417",
    "name": "Prayagraj Express",
    "sourceCode": "ALD",
    "source": "Allahabad Jn",
    "destCode": "NDLS",
    "dest": "New Delhi"
  },
  {
    "number": "12418",
    "name": "Prayagraj Express",
    "sourceCode": "NDLS",
    "source": "New Delhi",
    "destCode": "ALD",
    "dest": "Allahabad Jn"
  },
  {
    "number": "12419",
    "name": "Gomti Express",
    "sourceCode": "LKO",
    "source": "Lucknow",
    "destCode": "NDLS",
    "dest": "New Delhi"
  },
  {
    "number": "12420",
    "name": "Gomti Express",
    "sourceCode": "NDLS",
    "source": "New Delhi",
    "destCode": "LKO",
    "dest": "Lucknow"
  },
  {
    "number": "12423",
    "name": "DIBRUGARH TOWN - NEW DELHI Rajdhani Exp",
    "sourceCode": "DBRT",
    "source": "Dibrugarh Town",
    "destCode": "NDLS",
    "dest": "New Delhi"
  },
  {
    "number": "12424",
    "name": "NEW DELHI - DIBRUGARH TOWN Rajdhani Exp",
    "sourceCode": "NDLS",
    "source": "New Delhi",
    "destCode": "DBRT",
    "dest": "Dibrugarh Town"
  },
  {
    "number": "12425",
    "name": "Jammu Rajdhani Express",
    "sourceCode": "NDLS",
    "source": "New Delhi",
    "destCode": "JAT",
    "dest": "Jammu Tawi"
  },
  {
    "number": "12426",
    "name": "Jammu Rajdhani Express",
    "sourceCode": "JAT",
    "source": "Jammu Tawi",
    "destCode": "NDLS",
    "dest": "New Delhi"
  },
  {
    "number": "12429",
    "name": "Bangalore - Hazrat Nizamuddin Rajdhani Express",
    "sourceCode": "SBC",
    "source": "Bangalore City Jn",
    "destCode": "NZM",
    "dest": "Delhi H Nizamuddin"
  },
  {
    "number": "12430",
    "name": "Delhi H Nizamuddin-Bangalore Rajdhani Express",
    "sourceCode": "NZM",
    "source": "Delhi H Nizamuddin",
    "destCode": "SBC",
    "dest": "Bangalore City Jn"
  },
  {
    "number": "12431",
    "name": "TRIVANDRUM - DELHI H NIZAMUDDIN Rajdhani Exp",
    "sourceCode": "TVC",
    "source": "Trivandrum Central",
    "destCode": "NZM",
    "dest": "Delhi H Nizamuddin"
  },
  {
    "number": "12432",
    "name": "DELHI H NIZAMUDDIN - TRIVANDRUM Rajdhani Exp",
    "sourceCode": "NZM",
    "source": "Delhi H Nizamuddin",
    "destCode": "TVC",
    "dest": "Trivandrum Central"
  },
  {
    "number": "12433",
    "name": "Chennai Central-Delhi H.Nizamuddin Rajdhani Expres",
    "sourceCode": "MAS",
    "source": "Chennai Central",
    "destCode": "NZM",
    "dest": "Delhi H Nizamuddin"
  },
  {
    "number": "12434",
    "name": "Delhi H.Nizamuddin-Chennai Central Rajdhani Expres",
    "sourceCode": "NZM",
    "source": "Delhi H Nizamuddin",
    "destCode": "MAS",
    "dest": "Chennai Central"
  },
  {
    "number": "12435",
    "name": "DIBRUGARH TOWN - NEW DELHI Rajdhani Exp",
    "sourceCode": "DBRT",
    "source": "Dibrugarh Town",
    "destCode": "NDLS",
    "dest": "New Delhi"
  },
  {
    "number": "12436",
    "name": "NEW DELHI - DIBRUGARH TOWN Rajdhani Exp",
    "sourceCode": "NDLS",
    "source": "New Delhi",
    "destCode": "DBRT",
    "dest": "Dibrugarh Town"
  },
  {
    "number": "12437",
    "name": "Secunderabad Rajdhani Express",
    "sourceCode": "SC",
    "source": "Secunderabad Jn",
    "destCode": "NZM",
    "dest": "Delhi H Nizamuddin"
  },
  {
    "number": "12438",
    "name": "Secunderabad Rajdhani Express",
    "sourceCode": "NZM",
    "source": "Delhi H Nizamuddin",
    "destCode": "SC",
    "dest": "Secunderabad Jn"
  },
  {
    "number": "12439",
    "name": "RANCHI - NEW DELHI Rajdhani Exp",
    "sourceCode": "RNC",
    "source": "Ranchi",
    "destCode": "NDLS",
    "dest": "New Delhi"
  },
  {
    "number": "12440",
    "name": "NEW DELHI - RANCHI Rajdhani Exp",
    "sourceCode": "NDLS",
    "source": "New Delhi",
    "destCode": "RNC",
    "dest": "Ranchi"
  },
  {
    "number": "12441",
    "name": "Bilaspur-New Delhi Rajdhani Express",
    "sourceCode": "BSP",
    "source": "Bilaspur Jn",
    "destCode": "NDLS",
    "dest": "New Delhi"
  },
  {
    "number": "12442",
    "name": "Bilaspur Rajdhani Express",
    "sourceCode": "NDLS",
    "source": "New Delhi",
    "destCode": "BSP",
    "dest": "Bilaspur Jn"
  },
  {
    "number": "12445",
    "name": "Uttar Sampark Kranti Express",
    "sourceCode": "NDLS",
    "source": "New Delhi",
    "destCode": "UHP",
    "dest": "Udhampur"
  },
  {
    "number": "12446",
    "name": "Uttar Sampark Kranti Express",
    "sourceCode": "UHP",
    "source": "Udhampur",
    "destCode": "NDLS",
    "dest": "New Delhi"
  },
  {
    "number": "12447",
    "name": "UP Sampark Kranti Express",
    "sourceCode": "MKP",
    "source": "Manikpur Jn",
    "destCode": "NZM",
    "dest": "Delhi H Nizamuddin"
  },
  {
    "number": "12448",
    "name": "UP Sampark Kranti Express",
    "sourceCode": "NZM",
    "source": "Delhi H Nizamuddin",
    "destCode": "MKP",
    "dest": "Manikpur Jn"
  },
  {
    "number": "12449",
    "name": "MADGAON - CHANDIGARH Goa Sampark Kranti Exp",
    "sourceCode": "MAO",
    "source": "Madgaon",
    "destCode": "NZM",
    "dest": "Delhi H Nizamuddin"
  },
  {
    "number": "12450",
    "name": "CHANDIGARH - MADGAON Goa Sampark Kranti Exp",
    "sourceCode": "NZM",
    "source": "Delhi H Nizamuddin",
    "destCode": "MAO",
    "dest": "Madgaon"
  },
  {
    "number": "12451",
    "name": "Shram Shakti Express",
    "sourceCode": "CNB",
    "source": "Kanpur Central",
    "destCode": "NDLS",
    "dest": "New Delhi"
  },
  {
    "number": "12452",
    "name": "Shram Shakti Express",
    "sourceCode": "NDLS",
    "source": "New Delhi",
    "destCode": "CNB",
    "dest": "Kanpur Central"
  },
  {
    "number": "12453",
    "name": "Ranchi-New Delhi Rajdhani Express",
    "sourceCode": "RNC",
    "source": "Ranchi",
    "destCode": "NDLS",
    "dest": "New Delhi"
  },
  {
    "number": "12454",
    "name": "New Delhi-Ranchi Rajdhani Express",
    "sourceCode": "NDLS",
    "source": "New Delhi",
    "destCode": "RNC",
    "dest": "Ranchi"
  },
  {
    "number": "12455",
    "name": "DelhiSaraiRohilla-ShriGanganagar AC SF Express",
    "sourceCode": "DEE",
    "source": "Delhi Sarai Rohilla",
    "destCode": "SGNR",
    "dest": "Shri Ganganagar"
  },
  {
    "number": "12456",
    "name": "ShriGanganagar-DelhiSaraiRohilla AC SF Express",
    "sourceCode": "SGNR",
    "source": "Shri Ganganagar",
    "destCode": "DEE",
    "dest": "Delhi Sarai Rohilla"
  },
  {
    "number": "12457",
    "name": "Delhi SaraiRohilla-Bikaner Express",
    "sourceCode": "DEE",
    "source": "Delhi Sarai Rohilla",
    "destCode": "BKN",
    "dest": "Bikaner Jn"
  },
  {
    "number": "12458",
    "name": "Bikaner-DelhiSaraiRohiilla Express",
    "sourceCode": "BKN",
    "source": "Bikaner Jn",
    "destCode": "DEE",
    "dest": "Delhi Sarai Rohilla"
  },
  {
    "number": "12459",
    "name": "NewDelhi-Amritsar SF InterCity",
    "sourceCode": "NDLS",
    "source": "New Delhi",
    "destCode": "ASR",
    "dest": "Amritsar Jn"
  },
  {
    "number": "12460",
    "name": "Amritsar-New Delhi Intercity Express",
    "sourceCode": "ASR",
    "source": "Amritsar Jn",
    "destCode": "NDLS",
    "dest": "New Delhi"
  },
  {
    "number": "12461",
    "name": "Mandore Express",
    "sourceCode": "DLI",
    "source": "Old Delhi",
    "destCode": "JU",
    "dest": "Jodhpur Jn"
  },
  {
    "number": "12462",
    "name": "Mandore Express",
    "sourceCode": "JU",
    "source": "Jodhpur Jn",
    "destCode": "DLI",
    "dest": "Old Delhi"
  },
  {
    "number": "12463",
    "name": "Rajasthan Sampark Kranti Express",
    "sourceCode": "DEE",
    "source": "Delhi Sarai Rohilla",
    "destCode": "JU",
    "dest": "Jodhpur Jn"
  },
  {
    "number": "12464",
    "name": "Rajasthan Sampark Kranti Express",
    "sourceCode": "JU",
    "source": "Jodhpur Jn",
    "destCode": "DEE",
    "dest": "Delhi Sarai Rohilla"
  },
  {
    "number": "12465",
    "name": "Indore-Jodhpur Ranthambhore Express",
    "sourceCode": "INDB",
    "source": "Indore Jn Bg",
    "destCode": "JU",
    "dest": "Jodhpur Jn"
  },
  {
    "number": "12466",
    "name": "Jodhpur-Indore Ranthambhore Intercity Express",
    "sourceCode": "JU",
    "source": "Jodhpur Jn",
    "destCode": "INDB",
    "dest": "Indore Jn Bg"
  },
  {
    "number": "12467",
    "name": "Bikaner Jaipur InterCity",
    "sourceCode": "BKN",
    "source": "Bikaner Jn",
    "destCode": "JP",
    "dest": "Jaipur"
  },
  {
    "number": "12468",
    "name": "Jaipur Bikaner InterCity Express",
    "sourceCode": "JP",
    "source": "Jaipur",
    "destCode": "BKN",
    "dest": "Bikaner Jn"
  },
  {
    "number": "12469",
    "name": "Kanpur Jammu Express",
    "sourceCode": "CNB",
    "source": "Kanpur Central",
    "destCode": "JAT",
    "dest": "Jammu Tawi"
  },
  {
    "number": "12470",
    "name": "Jammu Kanpur Express",
    "sourceCode": "JAT",
    "source": "Jammu Tawi",
    "destCode": "CNB",
    "dest": "Kanpur Central"
  },
  {
    "number": "12471",
    "name": "Mumbai Bandra (T.) - Jammu Tawi SF Swaraj Express",
    "sourceCode": "BDTS",
    "source": "Mumbai Bandra Terminus",
    "destCode": "JAT",
    "dest": "Jammu Tawi"
  },
  {
    "number": "12472",
    "name": "Jammu Tawi - Mumbai Bandra (T.) SF Swaraj Express",
    "sourceCode": "JAT",
    "source": "Jammu Tawi",
    "destCode": "BDTS",
    "dest": "Mumbai Bandra Terminus"
  },
  {
    "number": "12473",
    "name": "Sarvodaya SF Express",
    "sourceCode": "ADI",
    "source": "Ahmedabad Jn",
    "destCode": "JAT",
    "dest": "Jammu Tawi"
  },
  {
    "number": "12474",
    "name": "Sarvodaya SF Express",
    "sourceCode": "JAT",
    "source": "Jammu Tawi",
    "destCode": "ADI",
    "dest": "Ahmedabad Jn"
  },
  {
    "number": "12475",
    "name": "Hapa - Jammu Tawi Sarvodaya SF Express",
    "sourceCode": "HAPA",
    "source": "Hapa",
    "destCode": "JAT",
    "dest": "Jammu Tawi"
  },
  {
    "number": "12476",
    "name": "Jammu Tawi - Hapa Sarvodaya SF Express",
    "sourceCode": "JAT",
    "source": "Jammu Tawi",
    "destCode": "HAPA",
    "dest": "Hapa"
  },
  {
    "number": "12477",
    "name": "Jamnagar - Jammu Tawi SF Sindhu Express",
    "sourceCode": "JAM",
    "source": "Jamnagar",
    "destCode": "JAT",
    "dest": "Jammu Tawi"
  },
  {
    "number": "12478",
    "name": "Jammu Tawi - Jamnagar (Weekly) Sindhu SF Express",
    "sourceCode": "JAT",
    "source": "Jammu Tawi",
    "destCode": "JAM",
    "dest": "Jamnagar"
  },
  {
    "number": "12479",
    "name": "JODHPUR - MUMBAI BANDRA Suryanagari SF Exp",
    "sourceCode": "JU",
    "source": "Jodhpur Jn",
    "destCode": "BDTS",
    "dest": "Mumbai Bandra Terminus"
  },
  {
    "number": "12480",
    "name": "MUMBAI BANDRA - JODHPUR Suryanagari SF Exp",
    "sourceCode": "BDTS",
    "source": "Mumbai Bandra Terminus",
    "destCode": "JU",
    "dest": "Jodhpur Jn"
  },
  {
    "number": "12481",
    "name": "Delhi Sriganganagar InterCity",
    "sourceCode": "DLI",
    "source": "Old Delhi",
    "destCode": "SGNR",
    "dest": "Shri Ganganagar"
  },
  {
    "number": "12482",
    "name": "Sriganganagar Delhi InterCity Express",
    "sourceCode": "SGNR",
    "source": "Shri Ganganagar",
    "destCode": "DLI",
    "dest": "Old Delhi"
  },
  {
    "number": "12483",
    "name": "KOCHUVELI - AMRITSAR SF Exp",
    "sourceCode": "KCVL",
    "source": "Kochuveli",
    "destCode": "ASR",
    "dest": "Amritsar Jn"
  },
  {
    "number": "12484",
    "name": "AMRITSAR - KOCHUVELI SF Exp",
    "sourceCode": "ASR",
    "source": "Amritsar Jn",
    "destCode": "KCVL",
    "dest": "Kochuveli"
  },
  {
    "number": "12485",
    "name": "H S NANDED - SHRI GANGANAGAR Exp",
    "sourceCode": "NED",
    "source": "Huzur Sahib Nanded",
    "destCode": "SGNR",
    "dest": "Shri Ganganagar"
  },
  {
    "number": "12486",
    "name": "SHRI GANGANAGAR - H S NANDED Exp",
    "sourceCode": "SGNR",
    "source": "Shri Ganganagar",
    "destCode": "NED",
    "dest": "Huzur Sahib Nanded"
  },
  {
    "number": "12487",
    "name": "Seemanchal Express",
    "sourceCode": "JBN",
    "source": "Jogbani",
    "destCode": "ANVT",
    "dest": "Anand Vihar Trm"
  },
  {
    "number": "12488",
    "name": "Seemanchal Express",
    "sourceCode": "ANVT",
    "source": "Anand Vihar Trm",
    "destCode": "JBN",
    "dest": "Jogbani"
  },
  {
    "number": "12489",
    "name": "Bikaner-Dadar Express",
    "sourceCode": "BKN",
    "source": "Bikaner Jn",
    "destCode": "DDR",
    "dest": "Mumbai Dadar West"
  },
  {
    "number": "12490",
    "name": "Dadar - Bikaner Express",
    "sourceCode": "DDR",
    "source": "Mumbai Dadar West",
    "destCode": "BKN",
    "dest": "Bikaner Jn"
  },
  {
    "number": "12491",
    "name": "BARAUNI - JAMMU TAWI Maur Dhwaj Express",
    "sourceCode": "MFP",
    "source": "Muzaffarpur Jn",
    "destCode": "JAT",
    "dest": "Jammu Tawi"
  },
  {
    "number": "12492",
    "name": "JAMMU TAWI - BARAUNI Maur Dhwaj Express",
    "sourceCode": "JAT",
    "source": "Jammu Tawi",
    "destCode": "MFP",
    "dest": "Muzaffarpur Jn"
  },
  {
    "number": "12493",
    "name": "Bangalore-Hazrat Nizammudin Rajdhani Express",
    "sourceCode": "SBC",
    "source": "Bangalore City Jn",
    "destCode": "NZM",
    "dest": "Delhi H Nizamuddin"
  },
  {
    "number": "12494",
    "name": "Hazrat Nizamuddin-Bangalore Rajdhani Express",
    "sourceCode": "NZM",
    "source": "Delhi H Nizamuddin",
    "destCode": "SBC",
    "dest": "Bangalore City Jn"
  },
  {
    "number": "12496",
    "name": "KOLKATA CHITPUR - BIKANER Pratap Exp",
    "sourceCode": "KOAA",
    "source": "Kolkata Chitpur",
    "destCode": "BKN",
    "dest": "Bikaner Jn"
  },
  {
    "number": "12497",
    "name": "Shan-e-Punjab Express",
    "sourceCode": "NDLS",
    "source": "New Delhi",
    "destCode": "ASR",
    "dest": "Amritsar Jn"
  },
  {
    "number": "12498",
    "name": "Shan-e-Punjab Express",
    "sourceCode": "ASR",
    "source": "Amritsar Jn",
    "destCode": "NDLS",
    "dest": "New Delhi"
  },
  {
    "number": "12501",
    "name": "GUWAHATI - NEW DELHI Poorvottar Sampark Kranti Exp",
    "sourceCode": "GHY",
    "source": "Guwahati",
    "destCode": "NDLS",
    "dest": "New Delhi"
  },
  {
    "number": "12502",
    "name": "NEW DELHI - GUWAHATI Poorvottar Sampark Kranti Exp",
    "sourceCode": "NDLS",
    "source": "New Delhi",
    "destCode": "GHY",
    "dest": "Guwahati"
  },
  {
    "number": "12505",
    "name": "GUWAHATI - DELHI ANAND VIHAR North East Exp",
    "sourceCode": "GHY",
    "source": "Guwahati",
    "destCode": "ANVT",
    "dest": "Anand Vihar Trm"
  },
  {
    "number": "12506",
    "name": "DELHI ANAND VIHAR - GUWAHATI North East Exp",
    "sourceCode": "ANVT",
    "source": "Anand Vihar Trm",
    "destCode": "GHY",
    "dest": "Guwahati"
  },
  {
    "number": "12510",
    "name": "GUWAHATI - BENGALURU (Kaziranga) SF Express",
    "sourceCode": "GHY",
    "source": "Guwahati",
    "destCode": "SBC",
    "dest": "Bangalore City Jn"
  },
  {
    "number": "12511",
    "name": "Rapti Sagar SF Express",
    "sourceCode": "GKP",
    "source": "Gorakhpur",
    "destCode": "ERS",
    "dest": "Ernakulam"
  },
  {
    "number": "12512",
    "name": "Rapti Sagar SF Express",
    "sourceCode": "ERS",
    "source": "Ernakulam",
    "destCode": "GKP",
    "dest": "Gorakhpur"
  },
  {
    "number": "12513",
    "name": "SECUNDERABAD - GUWAHATI Exp",
    "sourceCode": "SC",
    "source": "Secunderabad Jn",
    "destCode": "GHY",
    "dest": "Guwahati"
  },
  {
    "number": "12514",
    "name": "GUWAHATI - SECUNDERABAD Exp",
    "sourceCode": "GHY",
    "source": "Guwahati",
    "destCode": "SC",
    "dest": "Secunderabad Jn"
  },
  {
    "number": "12515",
    "name": "Trivandrum Guwahati Express",
    "sourceCode": "TVC",
    "source": "Trivandrum Central",
    "destCode": "GHY",
    "dest": "Guwahati"
  },
  {
    "number": "12516",
    "name": "Guwahati Trivandrum Express",
    "sourceCode": "GHY",
    "source": "Guwahati",
    "destCode": "TVC",
    "dest": "Trivandrum Central"
  },
  {
    "number": "12517",
    "name": "KOLKATA - GUWAHATI Garib Rath Exp",
    "sourceCode": "KOAA",
    "source": "Kolkata Chitpur",
    "destCode": "GHY",
    "dest": "Guwahati"
  },
  {
    "number": "12518",
    "name": "GUWAHATI - KOLKATA Garib Rath Exp",
    "sourceCode": "GHY",
    "source": "Guwahati",
    "destCode": "KOAA",
    "dest": "Kolkata Chitpur"
  },
  {
    "number": "12521",
    "name": "Raptisagar Express",
    "sourceCode": "BJU",
    "source": "Barauni Jn",
    "destCode": "ERS",
    "dest": "Ernakulam Jn"
  },
  {
    "number": "12522",
    "name": "Raptisagar Express",
    "sourceCode": "ERS",
    "source": "Ernakulam Jn",
    "destCode": "BJU",
    "dest": "Barauni Jn"
  },
  {
    "number": "12523",
    "name": "New Jalpaiguri-New Delhi Superfast Express",
    "sourceCode": "NJP",
    "source": "New Jalpaiguri",
    "destCode": "NDLS",
    "dest": "New Delhi"
  },
  {
    "number": "12524",
    "name": "New Delhi New Jalpaiguri SuperFast Express",
    "sourceCode": "NDLS",
    "source": "New Delhi",
    "destCode": "NJP",
    "dest": "New Jalpaiguri"
  },
  {
    "number": "12525",
    "name": "Indrayani SF Express",
    "sourceCode": "CSTM",
    "source": "Mumbai Cst",
    "destCode": "PUNE",
    "dest": "Pune Jn"
  },
  {
    "number": "12526",
    "name": "Indrayani SF Express",
    "sourceCode": "PUNE",
    "source": "Pune Jn",
    "destCode": "CSTM",
    "dest": "Mumbai Cst"
  },
  {
    "number": "12527",
    "name": "Mumbai CST-Latur Superfast Express.",
    "sourceCode": "CSTM",
    "source": "Mumbai Cst",
    "destCode": "LUR",
    "dest": "Latur"
  },
  {
    "number": "12528",
    "name": "Latur-Mumbai CST Superfast Express",
    "sourceCode": "LUR",
    "source": "Latur",
    "destCode": "CSTM",
    "dest": "Mumbai Cst"
  },
  {
    "number": "12529",
    "name": "Bhopal-Jabalpur Intercity Express",
    "sourceCode": "HBJ",
    "source": "Habibganj",
    "destCode": "JBP",
    "dest": "Jabalpur"
  },
  {
    "number": "12530",
    "name": "Jabalpur-Bhopal Intercity",
    "sourceCode": "JBP",
    "source": "Jabalpur",
    "destCode": "HBJ",
    "dest": "Habibganj"
  },
  {
    "number": "12531",
    "name": "Gorakhpur Lucknow InterCity Express",
    "sourceCode": "GKP",
    "source": "Gorakhpur Jn",
    "destCode": "LJN",
    "dest": "Lucknow Jn"
  },
  {
    "number": "12532",
    "name": "Lucknow Gorakhpur Inter City Express",
    "sourceCode": "LJN",
    "source": "Lucknow Jn",
    "destCode": "GKP",
    "dest": "Gorakhpur Jn"
  },
  {
    "number": "12533",
    "name": "Pushpak Express",
    "sourceCode": "LJN",
    "source": "Lucknow Jn",
    "destCode": "CSTM",
    "dest": "Mumbai Cst"
  },
  {
    "number": "12534",
    "name": "Pushpak Express",
    "sourceCode": "CSTM",
    "source": "Mumbai Cst",
    "destCode": "LJN",
    "dest": "Lucknow Jn"
  },
  {
    "number": "12535",
    "name": "Lucknow-Raipur Garib Rath Express",
    "sourceCode": "LJN",
    "source": "Lucknow Jn",
    "destCode": "R",
    "dest": "Raipur Jn"
  },
  {
    "number": "12536",
    "name": "Raipur-Lucknow Garib Rath",
    "sourceCode": "R",
    "source": "Raipur Jn",
    "destCode": "LJN",
    "dest": "Lucknow Jn"
  },
  {
    "number": "12537",
    "name": "Bapudham Express",
    "sourceCode": "MKI",
    "source": "Bapudham Motihari",
    "destCode": "MUV",
    "dest": "Manduadih"
  },
  {
    "number": "12538",
    "name": "Bapudham Express",
    "sourceCode": "MUV",
    "source": "Manduadih",
    "destCode": "MKI",
    "dest": "Bapudham Motihari"
  },
  {
    "number": "12539",
    "name": "Yesvantpur Lucknow SF",
    "sourceCode": "YPR",
    "source": "Yesvantpur",
    "destCode": "LKO",
    "dest": "Lucknow"
  },
  {
    "number": "12540",
    "name": "Lucknow Yesvantpur SF",
    "sourceCode": "LKO",
    "source": "Lucknow",
    "destCode": "YPR",
    "dest": "Yesvantpur"
  },
  {
    "number": "12541",
    "name": "Gorakhpur-Mumbai LTT SF Express",
    "sourceCode": "GKP",
    "source": "Gorakhpur Jn",
    "destCode": "LTT",
    "dest": "Lokmanya Tilak Term"
  },
  {
    "number": "12542",
    "name": "Mumbai LTT-Gorakhpur SF Express",
    "sourceCode": "LTT",
    "source": "Lokmanya Tilak Term",
    "destCode": "GKP",
    "dest": "Gorakhpur Jn"
  },
  {
    "number": "12543",
    "name": "Yesvantpur-Tirupati Tri Weekly Intercity",
    "sourceCode": "YPR",
    "source": "Yesvantpur Jn",
    "destCode": "TPTY",
    "dest": "Tirupati Main"
  },
  {
    "number": "12544",
    "name": "Tirupati-Yesvantpur Tri Weekly SF Intercity",
    "sourceCode": "TPTY",
    "source": "Tirupati Main",
    "destCode": "YPR",
    "dest": "Yesvantpur Jn"
  },
  {
    "number": "12545",
    "name": "RAXAUL - MUMBAI LTT Karmabhoomi Exp",
    "sourceCode": "DBG",
    "source": "Darbhanga Jn",
    "destCode": "LTT",
    "dest": "Lokmanya Tilak Term"
  },
  {
    "number": "12546",
    "name": "MUMBAI LTT - RAXAUL Karmabhoomi Exp",
    "sourceCode": "LTT",
    "source": "Lokmanya Tilak Term",
    "destCode": "DBG",
    "dest": "Darbhanga Jn"
  },
  {
    "number": "12547",
    "name": "Agra Fort Ahmedabad Tri Weekly Express",
    "sourceCode": "AF",
    "source": "Agra Fort",
    "destCode": "ADI",
    "dest": "Ahmedabad Jn"
  },
  {
    "number": "12548",
    "name": "Ahmedabad-Agra Fort Express",
    "sourceCode": "ADI",
    "source": "Ahmedabad Jn",
    "destCode": "AF",
    "dest": "Agra Fort"
  },
  {
    "number": "12549",
    "name": "DURG - JAMMU TAWI SF Exp",
    "sourceCode": "DURG",
    "source": "Durg",
    "destCode": "JAT",
    "dest": "Jammu Tawi"
  },
  {
    "number": "12550",
    "name": "JAMMU TAWI - DURG SF Exp",
    "sourceCode": "JAT",
    "source": "Jammu Tawi",
    "destCode": "DURG",
    "dest": "Durg"
  },
  {
    "number": "12553",
    "name": "Vaishali SF Express",
    "sourceCode": "BJU",
    "source": "Barauni Jn",
    "destCode": "NDLS",
    "dest": "New Delhi"
  },
  {
    "number": "12554",
    "name": "Vaishali SF Express",
    "sourceCode": "NDLS",
    "source": "New Delhi",
    "destCode": "BJU",
    "dest": "Barauni Jn"
  },
  {
    "number": "12555",
    "name": "Gorakhdham Express",
    "sourceCode": "GKP",
    "source": "Gorakhpur Jn",
    "destCode": "HSR",
    "dest": "Hisar"
  },
  {
    "number": "12556",
    "name": "Gorakhdham Express",
    "sourceCode": "HSR",
    "source": "Hisar",
    "destCode": "GKP",
    "dest": "Gorakhpur Jn"
  },
  {
    "number": "12557",
    "name": "Sapt Kranti SF Express",
    "sourceCode": "MFP",
    "source": "Muzaffarpur",
    "destCode": "ANVT",
    "dest": "Anand Vihar"
  },
  {
    "number": "12558",
    "name": "Sapt Kranti SF Express",
    "sourceCode": "ANVT",
    "source": "Anand Vihar",
    "destCode": "MFP",
    "dest": "Muzaffarpur"
  },
  {
    "number": "12559",
    "name": "Shiv Ganga Express",
    "sourceCode": "BSB",
    "source": "Varanasi Jn",
    "destCode": "NDLS",
    "dest": "New Delhi"
  },
  {
    "number": "12560",
    "name": "Shiv Ganga Express",
    "sourceCode": "NDLS",
    "source": "New Delhi",
    "destCode": "BSB",
    "dest": "Varanasi Jn"
  },
  {
    "number": "12561",
    "name": "Swatantrata Sainani Express",
    "sourceCode": "DBG",
    "source": "Darbhanga Jn",
    "destCode": "NDLS",
    "dest": "New Delhi"
  },
  {
    "number": "12562",
    "name": "Swatantrata Sainani Express",
    "sourceCode": "NDLS",
    "source": "New Delhi",
    "destCode": "DBG",
    "dest": "Darbhanga Jn"
  },
  {
    "number": "12563",
    "name": "Mumbai LTT - Faizabad SF Express",
    "sourceCode": "LTT",
    "source": "Lokmanya Tilak Term",
    "destCode": "FD",
    "dest": "Faizabad Jn"
  },
  {
    "number": "12564",
    "name": "Faizabad-Mumbai LTT SF Express",
    "sourceCode": "FD",
    "source": "Faizabad Jn",
    "destCode": "LTT",
    "dest": "Lokmanya Tilak Term"
  },
  {
    "number": "12565",
    "name": "Bihar Sampark Kranti Express",
    "sourceCode": "DBG",
    "source": "Darbhanga Jn",
    "destCode": "NDLS",
    "dest": "New Delhi"
  },
  {
    "number": "12566",
    "name": "Bihar Sampark Kranti Express",
    "sourceCode": "NDLS",
    "source": "New Delhi",
    "destCode": "DBG",
    "dest": "Darbhanga Jn"
  },
  {
    "number": "12569",
    "name": "Jaynagar-Delhi AnandViharT Garib Rath",
    "sourceCode": "JYG",
    "source": "Jaynagar",
    "destCode": "ANVT",
    "dest": "Anand Vihar Trm"
  },
  {
    "number": "12570",
    "name": "Anand Vihar Terminus-Jaynagar Garib Rath Express",
    "sourceCode": "ANVT",
    "source": "Anand Vihar Trm",
    "destCode": "JYG",
    "dest": "Jaynagar"
  },
  {
    "number": "12571",
    "name": "Howrah Prasanti Nilayam SF Express",
    "sourceCode": "HWH",
    "source": "Howrah Jn",
    "destCode": "SSPN",
    "dest": "Satya Sai P Nilayam"
  },
  {
    "number": "12572",
    "name": "Prashanti Nilayam Howrah SF Express",
    "sourceCode": "SSPN",
    "source": "Satya Sai P Nilayam",
    "destCode": "HWH",
    "dest": "Howrah Jn"
  },
  {
    "number": "12573",
    "name": "SainagarShirdi-Howrah Express",
    "sourceCode": "SNSI",
    "source": "Sainagar Shirdi",
    "destCode": "HWH",
    "dest": "Howrah Jn"
  },
  {
    "number": "12574",
    "name": "Howrah-SainagarShirdi Express",
    "sourceCode": "HWH",
    "source": "Howrah Jn",
    "destCode": "SNSI",
    "dest": "Sainagar Shirdi"
  },
  {
    "number": "12575",
    "name": "Kharagpur Purulia Express",
    "sourceCode": "KGP",
    "source": "Kharagpur Jn",
    "destCode": "PRR",
    "dest": "Purulia Jn"
  },
  {
    "number": "12576",
    "name": "Purulia Khargapur Intercity Express",
    "sourceCode": "PRR",
    "source": "Purulia Jn",
    "destCode": "KGP",
    "dest": "Kharagpur Jn"
  },
  {
    "number": "12577",
    "name": "DARBHANGA - MYSORE BAGMATI SF Exp",
    "sourceCode": "DBG",
    "source": "Darbhanga Jn",
    "destCode": "SBC",
    "dest": "Bangalore City Jn"
  },
  {
    "number": "12578",
    "name": "MYSORE - DARBHANGA BAGMATI SF Exp",
    "sourceCode": "SBC",
    "source": "Bangalore City Jn",
    "destCode": "DBG",
    "dest": "Darbhanga Jn"
  },
  {
    "number": "12579",
    "name": "Digha- Puri SamudraKanya Express",
    "sourceCode": "DGHA",
    "source": "Digha Flag Station",
    "destCode": "PURI",
    "dest": "Puri"
  },
  {
    "number": "12580",
    "name": "Puri Digha Samudra Kanya Super Fast Express",
    "sourceCode": "PURI",
    "source": "Puri",
    "destCode": "DGHA",
    "dest": "Digha Flag Station"
  },
  {
    "number": "12581",
    "name": "Pune Bhubaneshwar Express",
    "sourceCode": "PUNE",
    "source": "Pune Jn",
    "destCode": "BBS",
    "dest": "Bhubaneswar"
  },
  {
    "number": "12582",
    "name": "Bhubaneshwar-Pune Express",
    "sourceCode": "BBS",
    "source": "Bhubaneswar",
    "destCode": "PUNE",
    "dest": "Pune Jn"
  },
  {
    "number": "12587",
    "name": "Amarnath Express",
    "sourceCode": "GKP",
    "source": "Gorakhpur Jn",
    "destCode": "JAT",
    "dest": "Jammu Tawi"
  },
  {
    "number": "12588",
    "name": "Amarnath Express",
    "sourceCode": "JAT",
    "source": "Jammu Tawi",
    "destCode": "GKP",
    "dest": "Gorakhpur Jn"
  },
  {
    "number": "12589",
    "name": "Gorakhpur-Secunderabad Express",
    "sourceCode": "GKP",
    "source": "Gorakhpur Jn",
    "destCode": "SC",
    "dest": "Secunderabad Jn"
  },
  {
    "number": "12590",
    "name": "Secunderabad - Gorakhpur Express",
    "sourceCode": "SC",
    "source": "Secunderabad Jn",
    "destCode": "GKP",
    "dest": "Gorakhpur Jn"
  },
  {
    "number": "12593",
    "name": "Lucknow-Bhopal Garib Rath",
    "sourceCode": "LJN",
    "source": "Lucknow Jn",
    "destCode": "BPL",
    "dest": "Bhopal Jn"
  },
  {
    "number": "12594",
    "name": "Bhopal-Lucknow Garib Rath Express",
    "sourceCode": "BPL",
    "source": "Bhopal Jn",
    "destCode": "LJN",
    "dest": "Lucknow Jn"
  },
  {
    "number": "12601",
    "name": "Mangalore Mail",
    "sourceCode": "MAS",
    "source": "Chennai Central",
    "destCode": "MAQ",
    "dest": "Mangalore Central"
  },
  {
    "number": "12602",
    "name": "Mangalore Mail",
    "sourceCode": "MAQ",
    "source": "Mangalore Central",
    "destCode": "MAS",
    "dest": "Chennai Central"
  },
  {
    "number": "12603",
    "name": "Chennai - Hyderabad Express",
    "sourceCode": "MAS",
    "source": "Chennai Central",
    "destCode": "HYB",
    "dest": "Hyderabad Deccan"
  },
  {
    "number": "12604",
    "name": "Hyderabad - Chennai Express",
    "sourceCode": "HYB",
    "source": "Hyderabad Deccan",
    "destCode": "MAS",
    "dest": "Chennai Central"
  },
  {
    "number": "12605",
    "name": "Pallavan SF Express",
    "sourceCode": "MAS",
    "source": "Chennai Central",
    "destCode": "MS",
    "dest": "Chennai Egmore"
  },
  {
    "number": "12606",
    "name": "Pallavan Superfast Express",
    "sourceCode": "TPJ",
    "source": "Tiruchirappalli",
    "destCode": "MS",
    "dest": "Chennai Egmore"
  },
  {
    "number": "12607",
    "name": "Lalbagh Express",
    "sourceCode": "SBC",
    "source": "Bangalore City",
    "destCode": "MAS",
    "dest": "Chennai Central"
  },
  {
    "number": "12608",
    "name": "Lalbagh Express",
    "sourceCode": "MAS",
    "source": "Chennai Central",
    "destCode": "SBC",
    "dest": "Bangalore City"
  },
  {
    "number": "12609",
    "name": "Chennai Bangalore Express",
    "sourceCode": "MAS",
    "source": "Chennai Central",
    "destCode": "SBC",
    "dest": "Bangalore City"
  },
  {
    "number": "12610",
    "name": "Bangalore Chennai Express",
    "sourceCode": "SBC",
    "source": "Bangalore City",
    "destCode": "MAS",
    "dest": "Chennai Central"
  },
  {
    "number": "12611",
    "name": "Chennai Central-H.Nizamuddin Garib Rath Express",
    "sourceCode": "MAS",
    "source": "Chennai Central",
    "destCode": "NZM",
    "dest": "Delhi H Nizamuddin"
  },
  {
    "number": "12612",
    "name": "H Nizamuddin-Chennai Garib Rath Express",
    "sourceCode": "NZM",
    "source": "Delhi H Nizamuddin",
    "destCode": "MAS",
    "dest": "Chennai Central"
  },
  {
    "number": "12613",
    "name": "Tippu Express",
    "sourceCode": "MYS",
    "source": "Mysore Jn",
    "destCode": "SBC",
    "dest": "Bangalore City Jn"
  },
  {
    "number": "12614",
    "name": "Tippu Express",
    "sourceCode": "SBC",
    "source": "Bangalore City Jn",
    "destCode": "MYS",
    "dest": "Mysore Jn"
  },
  {
    "number": "12615",
    "name": "Grand Trunk Express",
    "sourceCode": "MAS",
    "source": "Chennai Central",
    "destCode": "NDLS",
    "dest": "New Delhi"
  },
  {
    "number": "12616",
    "name": "Grand Trunk Express",
    "sourceCode": "NDLS",
    "source": "New Delhi",
    "destCode": "MAS",
    "dest": "Chennai Central"
  },
  {
    "number": "12617",
    "name": "ERNAKULAM - NEW DELHI H NIZAMUDDIN Mangala Lakshadweep Exp",
    "sourceCode": "ERS",
    "source": "Ernakulam Jn",
    "destCode": "NZM",
    "dest": "Delhi H Nizamuddin"
  },
  {
    "number": "12618",
    "name": "NEW DELHI H NIZAMUDDIN - ERNAKULAM Mangala Lakshadweep Exp",
    "sourceCode": "NZM",
    "source": "Delhi H Nizamuddin",
    "destCode": "ERS",
    "dest": "Ernakulam Jn"
  },
  {
    "number": "12619",
    "name": "MUMBAI LTT - MANGALORE CENT Matsyagandha Exp",
    "sourceCode": "LTT",
    "source": "Lokmanya Tilak Term",
    "destCode": "MAQ",
    "dest": "Mangalore Cntl"
  },
  {
    "number": "12620",
    "name": "MANGALORE CENT - MUMBAI LTT Matsyagandha Exp",
    "sourceCode": "MAQ",
    "source": "Mangalore Cntl",
    "destCode": "LTT",
    "dest": "Lokmanya Tilak Term"
  },
  {
    "number": "12621",
    "name": "Tamil Nadu Express",
    "sourceCode": "MAS",
    "source": "Chennai Central",
    "destCode": "NDLS",
    "dest": "New Delhi"
  },
  {
    "number": "12622",
    "name": "Tamil Nadu Express",
    "sourceCode": "NDLS",
    "source": "New Delhi",
    "destCode": "MAS",
    "dest": "Chennai Central"
  },
  {
    "number": "12623",
    "name": "Trivandrum Mail",
    "sourceCode": "MAS",
    "source": "Chennai Central",
    "destCode": "TVC",
    "dest": "Trivandrum Central"
  },
  {
    "number": "12624",
    "name": "Trivandrum Mail",
    "sourceCode": "TVC",
    "source": "Trivandrum Central",
    "destCode": "MAS",
    "dest": "Chennai Central"
  },
  {
    "number": "12625",
    "name": "Kerala Express",
    "sourceCode": "TVC",
    "source": "Trivandrum Central",
    "destCode": "NDLS",
    "dest": "New Delhi"
  },
  {
    "number": "12626",
    "name": "Kerala Express",
    "sourceCode": "NDLS",
    "source": "New Delhi",
    "destCode": "TVC",
    "dest": "Trivandrum Central"
  },
  {
    "number": "12627",
    "name": "Karnataka Express",
    "sourceCode": "SBC",
    "source": "Bangalore City Jn",
    "destCode": "NDLS",
    "dest": "New Delhi"
  },
  {
    "number": "12628",
    "name": "Karnataka Express",
    "sourceCode": "NDLS",
    "source": "New Delhi",
    "destCode": "SBC",
    "dest": "Bangalore City Jn"
  },
  {
    "number": "12629",
    "name": "Nilgiri SF Express",
    "sourceCode": "MAS",
    "source": "Chennai Central",
    "destCode": "CBE",
    "dest": "Coimbatore"
  },
  {
    "number": "12630",
    "name": "Nilgiri SF Express",
    "sourceCode": "CBE",
    "source": "Coimbatore",
    "destCode": "MAS",
    "dest": "Chennai Central"
  },
  {
    "number": "12631",
    "name": "Nellai SF Express",
    "sourceCode": "MAS",
    "source": "Chennai Central",
    "destCode": "TEN",
    "dest": "Tirunelveli"
  },
  {
    "number": "12632",
    "name": "Nellai SF Express",
    "sourceCode": "TEN",
    "source": "Tirunelveli",
    "destCode": "MAS",
    "dest": "Chennai Central"
  },
  {
    "number": "12633",
    "name": "Kanyakumari Express",
    "sourceCode": "MAS",
    "source": "Chennai Central",
    "destCode": "CAPE",
    "dest": "Kanyakumari"
  },
  {
    "number": "12634",
    "name": "Kanyakumari Express",
    "sourceCode": "CAPE",
    "source": "Kanyakumari",
    "destCode": "MAS",
    "dest": "Chennai Central"
  },
  {
    "number": "12635",
    "name": "Vaigai SF Express",
    "sourceCode": "MAS",
    "source": "Chennai Central",
    "destCode": "MDU",
    "dest": "Madurai"
  },
  {
    "number": "12636",
    "name": "Vaigai SF Express",
    "sourceCode": "MDU",
    "source": "Madurai",
    "destCode": "MAS",
    "dest": "Chennai Central"
  },
  {
    "number": "12637",
    "name": "CHENNAI EGMORE - MADURAI Pandiyan SF Exp",
    "sourceCode": "MS",
    "source": "Chennai Egmore",
    "destCode": "MDU",
    "dest": "Madurai Jn"
  },
  {
    "number": "12638",
    "name": "MADURAI - CHENNAI EGMORE Pandiyan SF Exp",
    "sourceCode": "MDU",
    "source": "Madurai Jn",
    "destCode": "MS",
    "dest": "Chennai Egmore"
  },
  {
    "number": "12639",
    "name": "Brindavan Express",
    "sourceCode": "MAS",
    "source": "Chennai Central",
    "destCode": "SBC",
    "dest": "Bangalore City"
  },
  {
    "number": "12640",
    "name": "Brindavan Express",
    "sourceCode": "SBC",
    "source": "Bangalore City",
    "destCode": "MAS",
    "dest": "Chennai Central"
  },
  {
    "number": "12641",
    "name": "KANYAKUMARI - D H NIZAMUDDIN Thirukkural Exp",
    "sourceCode": "CAPE",
    "source": "Kanyakumari",
    "destCode": "NZM",
    "dest": "Delhi H Nizamuddin"
  },
  {
    "number": "12642",
    "name": "D H NIZAMUDDIN - KANYAKUMARI Thirukkural Exp",
    "sourceCode": "NZM",
    "source": "Delhi H Nizamuddin",
    "destCode": "CAPE",
    "dest": "Kanyakumari"
  },
  {
    "number": "12643",
    "name": "Swarna Jayanthi Express",
    "sourceCode": "TVC",
    "source": "Trivandrum Central",
    "destCode": "NZM",
    "dest": "Delhi H Nizamuddin"
  },
  {
    "number": "12644",
    "name": "Swarna Jayanti Express",
    "sourceCode": "NZM",
    "source": "Delhi H Nizamuddin",
    "destCode": "TVC",
    "dest": "Trivandrum Central"
  },
  {
    "number": "12645",
    "name": "Millennium Expres",
    "sourceCode": "ERS",
    "source": "Ernakulam Jn",
    "destCode": "NZM",
    "dest": "Delhi H Nizamuddin"
  },
  {
    "number": "12646",
    "name": "Millennium Express",
    "sourceCode": "NZM",
    "source": "Delhi H Nizamuddin",
    "destCode": "ERS",
    "dest": "Ernakulam Jn"
  },
  {
    "number": "12647",
    "name": "Kongu Express",
    "sourceCode": "CBE",
    "source": "Coimbatore Jn",
    "destCode": "NZM",
    "dest": "Delhi H Nizamuddin"
  },
  {
    "number": "12648",
    "name": "Kongu Express",
    "sourceCode": "NZM",
    "source": "Delhi H Nizamuddin",
    "destCode": "CBE",
    "dest": "Coimbatore Jn"
  },
  {
    "number": "12649",
    "name": "Karnataka Sampark Kranti Express",
    "sourceCode": "YPR",
    "source": "Yesvantpur Jn",
    "destCode": "NZM",
    "dest": "Delhi H Nizamuddin"
  },
  {
    "number": "12650",
    "name": "Karnataka Sampark Kranti Express",
    "sourceCode": "NZM",
    "source": "Delhi H Nizamuddin",
    "destCode": "YPR",
    "dest": "Yesvantpur Jn"
  },
  {
    "number": "12651",
    "name": "MADURAI - DELHI H NIZAMUDDIN Tamil Nadu S Kranti",
    "sourceCode": "MDU",
    "source": "Madurai Jn",
    "destCode": "NZM",
    "dest": "Delhi H Nizamuddin"
  },
  {
    "number": "12652",
    "name": "DELHI H NIZAMUDDIN - MADURAI Tamil Nadu S Kranti",
    "sourceCode": "NZM",
    "source": "Delhi H Nizamuddin",
    "destCode": "MDU",
    "dest": "Madurai Jn"
  },
  {
    "number": "12653",
    "name": "Tiruchirappalli Mangalore Weekly Superfast Express",
    "sourceCode": "TPJ",
    "source": "Tiruchirappalli",
    "destCode": "MAQ",
    "dest": "Mangalore Cntl"
  },
  {
    "number": "12654",
    "name": "Mangalore Tiruchirappalli Weekly Superfast Express",
    "sourceCode": "MAQ",
    "source": "Mangalore Cntl",
    "destCode": "TPJ",
    "dest": "Tiruchirappalli"
  },
  {
    "number": "12655",
    "name": "Navjeevan Express",
    "sourceCode": "ADI",
    "source": "Ahmedabad Jn",
    "destCode": "MAS",
    "dest": "Chennai Central"
  },
  {
    "number": "12656",
    "name": "Navajivan Express",
    "sourceCode": "MAS",
    "source": "Chennai Central",
    "destCode": "ADI",
    "dest": "Ahmedabad Jn"
  },
  {
    "number": "12657",
    "name": "Chennai Mangalore Mail",
    "sourceCode": "MAS",
    "source": "Chennai Central",
    "destCode": "MAQ",
    "dest": "Mangalore Central"
  },
  {
    "number": "12658",
    "name": "Mangalore Chennai Mail",
    "sourceCode": "MAQ",
    "source": "Mangalore Central",
    "destCode": "MAS",
    "dest": "Chennai Central"
  },
  {
    "number": "12659",
    "name": "Gurudev Express",
    "sourceCode": "NCJ",
    "source": "Nagercoil Jn",
    "destCode": "SHM",
    "dest": "Kolkata Shalimar"
  },
  {
    "number": "12660",
    "name": "Shalimar-Nagercoil Gurudev Express",
    "sourceCode": "SHM",
    "source": "Kolkata Shalimar",
    "destCode": "NCJ",
    "dest": "Nagercoil Jn"
  },
  {
    "number": "12661",
    "name": "CHENNAI EGMORE - SENGOTTAI Pothigai SF Exp",
    "sourceCode": "MS",
    "source": "Chennai Egmore",
    "destCode": "SCT",
    "dest": "Sengottai"
  },
  {
    "number": "12662",
    "name": "SENGOTTAI - CHENNAI EGMORE Pothigai SF Exp",
    "sourceCode": "SCT",
    "source": "Sengottai",
    "destCode": "MS",
    "dest": "Chennai Egmore"
  },
  {
    "number": "12663",
    "name": "Howrah-Tiruchirappalli Express",
    "sourceCode": "HWH",
    "source": "Howrah Jn",
    "destCode": "TPJ",
    "dest": "Tiruchirappalli"
  },
  {
    "number": "12664",
    "name": "Tiruchirappalli-Howrah Express",
    "sourceCode": "TPJ",
    "source": "Tiruchirappalli",
    "destCode": "HWH",
    "dest": "Howrah Jn"
  },
  {
    "number": "12665",
    "name": "HOWRAH - KANNIYAKUMARI SF Exp",
    "sourceCode": "HWH",
    "source": "Howrah Jn",
    "destCode": "CAPE",
    "dest": "Kanyakumari"
  },
  {
    "number": "12666",
    "name": "KANYAKUMARI - KOL HOWRAH Weekly Exp",
    "sourceCode": "CAPE",
    "source": "Kanyakumari",
    "destCode": "HWH",
    "dest": "Howrah Jn"
  },
  {
    "number": "12667",
    "name": "CHENNAI EGMORE - NAGERCOIL SF Exp",
    "sourceCode": "MS",
    "source": "Chennai Egmore",
    "destCode": "NCJ",
    "dest": "Nagercoil Jn"
  },
  {
    "number": "12668",
    "name": "NAGERCOIL - CHENNAI EGMORE SF Exp",
    "sourceCode": "NCJ",
    "source": "Nagercoil Jn",
    "destCode": "MS",
    "dest": "Chennai Egmore"
  },
  {
    "number": "12669",
    "name": "CHENNAI CENTRAL - CHHAPRA Ganga Kaveri Exp",
    "sourceCode": "MAS",
    "source": "Chennai Central",
    "destCode": "CPR",
    "dest": "Chhapra"
  },
  {
    "number": "12670",
    "name": "CHHAPRA - CHENNAI CENTRAL Ganga Kaveri Exp",
    "sourceCode": "CPR",
    "source": "Chhapra",
    "destCode": "MAS",
    "dest": "Chennai Central"
  },
  {
    "number": "12671",
    "name": "Nilgiri (Blue Mountain) Express",
    "sourceCode": "MAS",
    "source": "Chennai Central",
    "destCode": "MTP",
    "dest": "Mettupalayam"
  },
  {
    "number": "12672",
    "name": "Nilgiri (Blue Mountain) Express",
    "sourceCode": "MTP",
    "source": "Mettupalayam",
    "destCode": "MAS",
    "dest": "Chennai Central"
  },
  {
    "number": "12673",
    "name": "Cheran SF Express",
    "sourceCode": "MAS",
    "source": "Chennai Central",
    "destCode": "CBE",
    "dest": "Coimbatore"
  },
  {
    "number": "12674",
    "name": "Cheran SF Express",
    "sourceCode": "CBE",
    "source": "Coimbatore",
    "destCode": "MAS",
    "dest": "Chennai Central"
  },
  {
    "number": "12675",
    "name": "Kovai Express",
    "sourceCode": "MAS",
    "source": "Chennai Central",
    "destCode": "CBE",
    "dest": "Coimbatore Jn"
  },
  {
    "number": "12676",
    "name": "Kovai Express",
    "sourceCode": "CBE",
    "source": "Coimbatore Jn",
    "destCode": "MAS",
    "dest": "Chennai Central"
  },
  {
    "number": "12677",
    "name": "Ernakulam SF Express",
    "sourceCode": "MAS",
    "source": "Chennai Central",
    "destCode": "ERS",
    "dest": "Ernakulam"
  },
  {
    "number": "12678",
    "name": "Ernakulam SF Express",
    "sourceCode": "ERS",
    "source": "Ernakulam",
    "destCode": "MAS",
    "dest": "Chennai Central"
  },
  {
    "number": "12679",
    "name": "ChennaiCentral-Coimbatore InterCity",
    "sourceCode": "MAS",
    "source": "Chennai Central",
    "destCode": "CBE",
    "dest": "Coimbatore Jn"
  },
  {
    "number": "12680",
    "name": "Coimbatore-Chennai Central InterCity SF Express",
    "sourceCode": "CBE",
    "source": "Coimbatore Jn",
    "destCode": "MAS",
    "dest": "Chennai Central"
  },
  {
    "number": "12681",
    "name": "Chennai-Coimbatore Express",
    "sourceCode": "MAS",
    "source": "Chennai Central",
    "destCode": "CBE",
    "dest": "Coimbatore Jn"
  },
  {
    "number": "12682",
    "name": "Coimbatore-Chennai Express",
    "sourceCode": "CBE",
    "source": "Coimbatore Jn",
    "destCode": "MAS",
    "dest": "Chennai Central"
  },
  {
    "number": "12683",
    "name": "ERNAKULAM - BANGALORE SF Exp",
    "sourceCode": "ERS",
    "source": "Ernakulam Jn",
    "destCode": "SBC",
    "dest": "Bangalore City Jn"
  },
  {
    "number": "12684",
    "name": "BANGALORE - ERNAKULAM SF Exp",
    "sourceCode": "SBC",
    "source": "Bangalore City Jn",
    "destCode": "ERS",
    "dest": "Ernakulam Jn"
  },
  {
    "number": "12685",
    "name": "Chennai - Mangalore Express",
    "sourceCode": "MAS",
    "source": "Chennai Central",
    "destCode": "MAQ",
    "dest": "Mangalore Cntl"
  },
  {
    "number": "12686",
    "name": "Mangalore - Chennai Express",
    "sourceCode": "MAQ",
    "source": "Mangalore Cntl",
    "destCode": "MAS",
    "dest": "Chennai Central"
  },
  {
    "number": "12687",
    "name": "Chennai Dehradun Express",
    "sourceCode": "MAS",
    "source": "Chennai Central",
    "destCode": "DDN",
    "dest": "Dehradun"
  },
  {
    "number": "12688",
    "name": "Dehradun Chennai Express",
    "sourceCode": "DDN",
    "source": "Dehradun",
    "destCode": "MAS",
    "dest": "Chennai Central"
  },
  {
    "number": "12689",
    "name": "CHENNAI CENTRAL - NAGERCOIL SF Exp",
    "sourceCode": "MAS",
    "source": "Chennai Central",
    "destCode": "NCJ",
    "dest": "Nagercoil Jn"
  },
  {
    "number": "12690",
    "name": "NAGERCOIL - CHENNAI SF Exp",
    "sourceCode": "NCJ",
    "source": "Nagercoil Jn",
    "destCode": "MAS",
    "dest": "Chennai Central"
  },
  {
    "number": "12691",
    "name": "CHENNAI - SSP NILAYAM SF Exp",
    "sourceCode": "MAS",
    "source": "Chennai Central",
    "destCode": "SSPN",
    "dest": "Satya Sai P Nilayam"
  },
  {
    "number": "12692",
    "name": "SSP NILAYAM - CHENNAI SF Exp",
    "sourceCode": "SSPN",
    "source": "Satya Sai P Nilayam",
    "destCode": "MAS",
    "dest": "Chennai Central"
  },
  {
    "number": "12693",
    "name": "Pearl City SF Express",
    "sourceCode": "MAS",
    "source": "Chennai Central",
    "destCode": "TEN",
    "dest": "Tirunelveli"
  },
  {
    "number": "12694",
    "name": "Pearl City SF Express",
    "sourceCode": "TEN",
    "source": "Tirunelveli",
    "destCode": "MAS",
    "dest": "Chennai Central"
  },
  {
    "number": "12695",
    "name": "Trivandrum SF Express",
    "sourceCode": "MAS",
    "source": "Chennai Central",
    "destCode": "TVC",
    "dest": "Trivandrum Central"
  },
  {
    "number": "12696",
    "name": "Trivandrum SF Express",
    "sourceCode": "TVC",
    "source": "Trivandrum Central",
    "destCode": "MAS",
    "dest": "Chennai Central"
  },
  {
    "number": "12697",
    "name": "Chennai Trivandrum Express",
    "sourceCode": "MAS",
    "source": "Chennai Central",
    "destCode": "TVC",
    "dest": "Trivandrum Central"
  },
  {
    "number": "12698",
    "name": "Trivandrum Chennai Express",
    "sourceCode": "TVC",
    "source": "Trivandrum Central",
    "destCode": "MAS",
    "dest": "Chennai Central"
  },
  {
    "number": "12701",
    "name": "Hussain Sagar Express",
    "sourceCode": "CSTM",
    "source": "Mumbai Cst",
    "destCode": "HYB",
    "dest": "Hyderabad Deccan"
  },
  {
    "number": "12702",
    "name": "Hussain Sagar Express",
    "sourceCode": "HYB",
    "source": "Hyderabad Deccan",
    "destCode": "CSTM",
    "dest": "Mumbai Cst"
  },
  {
    "number": "12703",
    "name": "Howrah - Secunderabad Falaknuma SF Express",
    "sourceCode": "HWH",
    "source": "Howrah Jn",
    "destCode": "SC",
    "dest": "Secunderabad Jn"
  },
  {
    "number": "12704",
    "name": "Falaknuma Express",
    "sourceCode": "SC",
    "source": "Secunderabad Jn",
    "destCode": "HWH",
    "dest": "Howrah Jn"
  },
  {
    "number": "12705",
    "name": "Guntur-Secunderabad SF Intercity",
    "sourceCode": "GNT",
    "source": "Guntur Jn",
    "destCode": "SC",
    "dest": "Secunderabad Jn"
  },
  {
    "number": "12706",
    "name": "Secunderabad-Guntur SF Intercity",
    "sourceCode": "SC",
    "source": "Secunderabad Jn",
    "destCode": "GNT",
    "dest": "Guntur Jn"
  },
  {
    "number": "12707",
    "name": "Andhra Pradesh Sampark Kranti Express",
    "sourceCode": "TPTY",
    "source": "Tirupati Main",
    "destCode": "NZM",
    "dest": "Delhi H Nizamuddin"
  },
  {
    "number": "12708",
    "name": "Andhra Pradesh Sampark Kranti Express",
    "sourceCode": "NZM",
    "source": "Delhi H Nizamuddin",
    "destCode": "TPTY",
    "dest": "Tirupati Main"
  },
  {
    "number": "12709",
    "name": "Simhapuri SF Express",
    "sourceCode": "GDR",
    "source": "Gudur Jn",
    "destCode": "SC",
    "dest": "Secunderabad Jn"
  },
  {
    "number": "12710",
    "name": "Simhapuri SF Express",
    "sourceCode": "SC",
    "source": "Secunderabad Jn",
    "destCode": "GDR",
    "dest": "Gudur Jn"
  },
  {
    "number": "12711",
    "name": "Pinakini Express",
    "sourceCode": "BZA",
    "source": "Vijayawada Jn",
    "destCode": "MAS",
    "dest": "Chennai Central"
  },
  {
    "number": "12712",
    "name": "Pinakini Express",
    "sourceCode": "MAS",
    "source": "Chennai Central",
    "destCode": "BZA",
    "dest": "Vijayawada Jn"
  },
  {
    "number": "12713",
    "name": "Satavahana Express",
    "sourceCode": "BZA",
    "source": "Vijayawada Jn",
    "destCode": "SC",
    "dest": "Secunderabad Jn"
  },
  {
    "number": "12714",
    "name": "Satavahana Express",
    "sourceCode": "SC",
    "source": "Secunderabad Jn",
    "destCode": "BZA",
    "dest": "Vijayawada Jn"
  },
  {
    "number": "12715",
    "name": "Sachkhand SF Express",
    "sourceCode": "NED",
    "source": "Huzur Sahib Nanded",
    "destCode": "ASR",
    "dest": "Amritsar Jn"
  },
  {
    "number": "12716",
    "name": "Sachkhand SF Express",
    "sourceCode": "ASR",
    "source": "Amritsar Jn",
    "destCode": "NED",
    "dest": "Huzur Sahib Nanded"
  },
  {
    "number": "12717",
    "name": "Ratnachal SF Express",
    "sourceCode": "VSKP",
    "source": "Vishakapatnam",
    "destCode": "BZA",
    "dest": "Vijayawada Jn"
  },
  {
    "number": "12718",
    "name": "Ratnachal SF Express",
    "sourceCode": "BZA",
    "source": "Vijayawada Jn",
    "destCode": "VSKP",
    "dest": "Vishakapatnam"
  },
  {
    "number": "12719",
    "name": "AJMER - HYDERABAD DECCAN SF Exp",
    "sourceCode": "AII",
    "source": "Ajmer Jn",
    "destCode": "HYB",
    "dest": "Hyderabad Deccan"
  },
  {
    "number": "12720",
    "name": "HYDERABAD DECCAN - AJMER SF Exp",
    "sourceCode": "HYB",
    "source": "Hyderabad Deccan",
    "destCode": "AII",
    "dest": "Ajmer Jn"
  },
  {
    "number": "12721",
    "name": "Dakshin SF Express",
    "sourceCode": "HYB",
    "source": "Hyderabad Deccan",
    "destCode": "NZM",
    "dest": "Delhi H Nizamuddin"
  },
  {
    "number": "12722",
    "name": "Dakshin SF Express",
    "sourceCode": "NZM",
    "source": "Delhi H Nizamuddin",
    "destCode": "HYB",
    "dest": "Hyderabad Deccan"
  },
  {
    "number": "12723",
    "name": "Andhra Pradesh Express",
    "sourceCode": "HYB",
    "source": "Hyderabad Deccan",
    "destCode": "NDLS",
    "dest": "New Delhi"
  },
  {
    "number": "12724",
    "name": "Andhra Pradesh Express",
    "sourceCode": "NDLS",
    "source": "New Delhi",
    "destCode": "HYB",
    "dest": "Hyderabad Deccan"
  },
  {
    "number": "12725",
    "name": "Siddhaganga Intercity Express",
    "sourceCode": "SBC",
    "source": "Bangalore City Jn",
    "destCode": "DWR",
    "dest": "Dharwar"
  },
  {
    "number": "12726",
    "name": "Siddhaganga InterCity Express",
    "sourceCode": "DWR",
    "source": "Dharwar",
    "destCode": "SBC",
    "dest": "Bangalore City Jn"
  },
  {
    "number": "12727",
    "name": "Godavari SF Express",
    "sourceCode": "VSKP",
    "source": "Vishakapatnam",
    "destCode": "HYB",
    "dest": "Hyderabad Deccan"
  },
  {
    "number": "12728",
    "name": "Godavari SF Express",
    "sourceCode": "HYB",
    "source": "Hyderabad Deccan",
    "destCode": "VSKP",
    "dest": "Vishakapatnam"
  },
  {
    "number": "12729",
    "name": "Pune-Nanded Express",
    "sourceCode": "PUNE",
    "source": "Pune Jn",
    "destCode": "NED",
    "dest": "Huzur Sahib Nanded"
  },
  {
    "number": "12730",
    "name": "Nanded-Pune SuperFast Express",
    "sourceCode": "NED",
    "source": "Huzur Sahib Nanded",
    "destCode": "PUNE",
    "dest": "Pune Jn"
  },
  {
    "number": "12731",
    "name": "Tirupati-Secunderabad Express",
    "sourceCode": "TPTY",
    "source": "Tirupati Main",
    "destCode": "SC",
    "dest": "Secunderabad Jn"
  },
  {
    "number": "12732",
    "name": "Secunderabad-Tirupati Express",
    "sourceCode": "SC",
    "source": "Secunderabad Jn",
    "destCode": "TPTY",
    "dest": "Tirupati Main"
  },
  {
    "number": "12733",
    "name": "Narayanadri Express",
    "sourceCode": "TPTY",
    "source": "Tirupati Main",
    "destCode": "SC",
    "dest": "Secunderabad Jn"
  },
  {
    "number": "12734",
    "name": "Narayanadri Express",
    "sourceCode": "SC",
    "source": "Secunderabad Jn",
    "destCode": "TPTY",
    "dest": "Tirupati Main"
  },
  {
    "number": "12735",
    "name": "SECUNDERABAD - YESVANTPUR Garib Rath Exp",
    "sourceCode": "SC",
    "source": "Secunderabad Jn",
    "destCode": "YPR",
    "dest": "Yesvantpur Jn"
  },
  {
    "number": "12736",
    "name": "YESVANTPUR - SECUNDERABAD Garib Rath Exp",
    "sourceCode": "YPR",
    "source": "Yesvantpur Jn",
    "destCode": "SC",
    "dest": "Secunderabad Jn"
  },
  {
    "number": "12737",
    "name": "Gowthami SF Express",
    "sourceCode": "COA",
    "source": "Kakinada Port",
    "destCode": "SC",
    "dest": "Secunderabad Jn"
  },
  {
    "number": "12738",
    "name": "Secunderabad - Kakinada Gowthami SF Express",
    "sourceCode": "SC",
    "source": "Secunderabad Jn",
    "destCode": "COA",
    "dest": "Kakinada Port"
  },
  {
    "number": "12739",
    "name": "Visakhapatnam Secunderabad Garib Rath Express",
    "sourceCode": "VSKP",
    "source": "Vishakapatnam",
    "destCode": "SC",
    "dest": "Secunderabad Jn"
  },
  {
    "number": "12740",
    "name": "Secunderabad-Visakhapatnam Garib Rath",
    "sourceCode": "SC",
    "source": "Secunderabad Jn",
    "destCode": "VSKP",
    "dest": "Vishakapatnam"
  },
  {
    "number": "12741",
    "name": "VASCO DA GAMA - PATNA SF Exp",
    "sourceCode": "VSG",
    "source": "Vasco Da Gama",
    "destCode": "PNBE",
    "dest": "Patna Jn"
  },
  {
    "number": "12742",
    "name": "PATNA - VASCO DA GAMA SF Exp",
    "sourceCode": "PNBE",
    "source": "Patna Jn",
    "destCode": "VSG",
    "dest": "Vasco Da Gama"
  },
  {
    "number": "12747",
    "name": "Palnadu Express",
    "sourceCode": "GNT",
    "source": "Guntur Jn",
    "destCode": "VKB",
    "dest": "Vikarabad Jn"
  },
  {
    "number": "12748",
    "name": "Palnadu Express",
    "sourceCode": "VKB",
    "source": "Vikarabad Jn",
    "destCode": "GNT",
    "dest": "Guntur Jn"
  },
  {
    "number": "12750",
    "name": "Mumbai LTT-Visakhapatnam SF Express",
    "sourceCode": "LTT",
    "source": "Lokmanya Tilak Term",
    "destCode": "VSKP",
    "dest": "Vishakapatnam"
  },
  {
    "number": "12751",
    "name": "Manuguru-Secunderabad Tri Weekly SF Express",
    "sourceCode": "MUGR",
    "source": "Manuguru",
    "destCode": "SC",
    "dest": "Secunderabad Jn"
  },
  {
    "number": "12752",
    "name": "Secunderabad-Manuguru SF Express",
    "sourceCode": "SC",
    "source": "Secunderabad Jn",
    "destCode": "MUGR",
    "dest": "Manuguru"
  },
  {
    "number": "12753",
    "name": "Chennai-NewJalpaiguri SF Express",
    "sourceCode": "MAS",
    "source": "Chennai Central",
    "destCode": "NJP",
    "dest": "New Jalpaiguri"
  },
  {
    "number": "12754",
    "name": "New Jalpaiguri-Chennai SF Express",
    "sourceCode": "NJP",
    "source": "New Jalpaiguri",
    "destCode": "MAS",
    "dest": "Chennai Central"
  },
  {
    "number": "12755",
    "name": "Sangrami SF Expres",
    "sourceCode": "MAS",
    "source": "Chennai Central",
    "destCode": "HLZ",
    "dest": "Haldia"
  },
  {
    "number": "12756",
    "name": "Sangrami Expres",
    "sourceCode": "HLZ",
    "source": "Haldia",
    "destCode": "MAS",
    "dest": "Chennai Central"
  },
  {
    "number": "12757",
    "name": "Tirupati-Coimbatore Intercity Express",
    "sourceCode": "TPTY",
    "source": "Tirupati Main",
    "destCode": "CBE",
    "dest": "Coimbatore Jn"
  },
  {
    "number": "12758",
    "name": "Coimbatore-Tirupati (Triweekly) SF Intercity Expre",
    "sourceCode": "CBE",
    "source": "Coimbatore Jn",
    "destCode": "TPTY",
    "dest": "Tirupati Main"
  },
  {
    "number": "12759",
    "name": "Charminar Express",
    "sourceCode": "MAS",
    "source": "Chennai Central",
    "destCode": "HYB",
    "dest": "Hyderabad Deccan"
  },
  {
    "number": "12760",
    "name": "Charminar Express",
    "sourceCode": "HYB",
    "source": "Hyderabad Deccan",
    "destCode": "MAS",
    "dest": "Chennai Central"
  },
  {
    "number": "12763",
    "name": "Padmavati Express",
    "sourceCode": "TPTY",
    "source": "Tirupati Main",
    "destCode": "SC",
    "dest": "Secunderabad Jn"
  },
  {
    "number": "12764",
    "name": "Padmavati Express",
    "sourceCode": "SC",
    "source": "Secunderabad Jn",
    "destCode": "TPTY",
    "dest": "Tirupati Main"
  },
  {
    "number": "12777",
    "name": "HUBLI - TRIVANDRUM KOCHUVELI SF Exp",
    "sourceCode": "UBL",
    "source": "Hubli Jn",
    "destCode": "KCVL",
    "dest": "Kochuveli"
  },
  {
    "number": "12778",
    "name": "TRIVANDRUM KOCHUVELI - HUBLI SF Exp",
    "sourceCode": "KCVL",
    "source": "Kochuveli",
    "destCode": "UBL",
    "dest": "Hubli Jn"
  },
  {
    "number": "12779",
    "name": "VASCO DA GAMA - DELHI H NIZAMUDDIN Goa Exp",
    "sourceCode": "VSG",
    "source": "Vasco Da Gama",
    "destCode": "NZM",
    "dest": "Delhi H Nizamuddin"
  },
  {
    "number": "12780",
    "name": "DELHI H NIZAMUDDIN - VASCO DA GAMA Goa Exp",
    "sourceCode": "NZM",
    "source": "Delhi H Nizamuddin",
    "destCode": "VSG",
    "dest": "Vasco Da Gama"
  },
  {
    "number": "12781",
    "name": "Mysore-Nizamuddin Swarna Jayanti Express",
    "sourceCode": "MYS",
    "source": "Mysore Jn",
    "destCode": "NZM",
    "dest": "Delhi H Nizamuddin"
  },
  {
    "number": "12782",
    "name": "Nizamuddin-Mysore Swarna Jayanti Express",
    "sourceCode": "NZM",
    "source": "Delhi H Nizamuddin",
    "destCode": "MYS",
    "dest": "Mysore Jn"
  },
  {
    "number": "12785",
    "name": "Kacheguda-Bangalore SF Express",
    "sourceCode": "KCG",
    "source": "Kacheguda",
    "destCode": "SBC",
    "dest": "Bangalore City Jn"
  },
  {
    "number": "12786",
    "name": "Bangalore-Kacheguda SF Express",
    "sourceCode": "SBC",
    "source": "Bangalore City Jn",
    "destCode": "KCG",
    "dest": "Kacheguda"
  },
  {
    "number": "12787",
    "name": "Bilaspur Tirunelveli SF Express",
    "sourceCode": "BSP",
    "source": "Bilaspur Jn",
    "destCode": "TEN",
    "dest": "Tirunelveli"
  },
  {
    "number": "12788",
    "name": "Tirunelveli Bilaspur SF Express",
    "sourceCode": "TEN",
    "source": "Tirunelveli",
    "destCode": "BSP",
    "dest": "Bilaspur Jn"
  },
  {
    "number": "12789",
    "name": "Rameswaram Kanyakumari SF Express",
    "sourceCode": "RMM",
    "source": "Rameswaram",
    "destCode": "CAPE",
    "dest": "Kanyakumari"
  },
  {
    "number": "12790",
    "name": "Kanyakumari Rameswaram SF Express",
    "sourceCode": "CAPE",
    "source": "Kanyakumari",
    "destCode": "RMM",
    "dest": "Rameswaram"
  },
  {
    "number": "12793",
    "name": "Chennai Egmore Madurai BI-Weekly Superfast Express",
    "sourceCode": "MS",
    "source": "Chennai Egmore",
    "destCode": "MDU",
    "dest": "Madurai Jn"
  },
  {
    "number": "12794",
    "name": "Madurai Chennai Egmore BI-Weekly Superfast Express",
    "sourceCode": "MDU",
    "source": "Madurai Jn",
    "destCode": "MS",
    "dest": "Chennai Egmore"
  },
  {
    "number": "12797",
    "name": "Venkatadri SF Express",
    "sourceCode": "KCG",
    "source": "Kacheguda",
    "destCode": "CTO",
    "dest": "Chittoor"
  },
  {
    "number": "12798",
    "name": "Venkatadri SF Express",
    "sourceCode": "CTO",
    "source": "Chittoor",
    "destCode": "KCG",
    "dest": "Kacheguda"
  },
  {
    "number": "12801",
    "name": "Purushottam SF Express",
    "sourceCode": "PURI",
    "source": "Puri",
    "destCode": "NDLS",
    "dest": "New Delhi"
  },
  {
    "number": "12802",
    "name": "Purushottam SF Express",
    "sourceCode": "NDLS",
    "source": "New Delhi",
    "destCode": "PURI",
    "dest": "Puri"
  },
  {
    "number": "12803",
    "name": "Visakhapatnam-Nizamuddin SwarnaJayanthi Express",
    "sourceCode": "VSKP",
    "source": "Vishakapatnam",
    "destCode": "NZM",
    "dest": "Delhi H Nizamuddin"
  },
  {
    "number": "12804",
    "name": "Swarna Jayanti Express",
    "sourceCode": "NZM",
    "source": "Delhi H Nizamuddin",
    "destCode": "VSKP",
    "dest": "Vishakapatnam"
  },
  {
    "number": "12805",
    "name": "Janmabhoomi Express",
    "sourceCode": "VSKP",
    "source": "Vishakapatnam",
    "destCode": "SC",
    "dest": "Secunderabad Jn"
  },
  {
    "number": "12806",
    "name": "Janmabhoomi Express",
    "sourceCode": "SC",
    "source": "Secunderabad Jn",
    "destCode": "VSKP",
    "dest": "Vishakapatnam"
  },
  {
    "number": "12807",
    "name": "Samata Express",
    "sourceCode": "VSKP",
    "source": "Vishakapatnam",
    "destCode": "NZM",
    "dest": "Delhi H Nizamuddin"
  },
  {
    "number": "12808",
    "name": "Samata Express",
    "sourceCode": "NZM",
    "source": "Delhi H Nizamuddin",
    "destCode": "VSKP",
    "dest": "Vishakapatnam"
  },
  {
    "number": "12809",
    "name": "MUMBAI CST - HOWRAH SF Mail (via NAGPUR)",
    "sourceCode": "CSTM",
    "source": "Mumbai Cst",
    "destCode": "HWH",
    "dest": "Howrah Jn"
  },
  {
    "number": "12810",
    "name": "HOWRAH - MUMBAI CST SF Mail (via NAGPUR)",
    "sourceCode": "HWH",
    "source": "Howrah Jn",
    "destCode": "CSTM",
    "dest": "Mumbai Cst"
  },
  {
    "number": "12811",
    "name": "MUMBAI - HATIA LTT SF Exp",
    "sourceCode": "LTT",
    "source": "Lokmanya Tilak Term",
    "destCode": "HTE",
    "dest": "Hatia"
  },
  {
    "number": "12812",
    "name": "HATIA - MUMBAI LTT SF Exp",
    "sourceCode": "HTE",
    "source": "Hatia",
    "destCode": "LTT",
    "dest": "Lokmanya Tilak Term"
  },
  {
    "number": "12813",
    "name": "Steel Express",
    "sourceCode": "HWH",
    "source": "Howrah Jn",
    "destCode": "TATA",
    "dest": "Tatanagar Jn"
  },
  {
    "number": "12814",
    "name": "Steel Express",
    "sourceCode": "TATA",
    "source": "Tatanagar Jn",
    "destCode": "HWH",
    "dest": "Howrah Jn"
  },
  {
    "number": "12815",
    "name": "Puri New Delhi Superfast Express",
    "sourceCode": "PURI",
    "source": "Puri",
    "destCode": "NDLS",
    "dest": "New Delhi"
  },
  {
    "number": "12816",
    "name": "New Delhi-Puri Superfast Express",
    "sourceCode": "NDLS",
    "source": "New Delhi",
    "destCode": "PURI",
    "dest": "Puri"
  },
  {
    "number": "12817",
    "name": "Jharkhand Swarna Jayanti SF Express",
    "sourceCode": "HTE",
    "source": "Hatia",
    "destCode": "ANVT",
    "dest": "Anand Vihar Trm"
  },
  {
    "number": "12818",
    "name": "Jharkhand Swarna Jayanti Express",
    "sourceCode": "ANVT",
    "source": "Anand Vihar Trm",
    "destCode": "HTE",
    "dest": "Hatia"
  },
  {
    "number": "12819",
    "name": "Orissa Sampark Kranti Express",
    "sourceCode": "BBS",
    "source": "Bhubaneswar",
    "destCode": "NDLS",
    "dest": "New Delhi"
  },
  {
    "number": "12820",
    "name": "Orissa Sampark Kranti Express",
    "sourceCode": "NDLS",
    "source": "New Delhi",
    "destCode": "BBS",
    "dest": "Bhubaneswar"
  },
  {
    "number": "12821",
    "name": "Dhauli Express",
    "sourceCode": "HWH",
    "source": "Howrah Jn",
    "destCode": "PURI",
    "dest": "Puri"
  },
  {
    "number": "12822",
    "name": "Dhauli Express",
    "sourceCode": "PURI",
    "source": "Puri",
    "destCode": "HWH",
    "dest": "Howrah Jn"
  },
  {
    "number": "12823",
    "name": "Chhattisgarh Sampark Kranti Express",
    "sourceCode": "DURG",
    "source": "Durg",
    "destCode": "NZM",
    "dest": "Delhi H Nizamuddin"
  },
  {
    "number": "12824",
    "name": "Chhattisgarh Sampark Kranti Express",
    "sourceCode": "NZM",
    "source": "Delhi H Nizamuddin",
    "destCode": "DURG",
    "dest": "Durg"
  },
  {
    "number": "12825",
    "name": "Jharkhand Sampark Kranti Express",
    "sourceCode": "RNC",
    "source": "Ranchi",
    "destCode": "NDLS",
    "dest": "New Delhi"
  },
  {
    "number": "12826",
    "name": "Jharkhand Sampark Kranti Express",
    "sourceCode": "NDLS",
    "source": "New Delhi",
    "destCode": "RNC",
    "dest": "Ranchi"
  },
  {
    "number": "12827",
    "name": "Howrah Purulia Express",
    "sourceCode": "HWH",
    "source": "Howrah Jn",
    "destCode": "PRR",
    "dest": "Purulia Jn"
  },
  {
    "number": "12828",
    "name": "Howrah Express",
    "sourceCode": "PRR",
    "source": "Purulia Jn",
    "destCode": "HWH",
    "dest": "Howrah Jn"
  },
  {
    "number": "12829",
    "name": "Chennai Bhubaneswar SF Express",
    "sourceCode": "MAS",
    "source": "Chennai Central",
    "destCode": "BBS",
    "dest": "Bhubaneswar"
  },
  {
    "number": "12830",
    "name": "Bhubaneswar Chennai Superfast Express",
    "sourceCode": "BBS",
    "source": "Bhubaneswar",
    "destCode": "MAS",
    "dest": "Chennai Central"
  },
  {
    "number": "12831",
    "name": "DHANBAD - BHUBANESWAR Garib Rath Exp",
    "sourceCode": "DHN",
    "source": "Dhanbad Jn",
    "destCode": "BBS",
    "dest": "Bhubaneswar"
  },
  {
    "number": "12832",
    "name": "BHUBANESWAR - DHANBAD Garib Rath Exp",
    "sourceCode": "BBS",
    "source": "Bhubaneswar",
    "destCode": "DHN",
    "dest": "Dhanbad Jn"
  },
  {
    "number": "12833",
    "name": "AHMEDABAD - HOWRAH SF EXP",
    "sourceCode": "ADI",
    "source": "Ahmedabad Jn",
    "destCode": "HWH",
    "dest": "Howrah Jn"
  },
  {
    "number": "12834",
    "name": "HOWRAH - AHMEDABAD SF EXP",
    "sourceCode": "HWH",
    "source": "Howrah Jn",
    "destCode": "ADI",
    "dest": "Ahmedabad Jn"
  },
  {
    "number": "12835",
    "name": "HATIA - YESVANTPUR SF Exp",
    "sourceCode": "HTE",
    "source": "Hatia",
    "destCode": "YPR",
    "dest": "Yesvantpur Jn"
  },
  {
    "number": "12836",
    "name": "YESVANTPUR - HATIA SF Exp",
    "sourceCode": "YPR",
    "source": "Yesvantpur Jn",
    "destCode": "HTE",
    "dest": "Hatia"
  },
  {
    "number": "12837",
    "name": "Howrah-Puri Express",
    "sourceCode": "HWH",
    "source": "Howrah Jn",
    "destCode": "PURI",
    "dest": "Puri"
  },
  {
    "number": "12838",
    "name": "Puri Howrah Express",
    "sourceCode": "PURI",
    "source": "Puri",
    "destCode": "HWH",
    "dest": "Howrah Jn"
  },
  {
    "number": "12839",
    "name": "Howrah Chennai Mail",
    "sourceCode": "HWH",
    "source": "Howrah",
    "destCode": "MAS",
    "dest": "Chennai Central"
  },
  {
    "number": "12840",
    "name": "Chennai Howrah Mail",
    "sourceCode": "MAS",
    "source": "Chennai Central",
    "destCode": "HWH",
    "dest": "Howrah"
  },
  {
    "number": "12841",
    "name": "Coromandel Express",
    "sourceCode": "HWH",
    "source": "Howrah",
    "destCode": "MAS",
    "dest": "Chennai Central"
  },
  {
    "number": "12842",
    "name": "Coromandel Express",
    "sourceCode": "MAS",
    "source": "Chennai Central",
    "destCode": "HWH",
    "dest": "Howrah"
  },
  {
    "number": "12843",
    "name": "Puri Ahmedabad Superfast Express",
    "sourceCode": "PURI",
    "source": "Puri",
    "destCode": "ADI",
    "dest": "Ahmedabad Jn"
  },
  {
    "number": "12844",
    "name": "Ahmedabad Puri Superfast Express",
    "sourceCode": "ADI",
    "source": "Ahmedabad Jn",
    "destCode": "PURI",
    "dest": "Puri"
  },
  {
    "number": "12847",
    "name": "Howrah-Digha AC Duronto Express",
    "sourceCode": "HWH",
    "source": "Howrah Jn",
    "destCode": "DGHA",
    "dest": "Digha Flag Station"
  },
  {
    "number": "12848",
    "name": "Digha-Howrah AC Duronto Express",
    "sourceCode": "DGHA",
    "source": "Digha Flag Station",
    "destCode": "HWH",
    "dest": "Howrah Jn"
  },
  {
    "number": "12849",
    "name": "Bilaspur Pune SF Express",
    "sourceCode": "BSP",
    "source": "Bilaspur Jn",
    "destCode": "PUNE",
    "dest": "Pune Jn"
  },
  {
    "number": "12850",
    "name": "Pune Bilaspur Superfast Express",
    "sourceCode": "PUNE",
    "source": "Pune Jn",
    "destCode": "BSP",
    "dest": "Bilaspur Jn"
  },
  {
    "number": "12851",
    "name": "Bilaspur-Chennai Express",
    "sourceCode": "BSP",
    "source": "Bilaspur Jn",
    "destCode": "MAS",
    "dest": "Chennai Central"
  },
  {
    "number": "12852",
    "name": "Chennai-Bilaspur Express",
    "sourceCode": "MAS",
    "source": "Chennai Central",
    "destCode": "BSP",
    "dest": "Bilaspur Jn"
  },
  {
    "number": "12853",
    "name": "DURG - BHOPAL Amarkantak SF Exp",
    "sourceCode": "DURG",
    "source": "Durg",
    "destCode": "BPL",
    "dest": "Bhopal Jn"
  },
  {
    "number": "12854",
    "name": "BHOPAL - DURG Amarkantak SF Exp",
    "sourceCode": "BPL",
    "source": "Bhopal Jn",
    "destCode": "DURG",
    "dest": "Durg"
  },
  {
    "number": "12855",
    "name": "Bilaspur-Nagpur InterCity",
    "sourceCode": "BSP",
    "source": "Bilaspur Jn",
    "destCode": "NGP",
    "dest": "Nagpur"
  },
  {
    "number": "12856",
    "name": "Nagpur-Bilaspur InterCity",
    "sourceCode": "NGP",
    "source": "Nagpur",
    "destCode": "BSP",
    "dest": "Bilaspur Jn"
  },
  {
    "number": "12857",
    "name": "Tamralipta Express",
    "sourceCode": "HWH",
    "source": "Howrah Jn",
    "destCode": "DGHA",
    "dest": "Digha Flag Station"
  },
  {
    "number": "12858",
    "name": "Tamralipta Express",
    "sourceCode": "DGHA",
    "source": "Digha Flag Station",
    "destCode": "HWH",
    "dest": "Howrah Jn"
  },
  {
    "number": "12859",
    "name": "MUMBAI CST - HOWRAH Gitanjali Exp",
    "sourceCode": "CSTM",
    "source": "Mumbai Cst",
    "destCode": "HWH",
    "dest": "Howrah Jn"
  },
  {
    "number": "12860",
    "name": "HOWRAH - MUMBAI CST Gitanjali Exp",
    "sourceCode": "HWH",
    "source": "Howrah Jn",
    "destCode": "CSTM",
    "dest": "Mumbai Cst"
  },
  {
    "number": "12861",
    "name": "Link Superfast Express",
    "sourceCode": "VSKP",
    "source": "Vishakapatnam",
    "destCode": "NZM",
    "dest": "Delhi H Nizamuddin"
  },
  {
    "number": "12862",
    "name": "LINK SUPERFAST EXPRESS",
    "sourceCode": "KZJ",
    "source": "Kazipet Jn",
    "destCode": "VSKP",
    "dest": "Vishakapatnam"
  },
  {
    "number": "12863",
    "name": "HOWRAH - YESVANTPUR SF Exp",
    "sourceCode": "HWH",
    "source": "Howrah Jn",
    "destCode": "YPR",
    "dest": "Yesvantpur Jn"
  },
  {
    "number": "12864",
    "name": "YESVANTPUR - HOWRAH SF Exp",
    "sourceCode": "YPR",
    "source": "Yesvantpur Jn",
    "destCode": "HWH",
    "dest": "Howrah Jn"
  },
  {
    "number": "12865",
    "name": "Lalmati Express",
    "sourceCode": "HWH",
    "source": "Howrah Jn",
    "destCode": "PRR",
    "dest": "Purulia Jn"
  },
  {
    "number": "12866",
    "name": "Lalmati Express",
    "sourceCode": "PRR",
    "source": "Purulia Jn",
    "destCode": "HWH",
    "dest": "Howrah Jn"
  },
  {
    "number": "12867",
    "name": "Howrah-Puducherry Express",
    "sourceCode": "HWH",
    "source": "Howrah Jn",
    "destCode": "PDY",
    "dest": "Puducherry"
  },
  {
    "number": "12868",
    "name": "Puducherry-Howrah (Aurobindo) Express",
    "sourceCode": "PDY",
    "source": "Puducherry",
    "destCode": "HWH",
    "dest": "Howrah Jn"
  },
  {
    "number": "12869",
    "name": "MUMBAI CST - HOWRAH SF Exp",
    "sourceCode": "CSTM",
    "source": "Mumbai Cst",
    "destCode": "HWH",
    "dest": "Howrah Jn"
  },
  {
    "number": "12870",
    "name": "HOWRAH - MUMBAI CST SF Exp",
    "sourceCode": "HWH",
    "source": "Howrah Jn",
    "destCode": "CSTM",
    "dest": "Mumbai Cst"
  },
  {
    "number": "12871",
    "name": "HOWRAH - TITLAGARH Ispat Exp",
    "sourceCode": "HWH",
    "source": "Howrah Jn",
    "destCode": "TIG",
    "dest": "Titlagarh"
  },
  {
    "number": "12872",
    "name": "TITLAGARH - HOWRAH Ispat Exp",
    "sourceCode": "TIG",
    "source": "Titlagarh",
    "destCode": "HWH",
    "dest": "Howrah Jn"
  },
  {
    "number": "12873",
    "name": "Jharkhand Swarna Jayanti Express",
    "sourceCode": "HTE",
    "source": "Hatia",
    "destCode": "ANVT",
    "dest": "Anand Vihar Trm"
  },
  {
    "number": "12874",
    "name": "Jharkhand Swarna Jayanti Express",
    "sourceCode": "ANVT",
    "source": "Anand Vihar Trm",
    "destCode": "HTE",
    "dest": "Hatia"
  },
  {
    "number": "12875",
    "name": "PURI - NEW DELHI Neelanchal SF Exp",
    "sourceCode": "PURI",
    "source": "Puri",
    "destCode": "NDLS",
    "dest": "New Delhi"
  },
  {
    "number": "12876",
    "name": "NEW DELHI - PURI Neelanchal SF Exp",
    "sourceCode": "NDLS",
    "source": "New Delhi",
    "destCode": "PURI",
    "dest": "Puri"
  },
  {
    "number": "12877",
    "name": "Ranchi-New Delhi Garib Rath",
    "sourceCode": "RNC",
    "source": "Ranchi",
    "destCode": "NDLS",
    "dest": "New Delhi"
  },
  {
    "number": "12878",
    "name": "New Delhi-Ranchi Garib Rath",
    "sourceCode": "NDLS",
    "source": "New Delhi",
    "destCode": "RNC",
    "dest": "Ranchi"
  },
  {
    "number": "12879",
    "name": "MUMBAI LTT - BHUBANESWAR SF Exp",
    "sourceCode": "LTT",
    "source": "Lokmanya Tilak Term",
    "destCode": "BBS",
    "dest": "Bhubaneswar"
  },
  {
    "number": "12880",
    "name": "BHUBANESWAR - MUMBAI LTT SF Exp",
    "sourceCode": "BBS",
    "source": "Bhubaneswar",
    "destCode": "LTT",
    "dest": "Lokmanya Tilak Term"
  },
  {
    "number": "12881",
    "name": "Howrah Puri Garib Rath",
    "sourceCode": "HWH",
    "source": "Howrah Jn",
    "destCode": "PURI",
    "dest": "Puri"
  },
  {
    "number": "12882",
    "name": "Puri Howrah Garib Rath",
    "sourceCode": "PURI",
    "source": "Puri",
    "destCode": "HWH",
    "dest": "Howrah Jn"
  },
  {
    "number": "12883",
    "name": "Rupashi Bangla Express",
    "sourceCode": "HWH",
    "source": "Howrah Jn",
    "destCode": "PRR",
    "dest": "Purulia Jn"
  },
  {
    "number": "12884",
    "name": "Rupashi Bangla Express",
    "sourceCode": "PRR",
    "source": "Purulia Jn",
    "destCode": "HWH",
    "dest": "Howrah Jn"
  },
  {
    "number": "12885",
    "name": "Aranyak Express",
    "sourceCode": "SHM",
    "source": "Kolkata Shalimar",
    "destCode": "BJE",
    "dest": "Bhojudih Junction"
  },
  {
    "number": "12886",
    "name": "Aranyak Express",
    "sourceCode": "BJE",
    "source": "Bhojudih Junction",
    "destCode": "SHM",
    "dest": "Kolkata Shalimar"
  },
  {
    "number": "12887",
    "name": "Howrah-Puri Express",
    "sourceCode": "HWH",
    "source": "Howrah Jn",
    "destCode": "PURI",
    "dest": "Puri"
  },
  {
    "number": "12888",
    "name": "Howrah Express",
    "sourceCode": "PURI",
    "source": "Puri",
    "destCode": "HWH",
    "dest": "Howrah Jn"
  },
  {
    "number": "12889",
    "name": "TATANAGAR - YESVANTPUR SF Exp",
    "sourceCode": "TATA",
    "source": "Tatanagar Jn",
    "destCode": "YPR",
    "dest": "Yesvantpur Jn"
  },
  {
    "number": "12890",
    "name": "YESVANTPUR - TATANAGAR SF Exp",
    "sourceCode": "YPR",
    "source": "Yesvantpur Jn",
    "destCode": "TATA",
    "dest": "Tatanagar Jn"
  },
  {
    "number": "12891",
    "name": "Baripada- Bhubaneswar Express",
    "sourceCode": "BPO",
    "source": "Baripada",
    "destCode": "BBS",
    "dest": "Bhubaneswar"
  },
  {
    "number": "12892",
    "name": "Bhubaneswar Baripada SF Express",
    "sourceCode": "BBS",
    "source": "Bhubaneswar",
    "destCode": "BPO",
    "dest": "Baripada"
  },
  {
    "number": "12893",
    "name": "BHUBANESWAR - BALANGIR SF Exp",
    "sourceCode": "BBS",
    "source": "Bhubaneswar",
    "destCode": "BLGR",
    "dest": "Balangir"
  },
  {
    "number": "12894",
    "name": "BALANGIR - BHUBANESWAR SF Exp",
    "sourceCode": "BLGR",
    "source": "Balangir",
    "destCode": "BBS",
    "dest": "Bhubaneswar"
  },
  {
    "number": "12895",
    "name": "Kolkata-Puri Express",
    "sourceCode": "HWH",
    "source": "Howrah Jn",
    "destCode": "PURI",
    "dest": "Puri"
  },
  {
    "number": "12896",
    "name": "Puri-Howrah Express",
    "sourceCode": "PURI",
    "source": "Puri",
    "destCode": "HWH",
    "dest": "Howrah Jn"
  },
  {
    "number": "12897",
    "name": "Puducherry-Bhubaneswar Express",
    "sourceCode": "PDY",
    "source": "Puducherry",
    "destCode": "BBS",
    "dest": "Bhubaneswar"
  },
  {
    "number": "12898",
    "name": "Bhubaneswar-Puducherry Superfast Express",
    "sourceCode": "BBS",
    "source": "Bhubaneswar",
    "destCode": "PDY",
    "dest": "Puducherry"
  },
  {
    "number": "12901",
    "name": "Gujarat Mail",
    "sourceCode": "BCT",
    "source": "Mumbai Central",
    "destCode": "ADI",
    "dest": "Ahmedabad Jn"
  },
  {
    "number": "12902",
    "name": "Gujarat Mail",
    "sourceCode": "ADI",
    "source": "Ahmedabad Jn",
    "destCode": "BCT",
    "dest": "Mumbai Central"
  },
  {
    "number": "12903",
    "name": "Golden Temple Mail",
    "sourceCode": "BCT",
    "source": "Mumbai Central",
    "destCode": "ASR",
    "dest": "Amritsar Jn"
  },
  {
    "number": "12904",
    "name": "Golden Temple Mail",
    "sourceCode": "ASR",
    "source": "Amritsar Jn",
    "destCode": "BCT",
    "dest": "Mumbai Central"
  },
  {
    "number": "12905",
    "name": "PORBANDAR - HOWRAH SF Exp",
    "sourceCode": "PBR",
    "source": "Porbandar",
    "destCode": "HWH",
    "dest": "Howrah Jn"
  },
  {
    "number": "12906",
    "name": "HOWRAH - PORBANDAR SF Exp",
    "sourceCode": "HWH",
    "source": "Howrah Jn",
    "destCode": "PBR",
    "dest": "Porbandar"
  },
  {
    "number": "12907",
    "name": "Maharashtra Sampark Kranti Express",
    "sourceCode": "BDTS",
    "source": "Mumbai Bandra Terminus",
    "destCode": "NZM",
    "dest": "Delhi H Nizamuddin"
  },
  {
    "number": "12908",
    "name": "Maharashtra Sampark Kranti Express",
    "sourceCode": "NZM",
    "source": "Delhi H Nizamuddin",
    "destCode": "BDTS",
    "dest": "Mumbai Bandra Terminus"
  },
  {
    "number": "12909",
    "name": "Bandra Terminus- Hazrat Nizamuddin Garib Rath",
    "sourceCode": "BDTS",
    "source": "Mumbai Bandra Terminus",
    "destCode": "NZM",
    "dest": "Delhi H Nizamuddin"
  },
  {
    "number": "12910",
    "name": "H.Nizamuddin-Bandra Terminus Garib Rath Express",
    "sourceCode": "NZM",
    "source": "Delhi H Nizamuddin",
    "destCode": "BDTS",
    "dest": "Mumbai Bandra Terminus"
  },
  {
    "number": "12911",
    "name": "Valsad-Haridwar Exp",
    "sourceCode": "BL",
    "source": "Valsad",
    "destCode": "HW",
    "dest": "Haridwar Jn"
  },
  {
    "number": "12912",
    "name": "Haridwar Valsad Superfast Express",
    "sourceCode": "HW",
    "source": "Haridwar Jn",
    "destCode": "BL",
    "dest": "Valsad"
  },
  {
    "number": "12913",
    "name": "Indore-Nagpur Weekly Express",
    "sourceCode": "INDB",
    "source": "Indore Jn Bg",
    "destCode": "NGP",
    "dest": "Nagpur"
  },
  {
    "number": "12914",
    "name": "Nagpur-Indore Weekly Express",
    "sourceCode": "NGP",
    "source": "Nagpur",
    "destCode": "INDB",
    "dest": "Indore Jn Bg"
  },
  {
    "number": "12915",
    "name": "Ashram SF Express",
    "sourceCode": "ADI",
    "source": "Ahmedabad Jn",
    "destCode": "DLI",
    "dest": "Old Delhi"
  },
  {
    "number": "12916",
    "name": "Ashram SF Express",
    "sourceCode": "DLI",
    "source": "Old Delhi",
    "destCode": "ADI",
    "dest": "Ahmedabad Jn"
  },
  {
    "number": "12917",
    "name": "Gujarat Sampark Kranti Express",
    "sourceCode": "ADI",
    "source": "Ahmedabad Jn",
    "destCode": "NZM",
    "dest": "Delhi H Nizamuddin"
  },
  {
    "number": "12918",
    "name": "Gujarat Sampark Kranti Express",
    "sourceCode": "NZM",
    "source": "Delhi H Nizamuddin",
    "destCode": "ADI",
    "dest": "Ahmedabad Jn"
  },
  {
    "number": "12919",
    "name": "Malwa Express",
    "sourceCode": "INDB",
    "source": "Indore Jn Bg",
    "destCode": "JAT",
    "dest": "Jammu Tawi"
  },
  {
    "number": "12920",
    "name": "Malwa Express",
    "sourceCode": "JAT",
    "source": "Jammu Tawi",
    "destCode": "INDB",
    "dest": "Indore Jn Bg"
  },
  {
    "number": "12921",
    "name": "Flying Rani Express",
    "sourceCode": "BCT",
    "source": "Mumbai Central",
    "destCode": "ST",
    "dest": "Surat"
  },
  {
    "number": "12922",
    "name": "Flying Rani Express",
    "sourceCode": "ST",
    "source": "Surat",
    "destCode": "BCT",
    "dest": "Mumbai Central"
  },
  {
    "number": "12923",
    "name": "Indore Nagpur Express",
    "sourceCode": "INDB",
    "source": "Indore Jn Bg",
    "destCode": "NGP",
    "dest": "Nagpur"
  },
  {
    "number": "12924",
    "name": "Indore Express",
    "sourceCode": "NGP",
    "source": "Nagpur",
    "destCode": "INDB",
    "dest": "Indore Jn Bg"
  },
  {
    "number": "12925",
    "name": "Paschim Express",
    "sourceCode": "BDTS",
    "source": "Mumbai Bandra Terminus",
    "destCode": "ASR",
    "dest": "Amritsar Jn"
  },
  {
    "number": "12926",
    "name": "Paschim Express",
    "sourceCode": "ASR",
    "source": "Amritsar Jn",
    "destCode": "BDTS",
    "dest": "Mumbai Bandra Terminus"
  },
  {
    "number": "12927",
    "name": "Mumbai Central -Vadodara Express",
    "sourceCode": "BCT",
    "source": "Mumbai Central",
    "destCode": "BRC",
    "dest": "Vadodara Jn"
  },
  {
    "number": "12928",
    "name": "Vadodara - Mumbai Central Express",
    "sourceCode": "BRC",
    "source": "Vadodara Jn",
    "destCode": "BCT",
    "dest": "Mumbai Central"
  },
  {
    "number": "12929",
    "name": "Valsad Dahod InterCity Express",
    "sourceCode": "BL",
    "source": "Valsad",
    "destCode": "DHD",
    "dest": "Dahod"
  },
  {
    "number": "12930",
    "name": "Dahod Valsad InterCity Express",
    "sourceCode": "DHD",
    "source": "Dahod",
    "destCode": "BL",
    "dest": "Valsad"
  },
  {
    "number": "12933",
    "name": "Karnavati Express",
    "sourceCode": "BCT",
    "source": "Mumbai Central",
    "destCode": "ADI",
    "dest": "Ahmedabad Jn"
  },
  {
    "number": "12934",
    "name": "Karnavati Express",
    "sourceCode": "ADI",
    "source": "Ahmedabad Jn",
    "destCode": "BCT",
    "dest": "Mumbai Central"
  },
  {
    "number": "12935",
    "name": "Bandra Surat InterCity Express",
    "sourceCode": "BDTS",
    "source": "Mumbai Bandra Terminus",
    "destCode": "ST",
    "dest": "Surat"
  },
  {
    "number": "12936",
    "name": "Surat Bandra InterCity Express",
    "sourceCode": "ST",
    "source": "Surat",
    "destCode": "BDTS",
    "dest": "Mumbai Bandra Terminus"
  },
  {
    "number": "12937",
    "name": "GANDHIDHAM - HOWRAH Garbha Exp",
    "sourceCode": "GIMB",
    "source": "Gandhidham Bg",
    "destCode": "HWH",
    "dest": "Howrah Jn"
  },
  {
    "number": "12938",
    "name": "HOWRAH - GANDHIDHAM Garbha Exp",
    "sourceCode": "HWH",
    "source": "Howrah Jn",
    "destCode": "GIMB",
    "dest": "Gandhidham Bg"
  },
  {
    "number": "12939",
    "name": "Pune-Jaipur SF Express",
    "sourceCode": "PUNE",
    "source": "Pune Jn",
    "destCode": "JP",
    "dest": "Jaipur"
  },
  {
    "number": "12940",
    "name": "Jaipur-Pune SF Express",
    "sourceCode": "JP",
    "source": "Jaipur",
    "destCode": "PUNE",
    "dest": "Pune Jn"
  },
  {
    "number": "12941",
    "name": "Ahmedabad-Asansol (Weekly) SF Parasnath Express",
    "sourceCode": "ADI",
    "source": "Ahmedabad Jn",
    "destCode": "ASN",
    "dest": "Asansol Jn"
  },
  {
    "number": "12942",
    "name": "Asansol Ahmedabad (Weekly) SF Express",
    "sourceCode": "ASN",
    "source": "Asansol Jn",
    "destCode": "ADI",
    "dest": "Ahmedabad Jn"
  },
  {
    "number": "12943",
    "name": "Valsad-Kanpur Udyogkarmi Express",
    "sourceCode": "BL",
    "source": "Valsad",
    "destCode": "CNB",
    "dest": "Kanpur Central"
  },
  {
    "number": "12944",
    "name": "Kanpur-Valsad Udyogkarmi Express",
    "sourceCode": "CNB",
    "source": "Kanpur Central",
    "destCode": "BL",
    "dest": "Valsad"
  },
  {
    "number": "12947",
    "name": "Azimabad Express",
    "sourceCode": "ADI",
    "source": "Ahmedabad Jn",
    "destCode": "PNBE",
    "dest": "Patna Jn"
  },
  {
    "number": "12948",
    "name": "Azimabad Express",
    "sourceCode": "PNBE",
    "source": "Patna Jn",
    "destCode": "ADI",
    "dest": "Ahmedabad Jn"
  },
  {
    "number": "12949",
    "name": "PORBANDAR - K SANTRAGANCHI Kavi Guru SF Exp",
    "sourceCode": "PBR",
    "source": "Porbandar",
    "destCode": "SRC",
    "dest": "Santragachi Jn"
  },
  {
    "number": "12950",
    "name": "K SANTRAGANCHI - PORBANDAR Kavi Guru SF Exp",
    "sourceCode": "SRC",
    "source": "Santragachi Jn",
    "destCode": "PBR",
    "dest": "Porbandar"
  },
  {
    "number": "12951",
    "name": "Mumbai Central-New Delhi Rajdhani Express",
    "sourceCode": "BCT",
    "source": "Mumbai Central",
    "destCode": "NDLS",
    "dest": "New Delhi"
  },
  {
    "number": "12952",
    "name": "Mumbai Rajdhani Express",
    "sourceCode": "NDLS",
    "source": "New Delhi",
    "destCode": "BCT",
    "dest": "Mumbai Central"
  },
  {
    "number": "12953",
    "name": "MumbaiCentral-H Nizamuddin August Kranti Rajdhani Express",
    "sourceCode": "BCT",
    "source": "Mumbai Central",
    "destCode": "NZM",
    "dest": "Delhi H Nizamuddin"
  },
  {
    "number": "12954",
    "name": "August Kranti Rajdhani Express",
    "sourceCode": "NZM",
    "source": "Delhi H Nizamuddin",
    "destCode": "BCT",
    "dest": "Mumbai Central"
  },
  {
    "number": "12955",
    "name": "Mumbai-Jaipur SF Express",
    "sourceCode": "BCT",
    "source": "Mumbai Central",
    "destCode": "JP",
    "dest": "Jaipur"
  },
  {
    "number": "12956",
    "name": "Jaipur-Mumbai SF Express",
    "sourceCode": "JP",
    "source": "Jaipur",
    "destCode": "BCT",
    "dest": "Mumbai Central"
  },
  {
    "number": "12957",
    "name": "Ahmadabad-New Delhi Swarna Jayanti Rajdhani Expres",
    "sourceCode": "ADI",
    "source": "Ahmedabad Jn",
    "destCode": "NDLS",
    "dest": "New Delhi"
  },
  {
    "number": "12958",
    "name": "New Delhi-Ahmedabad Swarna Jayanti Rajdhani Expres",
    "sourceCode": "NDLS",
    "source": "New Delhi",
    "destCode": "ADI",
    "dest": "Ahmedabad Jn"
  },
  {
    "number": "12959",
    "name": "MUMBAI DADAR - BHUJ SF Exp",
    "sourceCode": "DDR",
    "source": "Mumbai Dadar West",
    "destCode": "BHUJ",
    "dest": "Bhuj"
  },
  {
    "number": "12960",
    "name": "BHUJ - MUMBAI DADAR SF Exp",
    "sourceCode": "BHUJ",
    "source": "Bhuj",
    "destCode": "DDR",
    "dest": "Mumbai Dadar West"
  },
  {
    "number": "12961",
    "name": "Avantika Express",
    "sourceCode": "BCT",
    "source": "Mumbai Central",
    "destCode": "INDB",
    "dest": "Indore Jn Bg"
  },
  {
    "number": "12962",
    "name": "Avantika Express",
    "sourceCode": "INDB",
    "source": "Indore Jn Bg",
    "destCode": "BCT",
    "dest": "Mumbai Central"
  },
  {
    "number": "12963",
    "name": "Mewar Express",
    "sourceCode": "NZM",
    "source": "Delhi H Nizamuddin",
    "destCode": "UDZ",
    "dest": "Udaipur City"
  },
  {
    "number": "12964",
    "name": "Mewar Express",
    "sourceCode": "UDZ",
    "source": "Udaipur City",
    "destCode": "NZM",
    "dest": "Delhi H Nizamuddin"
  },
  {
    "number": "12965",
    "name": "Gwalior Udaipur Express",
    "sourceCode": "GWL",
    "source": "Gwalior Jn",
    "destCode": "UDZ",
    "dest": "Udaipur City"
  },
  {
    "number": "12966",
    "name": "Udaipur Gwalior Express",
    "sourceCode": "UDZ",
    "source": "Udaipur City",
    "destCode": "GWL",
    "dest": "Gwalior Jn"
  },
  {
    "number": "12967",
    "name": "Chennai-Jaipur SF Express",
    "sourceCode": "MAS",
    "source": "Chennai Central",
    "destCode": "JP",
    "dest": "Jaipur"
  },
  {
    "number": "12968",
    "name": "Jaipur-Chennai SF Express",
    "sourceCode": "JP",
    "source": "Jaipur",
    "destCode": "MAS",
    "dest": "Chennai Central"
  },
  {
    "number": "12969",
    "name": "Coimbatore-Jaipur Express",
    "sourceCode": "CBE",
    "source": "Coimbatore Jn",
    "destCode": "JP",
    "dest": "Jaipur"
  },
  {
    "number": "12970",
    "name": "Jaipur-Coimbatore Express",
    "sourceCode": "JP",
    "source": "Jaipur",
    "destCode": "CBE",
    "dest": "Coimbatore Jn"
  },
  {
    "number": "12971",
    "name": "Bhavnagar Express",
    "sourceCode": "BDTS",
    "source": "Mumbai Bandra Terminus",
    "destCode": "BVC",
    "dest": "Bhavnagar Terminus"
  },
  {
    "number": "12972",
    "name": "Bhavnagar Bandra Express",
    "sourceCode": "BVC",
    "source": "Bhavnagar Terminus",
    "destCode": "BDTS",
    "dest": "Mumbai Bandra Terminus"
  },
  {
    "number": "12973",
    "name": "Indore-Jaipur SF Express",
    "sourceCode": "INDB",
    "source": "Indore Jn Bg",
    "destCode": "JP",
    "dest": "Jaipur"
  },
  {
    "number": "12974",
    "name": "Jaipur Indore SF Express",
    "sourceCode": "JP",
    "source": "Jaipur",
    "destCode": "INDB",
    "dest": "Indore Jn Bg"
  },
  {
    "number": "12975",
    "name": "Mysore-Jaipur SF Express",
    "sourceCode": "MYS",
    "source": "Mysore Jn",
    "destCode": "JP",
    "dest": "Jaipur"
  },
  {
    "number": "12976",
    "name": "Jaipur-Mysore SF Express",
    "sourceCode": "JP",
    "source": "Jaipur",
    "destCode": "MYS",
    "dest": "Mysore Jn"
  },
  {
    "number": "12977",
    "name": "ERNAKULAM - AJMER Marusagar Exp",
    "sourceCode": "ERS",
    "source": "Ernakulam Jn",
    "destCode": "AII",
    "dest": "Ajmer Jn"
  },
  {
    "number": "12978",
    "name": "AJMER - ERNAKULAM Marusagar Exp",
    "sourceCode": "AII",
    "source": "Ajmer Jn",
    "destCode": "ERS",
    "dest": "Ernakulam Jn"
  },
  {
    "number": "12979",
    "name": "Mumbai Bandra (T.) - Jaipur (Tri-weekly) SF Exp",
    "sourceCode": "BDTS",
    "source": "Mumbai Bandra Terminus",
    "destCode": "JP",
    "dest": "Jaipur"
  },
  {
    "number": "12980",
    "name": "Jaipur - Mumbai Bandra (T.) (Triweekly) SF Express",
    "sourceCode": "JP",
    "source": "Jaipur",
    "destCode": "BDTS",
    "dest": "Mumbai Bandra Terminus"
  },
  {
    "number": "12981",
    "name": "Chetak Express",
    "sourceCode": "DEE",
    "source": "Delhi Sarai Rohilla",
    "destCode": "UDZ",
    "dest": "Udaipur City"
  },
  {
    "number": "12982",
    "name": "Chetak Express",
    "sourceCode": "UDZ",
    "source": "Udaipur City",
    "destCode": "DEE",
    "dest": "Delhi Sarai Rohilla"
  },
  {
    "number": "12983",
    "name": "Ajmer-Chandigarh GaribRath Express",
    "sourceCode": "AII",
    "source": "Ajmer Jn",
    "destCode": "CDG",
    "dest": "Chandigarh"
  },
  {
    "number": "12984",
    "name": "Chandigarh-Ajmer GaribRath",
    "sourceCode": "CDG",
    "source": "Chandigarh",
    "destCode": "AII",
    "dest": "Ajmer Jn"
  },
  {
    "number": "12987",
    "name": "Sealdah Ajmer Express",
    "sourceCode": "SDAH",
    "source": "Kolkata Sealdah",
    "destCode": "AII",
    "dest": "Ajmer Jn"
  },
  {
    "number": "12988",
    "name": "Ajmer Sealdah Express",
    "sourceCode": "AII",
    "source": "Ajmer Jn",
    "destCode": "SDAH",
    "dest": "Kolkata Sealdah"
  },
  {
    "number": "12989",
    "name": "Dadar Ajmer Superfast Express",
    "sourceCode": "DDR",
    "source": "Mumbai Dadar West",
    "destCode": "AII",
    "dest": "Ajmer Jn"
  },
  {
    "number": "12990",
    "name": "Ajmer-Dadar SF Express",
    "sourceCode": "AII",
    "source": "Ajmer Jn",
    "destCode": "DDR",
    "dest": "Mumbai Dadar West"
  },
  {
    "number": "12991",
    "name": "Udaipur-Ajmer Express",
    "sourceCode": "UDZ",
    "source": "Udaipur City",
    "destCode": "AII",
    "dest": "Ajmer Jn"
  },
  {
    "number": "12992",
    "name": "Ajmer Udaipur Express",
    "sourceCode": "AII",
    "source": "Ajmer Jn",
    "destCode": "UDZ",
    "dest": "Udaipur City"
  },
  {
    "number": "12993",
    "name": "GANDHIDHAM - PURI SF Exp",
    "sourceCode": "GIMB",
    "source": "Gandhidham Bg",
    "destCode": "PURI",
    "dest": "Puri"
  },
  {
    "number": "12994",
    "name": "PURI - GANDHIDHAM SF Exp",
    "sourceCode": "PURI",
    "source": "Puri",
    "destCode": "GIMB",
    "dest": "Gandhidham Bg"
  },
  {
    "number": "12995",
    "name": "Bandra-Udaipur SF Express",
    "sourceCode": "BDTS",
    "source": "Mumbai Bandra Terminus",
    "destCode": "UDZ",
    "dest": "Udaipur City"
  },
  {
    "number": "12996",
    "name": "Udaipur Bandra SF Express Slip",
    "sourceCode": "UDZ",
    "source": "Udaipur City",
    "destCode": "BDTS",
    "dest": "Mumbai Bandra Terminus"
  },
  {
    "number": "12997",
    "name": "Tirunelveli - Hapa (Biweekly) SF Express",
    "sourceCode": "TEN",
    "source": "Tirunelveli",
    "destCode": "HAPA",
    "dest": "Hapa"
  },
  {
    "number": "12998",
    "name": "Hapa-Tirunelveli Express",
    "sourceCode": "HAPA",
    "source": "Hapa",
    "destCode": "TEN",
    "dest": "Tirunelveli"
  },
  {
    "number": "13005",
    "name": "Howrah-Amritsar Mail",
    "sourceCode": "HWH",
    "source": "Howrah Jn",
    "destCode": "ASR",
    "dest": "Amritsar Jn"
  },
  {
    "number": "13006",
    "name": "Amritsar Howrah Mail",
    "sourceCode": "ASR",
    "source": "Amritsar Jn",
    "destCode": "HWH",
    "dest": "Howrah Jn"
  },
  {
    "number": "13007",
    "name": "Udyan Abha Toofan Express",
    "sourceCode": "HWH",
    "source": "Howrah Jn",
    "destCode": "SGNR",
    "dest": "Shri Ganganagar"
  },
  {
    "number": "13009",
    "name": "Doon Express",
    "sourceCode": "HWH",
    "source": "Howrah Jn",
    "destCode": "DDN",
    "dest": "Dehradun"
  },
  {
    "number": "13010",
    "name": "Doon Express",
    "sourceCode": "DDN",
    "source": "Dehradun",
    "destCode": "HWH",
    "dest": "Howrah Jn"
  },
  {
    "number": "13011",
    "name": "InterCity Express",
    "sourceCode": "HWH",
    "source": "Howrah Jn",
    "destCode": "MLDT",
    "dest": "Malda Town"
  },
  {
    "number": "13012",
    "name": "InterCity Express",
    "sourceCode": "MLDT",
    "source": "Malda Town",
    "destCode": "HWH",
    "dest": "Howrah Jn"
  },
  {
    "number": "13013",
    "name": "Barddhaman Rampurhat Tri-Weekly Express",
    "sourceCode": "BWN",
    "source": "Barddhaman Jn",
    "destCode": "RPH",
    "dest": "Rampur Hat"
  },
  {
    "number": "13014",
    "name": "Rampurhat-Barddhaman Tri-Weekly Express",
    "sourceCode": "RPH",
    "source": "Rampur Hat",
    "destCode": "BWN",
    "dest": "Barddhaman Jn"
  },
  {
    "number": "13015",
    "name": "Howrah Bolpur KaviGuru Express",
    "sourceCode": "HWH",
    "source": "Howrah Jn",
    "destCode": "BHP",
    "dest": "Bolpur Shantiniketan"
  },
  {
    "number": "13016",
    "name": "Bolpur-Howrah Kavi Guru Express",
    "sourceCode": "BHP",
    "source": "Bolpur Shantiniketan",
    "destCode": "HWH",
    "dest": "Howrah Jn"
  },
  {
    "number": "13017",
    "name": "Ganadevta Express",
    "sourceCode": "HWH",
    "source": "Howrah Jn",
    "destCode": "AZ",
    "dest": "Azimganj Jn"
  },
  {
    "number": "13018",
    "name": "Ganadevta Express",
    "sourceCode": "AZ",
    "source": "Azimganj Jn",
    "destCode": "HWH",
    "dest": "Howrah Jn"
  },
  {
    "number": "13019",
    "name": "Bagh Express",
    "sourceCode": "HWH",
    "source": "Howrah Jn",
    "destCode": "KGM",
    "dest": "Kathgodam"
  },
  {
    "number": "13020",
    "name": "Bagh Express",
    "sourceCode": "KGM",
    "source": "Kathgodam",
    "destCode": "HWH",
    "dest": "Howrah Jn"
  },
  {
    "number": "13021",
    "name": "Mithila Express",
    "sourceCode": "HWH",
    "source": "Howrah Jn",
    "destCode": "RXL",
    "dest": "Raxaul Jn"
  },
  {
    "number": "13022",
    "name": "Mithila Express",
    "sourceCode": "RXL",
    "source": "Raxaul Jn",
    "destCode": "HWH",
    "dest": "Howrah Jn"
  },
  {
    "number": "13023",
    "name": "Howrah-Gaya Express",
    "sourceCode": "HWH",
    "source": "Howrah Jn",
    "destCode": "GAYA",
    "dest": "Gaya Jn"
  },
  {
    "number": "13024",
    "name": "Gaya-Howrah Express",
    "sourceCode": "GAYA",
    "source": "Gaya Jn",
    "destCode": "HWH",
    "dest": "Howrah Jn"
  },
  {
    "number": "13025",
    "name": "Howrah-Bhopal Express",
    "sourceCode": "HWH",
    "source": "Howrah Jn",
    "destCode": "BPL",
    "dest": "Bhopal Jn"
  },
  {
    "number": "13026",
    "name": "Bhopal-Howrah Express",
    "sourceCode": "BPL",
    "source": "Bhopal Jn",
    "destCode": "HWH",
    "dest": "Howrah Jn"
  },
  {
    "number": "13027",
    "name": "Kaviguru Express",
    "sourceCode": "HWH",
    "source": "Howrah Jn",
    "destCode": "AZ",
    "dest": "Azimganj Jn"
  },
  {
    "number": "13028",
    "name": "Kaviguru Express",
    "sourceCode": "AZ",
    "source": "Azimganj Jn",
    "destCode": "HWH",
    "dest": "Howrah Jn"
  },
  {
    "number": "13039",
    "name": "Howrah-Rajgir Express Slip",
    "sourceCode": "HWH",
    "source": "Howrah Jn",
    "destCode": "RGD",
    "dest": "Rajgir"
  },
  {
    "number": "13040",
    "name": "Janata Express",
    "sourceCode": "DLI",
    "source": "Old Delhi",
    "destCode": "HWH",
    "dest": "Howrah Jn"
  },
  {
    "number": "13049",
    "name": "Howrah-Amritsar Express",
    "sourceCode": "HWH",
    "source": "Howrah Jn",
    "destCode": "ASR",
    "dest": "Amritsar Jn"
  },
  {
    "number": "13050",
    "name": "Amritsar Howrah Express",
    "sourceCode": "ASR",
    "source": "Amritsar Jn",
    "destCode": "HWH",
    "dest": "Howrah Jn"
  },
  {
    "number": "13051",
    "name": "Hool Express",
    "sourceCode": "HWH",
    "source": "Howrah Jn",
    "destCode": "SURI",
    "dest": "Siuri"
  },
  {
    "number": "13052",
    "name": "Hool Express",
    "sourceCode": "SURI",
    "source": "Siuri",
    "destCode": "HWH",
    "dest": "Howrah Jn"
  },
  {
    "number": "13053",
    "name": "Howrah-Siuri Intercity Express",
    "sourceCode": "HWH",
    "source": "Howrah Jn",
    "destCode": "SURI",
    "dest": "Siuri"
  },
  {
    "number": "13054",
    "name": "Siuri-Howrah Intercity Express",
    "sourceCode": "SURI",
    "source": "Siuri",
    "destCode": "HWH",
    "dest": "Howrah Jn"
  },
  {
    "number": "13071",
    "name": "Jamalpur Express",
    "sourceCode": "HWH",
    "source": "Howrah Jn",
    "destCode": "JMP",
    "dest": "Jamalpur Jn"
  },
  {
    "number": "13072",
    "name": "Howrah Express",
    "sourceCode": "JMP",
    "source": "Jamalpur Jn",
    "destCode": "HWH",
    "dest": "Howrah Jn"
  },
  {
    "number": "13103",
    "name": "Bhagirathi Express",
    "sourceCode": "SDAH",
    "source": "Kolkata Sealdah",
    "destCode": "LGL",
    "dest": "Lalgola"
  },
  {
    "number": "13104",
    "name": "Bhagirathi Express",
    "sourceCode": "LGL",
    "source": "Lalgola",
    "destCode": "SDAH",
    "dest": "Kolkata Sealdah"
  },
  {
    "number": "13105",
    "name": "Sealdah-Ballia Express",
    "sourceCode": "SDAH",
    "source": "Kolkata Sealdah",
    "destCode": "BUI",
    "dest": "Ballia"
  },
  {
    "number": "13106",
    "name": "Ballia-Sealdah Express",
    "sourceCode": "BUI",
    "source": "Ballia",
    "destCode": "SDAH",
    "dest": "Kolkata Sealdah"
  },
  {
    "number": "13107",
    "name": "Maitree Express BR",
    "sourceCode": "DHCA",
    "source": "Dhaca Cantt.",
    "destCode": "KOAA",
    "dest": "Kolkata Chitpur"
  },
  {
    "number": "13110",
    "name": "Maitree Express",
    "sourceCode": "DHCA",
    "source": "Dhaca Cantt.",
    "destCode": "KOAA",
    "dest": "Kolkata Chitpur"
  },
  {
    "number": "13111",
    "name": "Lal Quila Express",
    "sourceCode": "KOAA",
    "source": "Kolkata Chitpur",
    "destCode": "DLI",
    "dest": "Old Delhi"
  },
  {
    "number": "13112",
    "name": "Lal Quila Express",
    "sourceCode": "DLI",
    "source": "Old Delhi",
    "destCode": "KOAA",
    "dest": "Kolkata Chitpur"
  },
  {
    "number": "13113",
    "name": "Hazarduari Express",
    "sourceCode": "KOAA",
    "source": "Kolkata Chitpur",
    "destCode": "LGL",
    "dest": "Lalgola"
  },
  {
    "number": "13114",
    "name": "Hazarduari Express",
    "sourceCode": "LGL",
    "source": "Lalgola",
    "destCode": "KOAA",
    "dest": "Kolkata Chitpur"
  },
  {
    "number": "13117",
    "name": "Kolkata Berhampore Court Express",
    "sourceCode": "KOAA",
    "source": "Kolkata Chitpur",
    "destCode": "BPC",
    "dest": "Berhampore Court"
  },
  {
    "number": "13118",
    "name": "Berhampore Court Kolkata Express",
    "sourceCode": "BPC",
    "source": "Berhampore Court",
    "destCode": "KOAA",
    "dest": "Kolkata Chitpur"
  },
  {
    "number": "13133",
    "name": "Sealdah-Varanasi Express",
    "sourceCode": "SDAH",
    "source": "Kolkata Sealdah",
    "destCode": "BSB",
    "dest": "Varanasi Jn"
  },
  {
    "number": "13134",
    "name": "Varanasi- Sealdah Express",
    "sourceCode": "BSB",
    "source": "Varanasi Jn",
    "destCode": "SDAH",
    "dest": "Kolkata Sealdah"
  },
  {
    "number": "13141",
    "name": "Testa Torsa Express",
    "sourceCode": "SDAH",
    "source": "Kolkata Sealdah",
    "destCode": "NOQ",
    "dest": "New Alipurdaur"
  },
  {
    "number": "13142",
    "name": "Teesta Torsa Express",
    "sourceCode": "NOQ",
    "source": "New Alipurdaur",
    "destCode": "SDAH",
    "dest": "Kolkata Sealdah"
  },
  {
    "number": "13145",
    "name": "Radhikapur Express",
    "sourceCode": "KOAA",
    "source": "Kolkata Chitpur",
    "destCode": "RDP",
    "dest": "Radhikapur"
  },
  {
    "number": "13146",
    "name": "Radhikapur Express",
    "sourceCode": "RDP",
    "source": "Radhikapur",
    "destCode": "KOAA",
    "dest": "Kolkata Chitpur"
  },
  {
    "number": "13147",
    "name": "Uttar Banga Express",
    "sourceCode": "SDAH",
    "source": "Kolkata Sealdah",
    "destCode": "NCB",
    "dest": "New Cooch Behar"
  },
  {
    "number": "13148",
    "name": "Uttar Banga Express",
    "sourceCode": "NCB",
    "source": "New Cooch Behar",
    "destCode": "SDAH",
    "dest": "Kolkata Sealdah"
  },
  {
    "number": "13149",
    "name": "Kanchan Kanya Express",
    "sourceCode": "SDAH",
    "source": "Kolkata Sealdah",
    "destCode": "APDJ",
    "dest": "Alipur Duar Jn"
  },
  {
    "number": "13150",
    "name": "Kanchan Kanya Express",
    "sourceCode": "APDJ",
    "source": "Alipur Duar Jn",
    "destCode": "SDAH",
    "dest": "Kolkata Sealdah"
  },
  {
    "number": "13151",
    "name": "Kolkata Chitpur-JammuTawi Express",
    "sourceCode": "KOAA",
    "source": "Kolkata Chitpur",
    "destCode": "JAT",
    "dest": "Jammu Tawi"
  },
  {
    "number": "13152",
    "name": "JammuTawi-Kolkata Chitpur Express",
    "sourceCode": "JAT",
    "source": "Jammu Tawi",
    "destCode": "KOAA",
    "dest": "Kolkata Chitpur"
  },
  {
    "number": "13153",
    "name": "Sealdah-Malda Town Gour Express",
    "sourceCode": "SDAH",
    "source": "Kolkata Sealdah",
    "destCode": "MLDT",
    "dest": "Malda Town"
  },
  {
    "number": "13154",
    "name": "Malda Town-Sealdah Gour Express",
    "sourceCode": "MLDT",
    "source": "Malda Town",
    "destCode": "SDAH",
    "dest": "Kolkata Sealdah"
  },
  {
    "number": "13155",
    "name": "KOLKATA CHITPUR - SITAMARHI Mithilanchal Exp",
    "sourceCode": "KOAA",
    "source": "Kolkata Chitpur",
    "destCode": "DBG",
    "dest": "Darbhanga Jn"
  },
  {
    "number": "13156",
    "name": "SITAMARHI - KOLKATA CHITPUR Mithilanchal Exp",
    "sourceCode": "DBG",
    "source": "Darbhanga Jn",
    "destCode": "KOAA",
    "dest": "Kolkata Chitpur"
  },
  {
    "number": "13157",
    "name": "KOLKATA CHITPUR - MUZAFFARPUR Tirhut Exp",
    "sourceCode": "KOAA",
    "source": "Kolkata Chitpur",
    "destCode": "MFP",
    "dest": "Muzaffarpur Jn"
  },
  {
    "number": "13158",
    "name": "MUZAFFARPUR - KOLKATA CHITPUR Tirhut Exp",
    "sourceCode": "MFP",
    "source": "Muzaffarpur Jn",
    "destCode": "KOAA",
    "dest": "Kolkata Chitpur"
  },
  {
    "number": "13159",
    "name": "KOLKATA CHITPUR - JOGBANI Exp",
    "sourceCode": "KOAA",
    "source": "Kolkata Chitpur",
    "destCode": "JBN",
    "dest": "Jogbani"
  },
  {
    "number": "13160",
    "name": "JOGBANI - KOLKATA CHITPUR Exp",
    "sourceCode": "JBN",
    "source": "Jogbani",
    "destCode": "KOAA",
    "dest": "Kolkata Chitpur"
  },
  {
    "number": "13161",
    "name": "KOLKATA CHITPUR - BALURGHAT Tebhaga Exp",
    "sourceCode": "KOAA",
    "source": "Kolkata Chitpur",
    "destCode": "BLGT",
    "dest": "Balurghat"
  },
  {
    "number": "13162",
    "name": "BALURGHAT - KOLKATA CHITPUR Tebhaga Exp",
    "sourceCode": "BLGT",
    "source": "Balurghat",
    "destCode": "KOAA",
    "dest": "Kolkata Chitpur"
  },
  {
    "number": "13163",
    "name": "Hatey Bazare Express",
    "sourceCode": "SDAH",
    "source": "Kolkata Sealdah",
    "destCode": "SHC",
    "dest": "Saharsa Jn"
  },
  {
    "number": "13164",
    "name": "Hatey Bazare Express",
    "sourceCode": "SHC",
    "source": "Saharsa Jn",
    "destCode": "SDAH",
    "dest": "Kolkata Sealdah"
  },
  {
    "number": "13185",
    "name": "Ganga Sagar Express",
    "sourceCode": "SDAH",
    "source": "Kolkata Sealdah",
    "destCode": "JYG",
    "dest": "Jaynagar"
  },
  {
    "number": "13186",
    "name": "Ganga Sagar Express",
    "sourceCode": "JYG",
    "source": "Jaynagar",
    "destCode": "SDAH",
    "dest": "Kolkata Sealdah"
  },
  {
    "number": "13187",
    "name": "Maa Tara Express",
    "sourceCode": "SDAH",
    "source": "Kolkata Sealdah",
    "destCode": "RPH",
    "dest": "Rampur Hat"
  },
  {
    "number": "13188",
    "name": "Rampurhat- Sealdah Express",
    "sourceCode": "RPH",
    "source": "Rampur Hat",
    "destCode": "SDAH",
    "dest": "Kolkata Sealdah"
  },
  {
    "number": "13201",
    "name": "RAJENDRA NAGAR PATNA - MUMBAI LTT Janta Exp",
    "sourceCode": "RJPB",
    "source": "Rajendra Nagar Bihar",
    "destCode": "LTT",
    "dest": "Lokmanya Tilak Term"
  },
  {
    "number": "13202",
    "name": "MUMBAI LTT - RAJENDRA NAGAR PATNA Janta Exp",
    "sourceCode": "LTT",
    "source": "Lokmanya Tilak Term",
    "destCode": "RJPB",
    "dest": "Rajendra Nagar Bihar"
  },
  {
    "number": "13225",
    "name": "Jaynagar-Danapur Intercity",
    "sourceCode": "JYG",
    "source": "Jaynagar",
    "destCode": "DNR",
    "dest": "Danapur"
  },
  {
    "number": "13226",
    "name": "Danapur-Jaynagar Intercity",
    "sourceCode": "DNR",
    "source": "Danapur",
    "destCode": "JYG",
    "dest": "Jaynagar"
  },
  {
    "number": "13233",
    "name": "Rajgriha Express",
    "sourceCode": "RGD",
    "source": "Rajgir",
    "destCode": "DNR",
    "dest": "Danapur"
  },
  {
    "number": "13234",
    "name": "Rajgriha Express",
    "sourceCode": "DNR",
    "source": "Danapur",
    "destCode": "RGD",
    "dest": "Rajgir"
  },
  {
    "number": "13235",
    "name": "Sahibganj-Danapur InterCity",
    "sourceCode": "SBG",
    "source": "Sahibganj Jn",
    "destCode": "DNR",
    "dest": "Danapur"
  },
  {
    "number": "13236",
    "name": "Danapur-Sahibganj InterCity",
    "sourceCode": "DNR",
    "source": "Danapur",
    "destCode": "SBG",
    "dest": "Sahibganj Jn"
  },
  {
    "number": "13237",
    "name": "Patna Mathura Express",
    "sourceCode": "PNBE",
    "source": "Patna Jn",
    "destCode": "MTJ",
    "dest": "Mathura Jn"
  },
  {
    "number": "13238",
    "name": "Mathura Patna Express",
    "sourceCode": "MTJ",
    "source": "Mathura Jn",
    "destCode": "PNBE",
    "dest": "Patna Jn"
  },
  {
    "number": "13239",
    "name": "Patna Mathura Express",
    "sourceCode": "PNBE",
    "source": "Patna Jn",
    "destCode": "MTJ",
    "dest": "Mathura Jn"
  },
  {
    "number": "13240",
    "name": "Mathura Patna Express",
    "sourceCode": "MTJ",
    "source": "Mathura Jn",
    "destCode": "PNBE",
    "dest": "Patna Jn"
  },
  {
    "number": "13241",
    "name": "Banka Patna Express",
    "sourceCode": "BAKA",
    "source": "Banka",
    "destCode": "RJPB",
    "dest": "Rajendra Nagar Bihar"
  },
  {
    "number": "13242",
    "name": "Patna Banka Express",
    "sourceCode": "RJPB",
    "source": "Rajendra Nagar Bihar",
    "destCode": "BAKA",
    "dest": "Banka"
  },
  {
    "number": "13243",
    "name": "Patna Dehri On Sone InterCity Express",
    "sourceCode": "PNBE",
    "source": "Patna Jn",
    "destCode": "DOS",
    "dest": "Dehri On Sone"
  },
  {
    "number": "13244",
    "name": "Dehri On Sone Patna InterCity Express",
    "sourceCode": "DOS",
    "source": "Dehri On Sone",
    "destCode": "PNBE",
    "dest": "Patna Jn"
  },
  {
    "number": "13245",
    "name": "Capital Express",
    "sourceCode": "NJP",
    "source": "New Jalpaiguri",
    "destCode": "DNR",
    "dest": "Danapur"
  },
  {
    "number": "13246",
    "name": "Capital Express",
    "sourceCode": "DNR",
    "source": "Danapur",
    "destCode": "NJP",
    "dest": "New Jalpaiguri"
  },
  {
    "number": "13251",
    "name": "Islampur Rajendra Nagar Express",
    "sourceCode": "IPR",
    "source": "Islampur",
    "destCode": "RJPB",
    "dest": "Rajendra Nagar Bihar"
  },
  {
    "number": "13252",
    "name": "Rajendra Nagar Islampur Express",
    "sourceCode": "RJPB",
    "source": "Rajendra Nagar Bihar",
    "destCode": "IPR",
    "dest": "Islampur"
  },
  {
    "number": "13301",
    "name": "Suvarna Rekha Express",
    "sourceCode": "DHN",
    "source": "Dhanbad Jn",
    "destCode": "TATA",
    "dest": "Tatanagar Jn"
  },
  {
    "number": "13302",
    "name": "Suvarna Rekha Express",
    "sourceCode": "TATA",
    "source": "Tatanagar Jn",
    "destCode": "DHN",
    "dest": "Dhanbad Jn"
  },
  {
    "number": "13304",
    "name": "Dhanbad InterCity Express",
    "sourceCode": "RNC",
    "source": "Ranchi",
    "destCode": "DHN",
    "dest": "Dhanbad Jn"
  },
  {
    "number": "13305",
    "name": "Dhanbad-Gaya InterCity",
    "sourceCode": "DHN",
    "source": "Dhanbad Jn",
    "destCode": "GAYA",
    "dest": "Gaya Jn"
  },
  {
    "number": "13306",
    "name": "Gaya-Dhanbad InterCity",
    "sourceCode": "GAYA",
    "source": "Gaya Jn",
    "destCode": "DHN",
    "dest": "Dhanbad Jn"
  },
  {
    "number": "13307",
    "name": "Ganga Sutlej Express",
    "sourceCode": "DHN",
    "source": "Dhanbad Jn",
    "destCode": "FZR",
    "dest": "Firozpur Cant"
  },
  {
    "number": "13308",
    "name": "Ganga Sutlej Express",
    "sourceCode": "FZR",
    "source": "Firozpur Cant",
    "destCode": "DHN",
    "dest": "Dhanbad Jn"
  },
  {
    "number": "13317",
    "name": "Black Diamond Express",
    "sourceCode": "HWH",
    "source": "Howrah Jn",
    "destCode": "DHN",
    "dest": "Dhanbad Jn"
  },
  {
    "number": "13318",
    "name": "Black Diamond Express",
    "sourceCode": "DHN",
    "source": "Dhanbad Jn",
    "destCode": "HWH",
    "dest": "Howrah Jn"
  },
  {
    "number": "13319",
    "name": "Baidyanthdham-Ranchi Express",
    "sourceCode": "BDME",
    "source": "Baidyanathdham Deoghar",
    "destCode": "RNC",
    "dest": "Ranchi"
  },
  {
    "number": "13320",
    "name": "Ranchi-Baidyanathdham Express",
    "sourceCode": "RNC",
    "source": "Ranchi",
    "destCode": "BDME",
    "dest": "Baidyanathdham Deoghar"
  },
  {
    "number": "13329",
    "name": "Ganga Damodar Express",
    "sourceCode": "DHN",
    "source": "Dhanbad Jn",
    "destCode": "PNBE",
    "dest": "Patna Jn"
  },
  {
    "number": "13330",
    "name": "Ganga Damodar Express",
    "sourceCode": "PNBE",
    "source": "Patna Jn",
    "destCode": "DHN",
    "dest": "Dhanbad Jn"
  },
  {
    "number": "13331",
    "name": "Dhanbad Patna Express",
    "sourceCode": "DHN",
    "source": "Dhanbad Jn",
    "destCode": "PNBE",
    "dest": "Patna Jn"
  },
  {
    "number": "13332",
    "name": "Patna Dhanbad Express",
    "sourceCode": "PNBE",
    "source": "Patna Jn",
    "destCode": "DHN",
    "dest": "Dhanbad Jn"
  },
  {
    "number": "13345",
    "name": "Varanasi-Singrauli Intercity",
    "sourceCode": "BSB",
    "source": "Varanasi Jn",
    "destCode": "SGRL",
    "dest": "Singrauli"
  },
  {
    "number": "13346",
    "name": "Singrauli-Varanasi Intercity",
    "sourceCode": "SGRL",
    "source": "Singrauli",
    "destCode": "BSB",
    "dest": "Varanasi Jn"
  },
  {
    "number": "13347",
    "name": "Palamau Express",
    "sourceCode": "BRKA",
    "source": "Barkakana",
    "destCode": "PNBE",
    "dest": "Patna Jn"
  },
  {
    "number": "13348",
    "name": "Palamau Express",
    "sourceCode": "PNBE",
    "source": "Patna Jn",
    "destCode": "BRKA",
    "dest": "Barkakana"
  },
  {
    "number": "13351",
    "name": "DHANBAD - ALAPPUZHA Exp",
    "sourceCode": "DHN",
    "source": "Dhanbad Jn",
    "destCode": "ALLP",
    "dest": "Alleppey"
  },
  {
    "number": "13352",
    "name": "ALAPPUZHA - DHANBAD (Bokaro) Express",
    "sourceCode": "ALLP",
    "source": "Alleppey",
    "destCode": "DHN",
    "dest": "Dhanbad Jn"
  },
  {
    "number": "13401",
    "name": "InterCity Express",
    "sourceCode": "BGP",
    "source": "Bhagalpur",
    "destCode": "DNR",
    "dest": "Danapur"
  },
  {
    "number": "13402",
    "name": "InterCity Express",
    "sourceCode": "DNR",
    "source": "Danapur",
    "destCode": "BGP",
    "dest": "Bhagalpur"
  },
  {
    "number": "13403",
    "name": "Vananchal Express",
    "sourceCode": "RNC",
    "source": "Ranchi",
    "destCode": "BGP",
    "dest": "Bhagalpur"
  },
  {
    "number": "13404",
    "name": "Vananchal Express",
    "sourceCode": "BGP",
    "source": "Bhagalpur",
    "destCode": "RNC",
    "dest": "Ranchi"
  },
  {
    "number": "13409",
    "name": "InterCity Express",
    "sourceCode": "MLDT",
    "source": "Malda Town",
    "destCode": "BGP",
    "dest": "Bhagalpur"
  },
  {
    "number": "13410",
    "name": "InterCity Express",
    "sourceCode": "BGP",
    "source": "Bhagalpur",
    "destCode": "MLDT",
    "dest": "Malda Town"
  },
  {
    "number": "13413",
    "name": "Farakka Express",
    "sourceCode": "MLDT",
    "source": "Malda Town",
    "destCode": "DLI",
    "dest": "Old Delhi"
  },
  {
    "number": "13414",
    "name": "Farakka Express",
    "sourceCode": "DLI",
    "source": "Old Delhi",
    "destCode": "MLDT",
    "dest": "Malda Town"
  },
  {
    "number": "13415",
    "name": "Malda Patna Express",
    "sourceCode": "MLDT",
    "source": "Malda Town",
    "destCode": "PNBE",
    "dest": "Patna Jn"
  },
  {
    "number": "13416",
    "name": "Patna-Malda Express",
    "sourceCode": "PNBE",
    "source": "Patna Jn",
    "destCode": "MLDT",
    "dest": "Malda Town"
  },
  {
    "number": "13419",
    "name": "Jan Sewa Express",
    "sourceCode": "BGP",
    "source": "Bhagalpur",
    "destCode": "MFP",
    "dest": "Muzaffarpur Jn"
  },
  {
    "number": "13420",
    "name": "Jan Sewa Express",
    "sourceCode": "MFP",
    "source": "Muzaffarpur Jn",
    "destCode": "BGP",
    "dest": "Bhagalpur"
  },
  {
    "number": "13421",
    "name": "Nabadwipdham Malda Express",
    "sourceCode": "NDAE",
    "source": "Nabadwip Dham",
    "destCode": "MLDT",
    "dest": "Malda Town"
  },
  {
    "number": "13422",
    "name": "Malda Nabadwipdham Express",
    "sourceCode": "MLDT",
    "source": "Malda Town",
    "destCode": "NDAE",
    "dest": "Nabadwip Dham"
  },
  {
    "number": "13465",
    "name": "InterCity Express",
    "sourceCode": "HWH",
    "source": "Howrah Jn",
    "destCode": "MLDT",
    "dest": "Malda Town"
  },
  {
    "number": "13466",
    "name": "InterCity Express",
    "sourceCode": "MLDT",
    "source": "Malda Town",
    "destCode": "HWH",
    "dest": "Howrah Jn"
  },
  {
    "number": "13483",
    "name": "Farakka Express",
    "sourceCode": "MLDT",
    "source": "Malda Town",
    "destCode": "DLI",
    "dest": "Old Delhi"
  },
  {
    "number": "13484",
    "name": "Farakka Express",
    "sourceCode": "DLI",
    "source": "Old Delhi",
    "destCode": "MLDT",
    "dest": "Malda Town"
  },
  {
    "number": "13501",
    "name": "Haldia-Asansol Express",
    "sourceCode": "HLZ",
    "source": "Haldia",
    "destCode": "ASN",
    "dest": "Asansol Jn"
  },
  {
    "number": "13502",
    "name": "Asansol Haldia Express",
    "sourceCode": "ASN",
    "source": "Asansol Jn",
    "destCode": "HLZ",
    "dest": "Haldia"
  },
  {
    "number": "13503",
    "name": "Sealdah-Asansol InterCity Express",
    "sourceCode": "SDAH",
    "source": "Kolkata Sealdah",
    "destCode": "ASN",
    "dest": "Asansol Jn"
  },
  {
    "number": "13504",
    "name": "Asansol-Sealdah InterCity Express",
    "sourceCode": "ASN",
    "source": "Asansol Jn",
    "destCode": "SDAH",
    "dest": "Kolkata Sealdah"
  },
  {
    "number": "13506",
    "name": "Asansol Digha Express",
    "sourceCode": "ASN",
    "source": "Asansol Jn",
    "destCode": "DGHA",
    "dest": "Digha Flag Station"
  },
  {
    "number": "13507",
    "name": "Asansol-Gorakhpur Express",
    "sourceCode": "ASN",
    "source": "Asansol Jn",
    "destCode": "GKP",
    "dest": "Gorakhpur Jn"
  },
  {
    "number": "13508",
    "name": "Gorakhpur-Asansol Express",
    "sourceCode": "GKP",
    "source": "Gorakhpur Jn",
    "destCode": "ASN",
    "dest": "Asansol Jn"
  },
  {
    "number": "13509",
    "name": "Asansol-Gonda Express",
    "sourceCode": "ASN",
    "source": "Asansol Jn",
    "destCode": "GD",
    "dest": "Gonda Jn"
  },
  {
    "number": "13510",
    "name": "Gonda-Asansol Express",
    "sourceCode": "GD",
    "source": "Gonda Jn",
    "destCode": "ASN",
    "dest": "Asansol Jn"
  },
  {
    "number": "14003",
    "name": "New Farakka-New Delhi Express",
    "sourceCode": "NFK",
    "source": "New Farakka Jn",
    "destCode": "NDLS",
    "dest": "New Delhi"
  },
  {
    "number": "14004",
    "name": "New Delhi-New Farakka Express",
    "sourceCode": "NDLS",
    "source": "New Delhi",
    "destCode": "NFK",
    "dest": "New Farakka Jn"
  },
  {
    "number": "14005",
    "name": "Lichhavi Express",
    "sourceCode": "SMI",
    "source": "Sitamarhi Jn",
    "destCode": "ANVT",
    "dest": "Anand Vihar Trm"
  },
  {
    "number": "14006",
    "name": "Lichhavi Express",
    "sourceCode": "ANVT",
    "source": "Anand Vihar Trm",
    "destCode": "SMI",
    "dest": "Sitamarhi Jn"
  },
  {
    "number": "14007",
    "name": "Muzaffarpur-Old Delhi Sadbhavna Express",
    "sourceCode": "MFP",
    "source": "Muzaffarpur Jn",
    "destCode": "DLI",
    "dest": "Old Delhi"
  },
  {
    "number": "14008",
    "name": "Old Delhi-Muzaffarpur Sadbhavana Express",
    "sourceCode": "DLI",
    "source": "Old Delhi",
    "destCode": "MFP",
    "dest": "Muzaffarpur Jn"
  },
  {
    "number": "14009",
    "name": "Patalkot Express",
    "sourceCode": "CWA",
    "source": "Chhindwara Junction",
    "destCode": "DEE",
    "dest": "Delhi Sarai Rohilla"
  },
  {
    "number": "14010",
    "name": "Patalkot Express",
    "sourceCode": "DEE",
    "source": "Delhi Sarai Rohilla",
    "destCode": "CWA",
    "dest": "Chhindwara Junction"
  },
  {
    "number": "14011",
    "name": "Kathgodam-Anand Vihar AC Express",
    "sourceCode": "KGM",
    "source": "Kathgodam",
    "destCode": "ANVT",
    "dest": "Anand Vihar Trm"
  },
  {
    "number": "14012",
    "name": "Anand Vihar-Kathgodam AC Express",
    "sourceCode": "ANVT",
    "source": "Anand Vihar Trm",
    "destCode": "KGM",
    "dest": "Kathgodam"
  },
  {
    "number": "14013",
    "name": "Sadbhavna Express",
    "sourceCode": "SLN",
    "source": "Sultanpur",
    "destCode": "DLI",
    "dest": "Old Delhi"
  },
  {
    "number": "14014",
    "name": "Sadbhavna Express",
    "sourceCode": "DLI",
    "source": "Old Delhi",
    "destCode": "SLN",
    "dest": "Sultanpur"
  },
  {
    "number": "14015",
    "name": "Sadbhavna Express",
    "sourceCode": "RXL",
    "source": "Raxaul Jn",
    "destCode": "DLI",
    "dest": "Old Delhi"
  },
  {
    "number": "14016",
    "name": "Sadbhavana Express",
    "sourceCode": "DLI",
    "source": "Old Delhi",
    "destCode": "RXL",
    "dest": "Raxaul Jn"
  },
  {
    "number": "14017",
    "name": "Sadbhavna Express",
    "sourceCode": "MFP",
    "source": "Muzaffarpur Jn",
    "destCode": "DLI",
    "dest": "Old Delhi"
  },
  {
    "number": "14018",
    "name": "Sadbhavana Expres",
    "sourceCode": "DLI",
    "source": "Old Delhi",
    "destCode": "MFP",
    "dest": "Muzaffarpur Jn"
  },
  {
    "number": "14019",
    "name": "Chhindwara Delhi SR (Biweekly) Kanhan valley Express",
    "sourceCode": "CWA",
    "source": "Chhindwara Junction",
    "destCode": "DEE",
    "dest": "Delhi Sarai Rohilla"
  },
  {
    "number": "14020",
    "name": "Delhi SR Chhindwara Kanhan Valley Express",
    "sourceCode": "DEE",
    "source": "Delhi Sarai Rohilla",
    "destCode": "CWA",
    "dest": "Chhindwara Junction"
  },
  {
    "number": "14033",
    "name": "Jammu Mail",
    "sourceCode": "DLI",
    "source": "Old Delhi",
    "destCode": "UHP",
    "dest": "Udhampur"
  },
  {
    "number": "14034",
    "name": "Jammu Mail",
    "sourceCode": "UHP",
    "source": "Udhampur",
    "destCode": "DLI",
    "dest": "Old Delhi"
  },
  {
    "number": "14035",
    "name": "Dhauladhar Express",
    "sourceCode": "DLI",
    "source": "Old Delhi",
    "destCode": "PTK",
    "dest": "Pathankot"
  },
  {
    "number": "14036",
    "name": "Dhauladhar Express",
    "sourceCode": "PTK",
    "source": "Pathankot",
    "destCode": "DLI",
    "dest": "Old Delhi"
  },
  {
    "number": "14037",
    "name": "Delhi-Pathankot Express",
    "sourceCode": "DLI",
    "source": "Old Delhi",
    "destCode": "PTK",
    "dest": "Pathankot"
  },
  {
    "number": "14038",
    "name": "Pathankot Delhi Express",
    "sourceCode": "PTK",
    "source": "Pathankot",
    "destCode": "DLI",
    "dest": "Old Delhi"
  },
  {
    "number": "14041",
    "name": "DELHI SARAI ROHILLA - DEHRADUN Mussoorie Exp",
    "sourceCode": "DEE",
    "source": "Delhi Sarai Rohilla",
    "destCode": "DDN",
    "dest": "Dehradun"
  },
  {
    "number": "14042",
    "name": "DEHRADUN - DELHI SARAI ROHILLA Mussoorie Exp",
    "sourceCode": "DDN",
    "source": "Dehradun",
    "destCode": "DEE",
    "dest": "Delhi Sarai Rohilla"
  },
  {
    "number": "14043",
    "name": "KOTDWAR - OLD DELHI Garhwal Exp",
    "sourceCode": "KTW",
    "source": "Kotdwara",
    "destCode": "DLI",
    "dest": "Old Delhi"
  },
  {
    "number": "14044",
    "name": "OLD DELHI - KOTDWAR Garhwal Exp",
    "sourceCode": "DLI",
    "source": "Old Delhi",
    "destCode": "KTW",
    "dest": "Kotdwara"
  },
  {
    "number": "14055",
    "name": "DIBRUGARH - OLD DELHI Brahmaputra Exp",
    "sourceCode": "DBRG",
    "source": "Dibrugarh",
    "destCode": "DLI",
    "dest": "Old Delhi"
  },
  {
    "number": "14056",
    "name": "OLD DELHI - DIBRUGARH Brahmaputra Exp",
    "sourceCode": "DLI",
    "source": "Old Delhi",
    "destCode": "DBRG",
    "dest": "Dibrugarh"
  },
  {
    "number": "14083",
    "name": "Sikkim Mahananda Express",
    "sourceCode": "APDJ",
    "source": "Alipur Duar Jn",
    "destCode": "DLI",
    "dest": "Old Delhi"
  },
  {
    "number": "14084",
    "name": "Sikkim Mahananda Express",
    "sourceCode": "DLI",
    "source": "Old Delhi",
    "destCode": "APDJ",
    "dest": "Alipur Duar Jn"
  },
  {
    "number": "14085",
    "name": "Haryana Express",
    "sourceCode": "TKJ",
    "source": "Tilak Bridge",
    "destCode": "SSA",
    "dest": "Sirsa"
  },
  {
    "number": "14086",
    "name": "Haryana Express",
    "sourceCode": "SSA",
    "source": "Sirsa",
    "destCode": "TKJ",
    "dest": "Tilak Bridge"
  },
  {
    "number": "14095",
    "name": "Himalayan Queen",
    "sourceCode": "DEE",
    "source": "Delhi Sarai Rohilla",
    "destCode": "KLK",
    "dest": "Kalka"
  },
  {
    "number": "14096",
    "name": "Himalayan Queen",
    "sourceCode": "KLK",
    "source": "Kalka",
    "destCode": "DEE",
    "dest": "Delhi Sarai Rohilla"
  },
  {
    "number": "14109",
    "name": "Chitrakoot Kanpur Express",
    "sourceCode": "CKTD",
    "source": "Chitrakutdham Karwi",
    "destCode": "CNB",
    "dest": "Kanpur Central"
  },
  {
    "number": "14110",
    "name": "Kanpur Chitrakoot Express",
    "sourceCode": "CNB",
    "source": "Kanpur Central",
    "destCode": "CKTD",
    "dest": "Chitrakutdham Karwi"
  },
  {
    "number": "14114",
    "name": "Link Express",
    "sourceCode": "DDN",
    "source": "Dehradun",
    "destCode": "ALD",
    "dest": "Allahabad Jn"
  },
  {
    "number": "14115",
    "name": "Haridwar Express",
    "sourceCode": "ALD",
    "source": "Allahabad Jn",
    "destCode": "HW",
    "dest": "Haridwar Jn"
  },
  {
    "number": "14116",
    "name": "Allahabad Express",
    "sourceCode": "HW",
    "source": "Haridwar Jn",
    "destCode": "ALD",
    "dest": "Allahabad Jn"
  },
  {
    "number": "14119",
    "name": "Kathgodam Dehradun Express",
    "sourceCode": "KGM",
    "source": "Kathgodam",
    "destCode": "DDN",
    "dest": "Dehradun"
  },
  {
    "number": "14120",
    "name": "Dehradun Kathgodam Express",
    "sourceCode": "DDN",
    "source": "Dehradun",
    "destCode": "KGM",
    "dest": "Kathgodam"
  },
  {
    "number": "14123",
    "name": "Pratapgarh Kanpur InterCity Express",
    "sourceCode": "PBH",
    "source": "Partapgarh Jn",
    "destCode": "CNB",
    "dest": "Kanpur Central"
  },
  {
    "number": "14124",
    "name": "Kanpur Pratapgarh InterCity Express",
    "sourceCode": "CNB",
    "source": "Kanpur Central",
    "destCode": "PBH",
    "dest": "Partapgarh Jn"
  },
  {
    "number": "14125",
    "name": "Saryu Express",
    "sourceCode": "ALD",
    "source": "Allahabad Jn",
    "destCode": "FD",
    "dest": "Faizabad Jn"
  },
  {
    "number": "14126",
    "name": "Saryu Express",
    "sourceCode": "FD",
    "source": "Faizabad Jn",
    "destCode": "ALD",
    "dest": "Allahabad Jn"
  },
  {
    "number": "14163",
    "name": "Sangam Express",
    "sourceCode": "ALD",
    "source": "Allahabad Jn",
    "destCode": "MTC",
    "dest": "Meerut City"
  },
  {
    "number": "14164",
    "name": "Sangam Express",
    "sourceCode": "MTC",
    "source": "Meerut City",
    "destCode": "ALD",
    "dest": "Allahabad Jn"
  },
  {
    "number": "14201",
    "name": "Jaunpur-Rae Bareliy Express",
    "sourceCode": "JNU",
    "source": "Jaunpur Jn",
    "destCode": "RBL",
    "dest": "Rae Bareli Jn"
  },
  {
    "number": "14202",
    "name": "Rai Bareli Jaunpur Express",
    "sourceCode": "RBL",
    "source": "Rae Bareli Jn",
    "destCode": "JNU",
    "dest": "Jaunpur Jn"
  },
  {
    "number": "14203",
    "name": "Varanasi Lucknow InterCity Express",
    "sourceCode": "BSB",
    "source": "Varanasi Jn",
    "destCode": "LKO",
    "dest": "Lucknow"
  },
  {
    "number": "14204",
    "name": "Lucknow Varanasi InterCity Express",
    "sourceCode": "LKO",
    "source": "Lucknow",
    "destCode": "BSB",
    "dest": "Varanasi Jn"
  },
  {
    "number": "14205",
    "name": "Faizabad Delhi Express",
    "sourceCode": "FD",
    "source": "Faizabad Jn",
    "destCode": "DLI",
    "dest": "Old Delhi"
  },
  {
    "number": "14206",
    "name": "Delhi-Faizabad Express",
    "sourceCode": "DLI",
    "source": "Old Delhi",
    "destCode": "FD",
    "dest": "Faizabad Jn"
  },
  {
    "number": "14207",
    "name": "Padmavat Express",
    "sourceCode": "PBH",
    "source": "Partapgarh Jn",
    "destCode": "DLI",
    "dest": "Old Delhi"
  },
  {
    "number": "14208",
    "name": "Padmavat Express",
    "sourceCode": "DLI",
    "source": "Old Delhi",
    "destCode": "PBH",
    "dest": "Partapgarh Jn"
  },
  {
    "number": "14209",
    "name": "Vindhyachal-Lucknow InterCity",
    "sourceCode": "BDL",
    "source": "Vindhyachal",
    "destCode": "LKO",
    "dest": "Lucknow"
  },
  {
    "number": "14210",
    "name": "Lucknow-Vindhyachal InterCity",
    "sourceCode": "LKO",
    "source": "Lucknow",
    "destCode": "BDL",
    "dest": "Vindhyachal"
  },
  {
    "number": "14211",
    "name": "Agra-New Delhi Intercity Express",
    "sourceCode": "AGC",
    "source": "Agra Cantt",
    "destCode": "NDLS",
    "dest": "New Delhi"
  },
  {
    "number": "14212",
    "name": "NewDelhi-Agra InterCity Express",
    "sourceCode": "NDLS",
    "source": "New Delhi",
    "destCode": "AGC",
    "dest": "Agra Cantt"
  },
  {
    "number": "14213",
    "name": "Varanasi-Gonda Intercity Express",
    "sourceCode": "BSB",
    "source": "Varanasi Jn",
    "destCode": "GD",
    "dest": "Gonda Jn"
  },
  {
    "number": "14214",
    "name": "Gonda-Varanasi Intercity Express",
    "sourceCode": "GD",
    "source": "Gonda Jn",
    "destCode": "BSB",
    "dest": "Varanasi Jn"
  },
  {
    "number": "14215",
    "name": "Ganga Gomti Express",
    "sourceCode": "ALD",
    "source": "Allahabad Jn",
    "destCode": "LKO",
    "dest": "Lucknow"
  },
  {
    "number": "14216",
    "name": "Ganga Gomti Express",
    "sourceCode": "LKO",
    "source": "Lucknow",
    "destCode": "ALD",
    "dest": "Allahabad Jn"
  },
  {
    "number": "14217",
    "name": "Unchahar Express",
    "sourceCode": "ALD",
    "source": "Allahabad Jn",
    "destCode": "CDG",
    "dest": "Chandigarh"
  },
  {
    "number": "14218",
    "name": "Chandigarh Allahabad Unchahar Express",
    "sourceCode": "CDG",
    "source": "Chandigarh",
    "destCode": "ALD",
    "dest": "Allahabad Jn"
  },
  {
    "number": "14227",
    "name": "Varuna Express",
    "sourceCode": "BSB",
    "source": "Varanasi Jn",
    "destCode": "LKO",
    "dest": "Lucknow"
  },
  {
    "number": "14228",
    "name": "Varuna Express",
    "sourceCode": "LKO",
    "source": "Lucknow",
    "destCode": "BSB",
    "dest": "Varanasi Jn"
  },
  {
    "number": "14235",
    "name": "Varanasi Bareilly Express",
    "sourceCode": "BSB",
    "source": "Varanasi Jn",
    "destCode": "BE",
    "dest": "Bareilly"
  },
  {
    "number": "14236",
    "name": "Bareilly Varanasi Express",
    "sourceCode": "BE",
    "source": "Bareilly",
    "destCode": "BSB",
    "dest": "Varanasi Jn"
  },
  {
    "number": "14257",
    "name": "Kashi Vishwanath Express",
    "sourceCode": "BSB",
    "source": "Varanasi Jn",
    "destCode": "NDLS",
    "dest": "New Delhi"
  },
  {
    "number": "14258",
    "name": "Kashi Vishwanath Express",
    "sourceCode": "NDLS",
    "source": "New Delhi",
    "destCode": "BSB",
    "dest": "Varanasi Jn"
  },
  {
    "number": "14265",
    "name": "Varanasi Dehradun Janata Express",
    "sourceCode": "BSB",
    "source": "Varanasi Jn",
    "destCode": "DDN",
    "dest": "Dehradun"
  },
  {
    "number": "14266",
    "name": "Dehradun Varanasi Janata Express",
    "sourceCode": "DDN",
    "source": "Dehradun",
    "destCode": "BSB",
    "dest": "Varanasi Jn"
  },
  {
    "number": "14307",
    "name": "Bareilly Express",
    "sourceCode": "PRG",
    "source": "Prayag",
    "destCode": "BE",
    "dest": "Bareilly"
  },
  {
    "number": "14309",
    "name": "Ujjaini Express",
    "sourceCode": "UJN",
    "source": "Ujjain Jn",
    "destCode": "DDN",
    "dest": "Dehradun"
  },
  {
    "number": "14310",
    "name": "Ujjaini Express",
    "sourceCode": "DDN",
    "source": "Dehradun",
    "destCode": "UJN",
    "dest": "Ujjain Jn"
  },
  {
    "number": "14311",
    "name": "BAREILLY - BHUJ Ala Hazrat Exp",
    "sourceCode": "BE",
    "source": "Bareilly",
    "destCode": "BHUJ",
    "dest": "Bhuj"
  },
  {
    "number": "14312",
    "name": "BHUJ - BAREILLY Ala Hazrat Exp",
    "sourceCode": "BHUJ",
    "source": "Bhuj",
    "destCode": "BE",
    "dest": "Bareilly"
  },
  {
    "number": "14313",
    "name": "MUMBAI LTT - BAREILLY Weekly Exp",
    "sourceCode": "LTT",
    "source": "Lokmanya Tilak Term",
    "destCode": "BE",
    "dest": "Bareilly"
  },
  {
    "number": "14314",
    "name": "BAREILLY - MUMBAI LTT Weekly Exp",
    "sourceCode": "BE",
    "source": "Bareilly",
    "destCode": "LTT",
    "dest": "Lokmanya Tilak Term"
  },
  {
    "number": "14315",
    "name": "Bareilly-NewDelhi InterCity",
    "sourceCode": "BE",
    "source": "Bareilly",
    "destCode": "NDLS",
    "dest": "New Delhi"
  },
  {
    "number": "14316",
    "name": "NewDelhi-Bareilly InterCity",
    "sourceCode": "NDLS",
    "source": "New Delhi",
    "destCode": "BE",
    "dest": "Bareilly"
  },
  {
    "number": "14317",
    "name": "INDORE - DEHRADUN Exp",
    "sourceCode": "INDB",
    "source": "Indore Jn Bg",
    "destCode": "DDN",
    "dest": "Dehradun"
  },
  {
    "number": "14318",
    "name": "DEHRADUN - INDORE Exp",
    "sourceCode": "DDN",
    "source": "Dehradun",
    "destCode": "INDB",
    "dest": "Indore Jn Bg"
  },
  {
    "number": "14321",
    "name": "BAREILLY - BHUJ Ala Hazrat Exp",
    "sourceCode": "BE",
    "source": "Bareilly",
    "destCode": "BHUJ",
    "dest": "Bhuj"
  },
  {
    "number": "14322",
    "name": "BHUJ - BAREILLY Ala Hazrat Exp",
    "sourceCode": "BHUJ",
    "source": "Bhuj",
    "destCode": "BE",
    "dest": "Bareilly"
  },
  {
    "number": "14323",
    "name": "New Delhi-Rohtak Express",
    "sourceCode": "NDLS",
    "source": "New Delhi",
    "destCode": "ROK",
    "dest": "Rohtak Jn"
  },
  {
    "number": "14324",
    "name": "New Delhi Express",
    "sourceCode": "ROK",
    "source": "Rohtak Jn",
    "destCode": "NDLS",
    "dest": "New Delhi"
  },
  {
    "number": "14369",
    "name": "Tribeni Express",
    "sourceCode": "SGRL",
    "source": "Singrauli",
    "destCode": "BE",
    "dest": "Bareilly"
  },
  {
    "number": "14370",
    "name": "Triveni Express",
    "sourceCode": "BE",
    "source": "Bareilly",
    "destCode": "SGRL",
    "dest": "Singrauli"
  },
  {
    "number": "14511",
    "name": "Allahabad-Saharanpur Nauchandi Express",
    "sourceCode": "ALD",
    "source": "Allahabad Jn",
    "destCode": "SRE",
    "dest": "Saharanpur"
  },
  {
    "number": "14512",
    "name": "Saharanpur-Allahabad Nauchandi Express",
    "sourceCode": "SRE",
    "source": "Saharanpur",
    "destCode": "ALD",
    "dest": "Allahabad Jn"
  },
  {
    "number": "14519",
    "name": "Kissan Express",
    "sourceCode": "DLI",
    "source": "Old Delhi",
    "destCode": "BTI",
    "dest": "Bhatinda Jn"
  },
  {
    "number": "14520",
    "name": "Kisan Express",
    "sourceCode": "BTI",
    "source": "Bhatinda Jn",
    "destCode": "DLI",
    "dest": "Old Delhi"
  },
  {
    "number": "14523",
    "name": "Harihar Express",
    "sourceCode": "MFP",
    "source": "Muzaffarpur Jn",
    "destCode": "UMB",
    "dest": "Ambala Cant Jn"
  },
  {
    "number": "14524",
    "name": "Harihar Express",
    "sourceCode": "UMB",
    "source": "Ambala Cant Jn",
    "destCode": "MFP",
    "dest": "Muzaffarpur Jn"
  },
  {
    "number": "14525",
    "name": "Ambala Cantt-Shri GangaNagar InterCity Express",
    "sourceCode": "UMB",
    "source": "Ambala Cant Jn",
    "destCode": "SGNR",
    "dest": "Shri Ganganagar"
  },
  {
    "number": "14526",
    "name": "Shri Ganganagar-Ambala Cantt InterCity Express",
    "sourceCode": "SGNR",
    "source": "Shri Ganganagar",
    "destCode": "UMB",
    "dest": "Ambala Cant Jn"
  },
  {
    "number": "14545",
    "name": "Farukhnagar Saharanpur Express",
    "sourceCode": "FN",
    "source": "Farukhnagar",
    "destCode": "SRE",
    "dest": "Saharanpur"
  },
  {
    "number": "14546",
    "name": "Saharanpur Farukhnagar Express",
    "sourceCode": "SRE",
    "source": "Saharanpur",
    "destCode": "FN",
    "dest": "Farukhnagar"
  },
  {
    "number": "14553",
    "name": "Himachal Express",
    "sourceCode": "DLI",
    "source": "Old Delhi",
    "destCode": "UHL",
    "dest": "Una Himachal"
  },
  {
    "number": "14554",
    "name": "Himachal Express",
    "sourceCode": "UHL",
    "source": "Una Himachal",
    "destCode": "DLI",
    "dest": "Old Delhi"
  },
  {
    "number": "14555",
    "name": "Bareilly-Delhi Express",
    "sourceCode": "BE",
    "source": "Bareilly",
    "destCode": "DLI",
    "dest": "Old Delhi"
  },
  {
    "number": "14556",
    "name": "Delhi-Bareilly Express",
    "sourceCode": "DLI",
    "source": "Old Delhi",
    "destCode": "BE",
    "dest": "Bareilly"
  },
  {
    "number": "14603",
    "name": "SAHARSA - AMRITSAR Jan Sadharan Exp",
    "sourceCode": "SHC",
    "source": "Saharsa Jn",
    "destCode": "ASR",
    "dest": "Amritsar Jn"
  },
  {
    "number": "14604",
    "name": "AMRITSAR - SAHARSA Jan Sadharan Exp",
    "sourceCode": "ASR",
    "source": "Amritsar Jn",
    "destCode": "SHC",
    "dest": "Saharsa Jn"
  },
  {
    "number": "14607",
    "name": "Amritsar Atari Samjhauta Express",
    "sourceCode": "ASR",
    "source": "Amritsar Jn",
    "destCode": "ATT",
    "dest": "Atari"
  },
  {
    "number": "14608",
    "name": "Atari Amritsar Samjhauta Express",
    "sourceCode": "ATT",
    "source": "Atari",
    "destCode": "ASR",
    "dest": "Amritsar Jn"
  },
  {
    "number": "14609",
    "name": "Hemkunt Express",
    "sourceCode": "RKSH",
    "source": "Rishikesh",
    "destCode": "JAT",
    "dest": "Jammu Tawi"
  },
  {
    "number": "14610",
    "name": "Hemkunt Express",
    "sourceCode": "JAT",
    "source": "Jammu Tawi",
    "destCode": "RKSH",
    "dest": "Rishikesh"
  },
  {
    "number": "14629",
    "name": "Ludhiana Firozpur Sutlej Express",
    "sourceCode": "LDH",
    "source": "Ludhiana Jn",
    "destCode": "FZR",
    "dest": "Firozpur Cant"
  },
  {
    "number": "14630",
    "name": "Firozpur Ludhiana Sutlej Express",
    "sourceCode": "FZR",
    "source": "Firozpur Cant",
    "destCode": "LDH",
    "dest": "Ludhiana Jn"
  },
  {
    "number": "14631",
    "name": "Dehradun Amritsar Express",
    "sourceCode": "DDN",
    "source": "Dehradun",
    "destCode": "ASR",
    "dest": "Amritsar Jn"
  },
  {
    "number": "14632",
    "name": "Amritsar Dehradun Express",
    "sourceCode": "ASR",
    "source": "Amritsar Jn",
    "destCode": "DDN",
    "dest": "Dehradun"
  },
  {
    "number": "14633",
    "name": "Ravi Express",
    "sourceCode": "ASR",
    "source": "Amritsar Jn",
    "destCode": "PTK",
    "dest": "Pathankot"
  },
  {
    "number": "14634",
    "name": "Ravi Express",
    "sourceCode": "PTK",
    "source": "Pathankot",
    "destCode": "ASR",
    "dest": "Amritsar Jn"
  },
  {
    "number": "14645",
    "name": "Shalimar Express",
    "sourceCode": "DLI",
    "source": "Old Delhi",
    "destCode": "JAT",
    "dest": "Jammu Tawi"
  },
  {
    "number": "14646",
    "name": "Shalimar Express",
    "sourceCode": "JAT",
    "source": "Jammu Tawi",
    "destCode": "DLI",
    "dest": "Old Delhi"
  },
  {
    "number": "14649",
    "name": "Saryu Yamuna Express",
    "sourceCode": "JYG",
    "source": "Jaynagar",
    "destCode": "ASR",
    "dest": "Amritsar Jn"
  },
  {
    "number": "14650",
    "name": "Saryu Yamuna Express",
    "sourceCode": "ASR",
    "source": "Amritsar Jn",
    "destCode": "JYG",
    "dest": "Jaynagar"
  },
  {
    "number": "14659",
    "name": "Delhi-Jaisalmer Express",
    "sourceCode": "DLI",
    "source": "Old Delhi",
    "destCode": "JSM",
    "dest": "Jaisalmer"
  },
  {
    "number": "14660",
    "name": "Jaisalmer Delhi Express",
    "sourceCode": "JSM",
    "source": "Jaisalmer",
    "destCode": "DLI",
    "dest": "Old Delhi"
  },
  {
    "number": "14661",
    "name": "Delhi Barmer Link Express",
    "sourceCode": "JU",
    "source": "Jodhpur Jn",
    "destCode": "BME",
    "dest": "Barmer"
  },
  {
    "number": "14662",
    "name": "Barmer-Delhi MALANI Express",
    "sourceCode": "BME",
    "source": "Barmer",
    "destCode": "DLI",
    "dest": "Old Delhi"
  },
  {
    "number": "14673",
    "name": "Shaheed Express",
    "sourceCode": "JYG",
    "source": "Jaynagar",
    "destCode": "ASR",
    "dest": "Amritsar Jn"
  },
  {
    "number": "14674",
    "name": "Shaheed Express",
    "sourceCode": "ASR",
    "source": "Amritsar Jn",
    "destCode": "JYG",
    "dest": "Jaynagar"
  },
  {
    "number": "14681",
    "name": "New Delhi-Jalandhar Express",
    "sourceCode": "NDLS",
    "source": "New Delhi",
    "destCode": "JUC",
    "dest": "Jalandhar City"
  },
  {
    "number": "14682",
    "name": "Jalandhar NDLS Express",
    "sourceCode": "JUC",
    "source": "Jalandhar City",
    "destCode": "NDLS",
    "dest": "New Delhi"
  },
  {
    "number": "14701",
    "name": "Jaisalmer-Bikaner Express",
    "sourceCode": "JSM",
    "source": "Jaisalmer",
    "destCode": "BKN",
    "dest": "Bikaner Jn"
  },
  {
    "number": "14702",
    "name": "Bikaner-Jaisalmer Express",
    "sourceCode": "BKN",
    "source": "Bikaner Jn",
    "destCode": "JSM",
    "dest": "Jaisalmer"
  },
  {
    "number": "14703",
    "name": "Bikaner Express",
    "sourceCode": "JSM",
    "source": "Jaisalmer",
    "destCode": "LGH",
    "dest": "Lalgarh Jn"
  },
  {
    "number": "14704",
    "name": "Jaisalmer Express",
    "sourceCode": "LGH",
    "source": "Lalgarh Jn",
    "destCode": "JSM",
    "dest": "Jaisalmer"
  },
  {
    "number": "14705",
    "name": "Delhi Sarai Rohilla Sadulpur Express",
    "sourceCode": "DEE",
    "source": "Delhi Sarai Rohilla",
    "destCode": "SDLP",
    "dest": "Sadulpur Junction"
  },
  {
    "number": "14706",
    "name": "Sadulpur Delhi Sarai Rohilla Express",
    "sourceCode": "SDLP",
    "source": "Sadulpur Junction",
    "destCode": "DEE",
    "dest": "Delhi Sarai Rohilla"
  },
  {
    "number": "14707",
    "name": "BIKANER - MUMBAI BANDRA Ranakpur Exp",
    "sourceCode": "BKN",
    "source": "Bikaner Jn",
    "destCode": "BDTS",
    "dest": "Mumbai Bandra Terminus"
  },
  {
    "number": "14708",
    "name": "MUMBAI BANDRA - BIKANER Ranakpur Exp",
    "sourceCode": "BDTS",
    "source": "Mumbai Bandra Terminus",
    "destCode": "BKN",
    "dest": "Bikaner Jn"
  },
  {
    "number": "14711",
    "name": "Haridwar Shri Ganganagar InterCity Express",
    "sourceCode": "HW",
    "source": "Haridwar Jn",
    "destCode": "SGNR",
    "dest": "Shri Ganganagar"
  },
  {
    "number": "14712",
    "name": "Shriganganagar Haridwar Express",
    "sourceCode": "SGNR",
    "source": "Shri Ganganagar",
    "destCode": "HW",
    "dest": "Haridwar Jn"
  },
  {
    "number": "14723",
    "name": "Kalindi Express",
    "sourceCode": "CNB",
    "source": "Kanpur Central",
    "destCode": "BNW",
    "dest": "Bhiwani"
  },
  {
    "number": "14724",
    "name": "Kalindi Express",
    "sourceCode": "BNW",
    "source": "Bhiwani",
    "destCode": "CNB",
    "dest": "Kanpur Central"
  },
  {
    "number": "14731",
    "name": "Delhi Bhatinda Intercity Express",
    "sourceCode": "DLI",
    "source": "Old Delhi",
    "destCode": "BTI",
    "dest": "Bhatinda Jn"
  },
  {
    "number": "14732",
    "name": "Bhatinda Delhi Express",
    "sourceCode": "BTI",
    "source": "Bhatinda Jn",
    "destCode": "DLI",
    "dest": "Old Delhi"
  },
  {
    "number": "14795",
    "name": "Ekta Express",
    "sourceCode": "BNW",
    "source": "Bhiwani",
    "destCode": "KLK",
    "dest": "Kalka"
  },
  {
    "number": "14796",
    "name": "Ekta Express",
    "sourceCode": "KLK",
    "source": "Kalka",
    "destCode": "BNW",
    "dest": "Bhiwani"
  },
  {
    "number": "14801",
    "name": "Jodhpur Gandhidham Express",
    "sourceCode": "JU",
    "source": "Jodhpur Jn",
    "destCode": "GIMB",
    "dest": "Gandhidham Bg"
  },
  {
    "number": "14802",
    "name": "Gandhidham Jodhpur Express",
    "sourceCode": "GIMB",
    "source": "Gandhidham Bg",
    "destCode": "JU",
    "dest": "Jodhpur Jn"
  },
  {
    "number": "14809",
    "name": "Jaisalmer Jodhpur Express",
    "sourceCode": "JSM",
    "source": "Jaisalmer",
    "destCode": "JU",
    "dest": "Jodhpur Jn"
  },
  {
    "number": "14810",
    "name": "Jaisalmer Express",
    "sourceCode": "JU",
    "source": "Jodhpur Jn",
    "destCode": "JSM",
    "dest": "Jaisalmer"
  },
  {
    "number": "14853",
    "name": "Marudhar Express",
    "sourceCode": "BSB",
    "source": "Varanasi Jn",
    "destCode": "JU",
    "dest": "Jodhpur Jn"
  },
  {
    "number": "14854",
    "name": "Marudhar Express",
    "sourceCode": "JU",
    "source": "Jodhpur Jn",
    "destCode": "BSB",
    "dest": "Varanasi Jn"
  },
  {
    "number": "14863",
    "name": "Marudhar Express",
    "sourceCode": "BSB",
    "source": "Varanasi Jn",
    "destCode": "JU",
    "dest": "Jodhpur Jn"
  },
  {
    "number": "14864",
    "name": "Marudhar Express",
    "sourceCode": "JU",
    "source": "Jodhpur Jn",
    "destCode": "BSB",
    "dest": "Varanasi Jn"
  },
  {
    "number": "14865",
    "name": "Marudhar Express",
    "sourceCode": "BSB",
    "source": "Varanasi Jn",
    "destCode": "JU",
    "dest": "Jodhpur Jn"
  },
  {
    "number": "14866",
    "name": "Marudhar Express",
    "sourceCode": "JU",
    "source": "Jodhpur Jn",
    "destCode": "BSB",
    "dest": "Varanasi Jn"
  },
  {
    "number": "14887",
    "name": "Kalka - Barmer Chandigarh Express",
    "sourceCode": "KLK",
    "source": "Kalka",
    "destCode": "BME",
    "dest": "Barmer"
  },
  {
    "number": "14888",
    "name": "Barmer-Kalka Express",
    "sourceCode": "BME",
    "source": "Barmer",
    "destCode": "KLK",
    "dest": "Kalka"
  },
  {
    "number": "14889",
    "name": "Thar Link Express",
    "sourceCode": "BGKT",
    "source": "Bhagat Ki Kothi",
    "destCode": "MBF",
    "dest": "Munabao"
  },
  {
    "number": "14890",
    "name": "Thar Link Express",
    "sourceCode": "MBF",
    "source": "Munabao",
    "destCode": "BGKT",
    "dest": "Bhagat Ki Kothi"
  },
  {
    "number": "15001",
    "name": "Rapti Ganga Express",
    "sourceCode": "MFP",
    "source": "Muzaffarpur Jn",
    "destCode": "DDN",
    "dest": "Dehradun"
  },
  {
    "number": "15002",
    "name": "Rapti Ganga Express",
    "sourceCode": "DDN",
    "source": "Dehradun",
    "destCode": "MFP",
    "dest": "Muzaffarpur Jn"
  },
  {
    "number": "15003",
    "name": "Chauri Chaura Express",
    "sourceCode": "CPA",
    "source": "Kanpur Anwarganj",
    "destCode": "GKP",
    "dest": "Gorakhpur Jn"
  },
  {
    "number": "15004",
    "name": "Chauri Chaura Express",
    "sourceCode": "GKP",
    "source": "Gorakhpur Jn",
    "destCode": "CPA",
    "dest": "Kanpur Anwarganj"
  },
  {
    "number": "15005",
    "name": "Rapti Ganga Express",
    "sourceCode": "GKP",
    "source": "Gorakhpur Jn",
    "destCode": "DDN",
    "dest": "Dehradun"
  },
  {
    "number": "15006",
    "name": "Rapti Ganga Express",
    "sourceCode": "DDN",
    "source": "Dehradun",
    "destCode": "GKP",
    "dest": "Gorakhpur Jn"
  },
  {
    "number": "15007",
    "name": "Krishak Express",
    "sourceCode": "MUV",
    "source": "Manduadih",
    "destCode": "LJN",
    "dest": "Lucknow Jn"
  },
  {
    "number": "15008",
    "name": "Krishak Express",
    "sourceCode": "LJN",
    "source": "Lucknow Jn",
    "destCode": "MUV",
    "dest": "Manduadih"
  },
  {
    "number": "15010",
    "name": "Chitrakoot Express",
    "sourceCode": "JBP",
    "source": "Jabalpur",
    "destCode": "LJN",
    "dest": "Lucknow Jn"
  },
  {
    "number": "15011",
    "name": "LUCKNOW - CHANDIGARH Exp",
    "sourceCode": "LJN",
    "source": "Lucknow Jn",
    "destCode": "CDG",
    "dest": "Chandigarh"
  },
  {
    "number": "15012",
    "name": "CHANDIGARH - LUCKNOW Exp",
    "sourceCode": "CDG",
    "source": "Chandigarh",
    "destCode": "LJN",
    "dest": "Lucknow Jn"
  },
  {
    "number": "15013",
    "name": "Ranikhet Express",
    "sourceCode": "DLI",
    "source": "Old Delhi",
    "destCode": "KGM",
    "dest": "Kathgodam"
  },
  {
    "number": "15014",
    "name": "Ranikhet Express",
    "sourceCode": "KGM",
    "source": "Kathgodam",
    "destCode": "DLI",
    "dest": "Old Delhi"
  },
  {
    "number": "15015",
    "name": "GORAKHPUR - YESVANTPUR Exp",
    "sourceCode": "GKP",
    "source": "Gorakhpur Jn",
    "destCode": "YPR",
    "dest": "Yesvantpur Jn"
  },
  {
    "number": "15016",
    "name": "YESVANTPUR - GORAKHPUR Exp",
    "sourceCode": "YPR",
    "source": "Yesvantpur Jn",
    "destCode": "GKP",
    "dest": "Gorakhpur Jn"
  },
  {
    "number": "15017",
    "name": "MUMBAI LTT - GORAKHPUR Kashi Exp",
    "sourceCode": "LTT",
    "source": "Lokmanya Tilak Term",
    "destCode": "GKP",
    "dest": "Gorakhpur Jn"
  },
  {
    "number": "15018",
    "name": "GORAKHPUR - MUMBAI LTT Kashi Exp",
    "sourceCode": "GKP",
    "source": "Gorakhpur Jn",
    "destCode": "LTT",
    "dest": "Lokmanya Tilak Term"
  },
  {
    "number": "15019",
    "name": "Gorakhpur Nautanwa Express",
    "sourceCode": "GKP",
    "source": "Gorakhpur Jn",
    "destCode": "NTV",
    "dest": "Nautanwa"
  },
  {
    "number": "15020",
    "name": "Gorakhpur Nautanwa Express",
    "sourceCode": "NTV",
    "source": "Nautanwa",
    "destCode": "GKP",
    "dest": "Gorakhpur Jn"
  },
  {
    "number": "15021",
    "name": "Kolkata Shalimar-Gorakhpur Bhojpuri Express",
    "sourceCode": "SHM",
    "source": "Kolkata Shalimar",
    "destCode": "GKP",
    "dest": "Gorakhpur Jn"
  },
  {
    "number": "15022",
    "name": "Bhojpuri Express",
    "sourceCode": "GKP",
    "source": "Gorakhpur Jn",
    "destCode": "SHM",
    "dest": "Kolkata Shalimar"
  },
  {
    "number": "15023",
    "name": "GORAKHPUR - YESVANTPUR Exp",
    "sourceCode": "GKP",
    "source": "Gorakhpur Jn",
    "destCode": "YPR",
    "dest": "Yesvantpur Jn"
  },
  {
    "number": "15024",
    "name": "YESVANTPUR - GORAKHPUR Exp",
    "sourceCode": "YPR",
    "source": "Yesvantpur Jn",
    "destCode": "GKP",
    "dest": "Gorakhpur Jn"
  },
  {
    "number": "15027",
    "name": "Maurya Express",
    "sourceCode": "HTE",
    "source": "Hatia",
    "destCode": "GKP",
    "dest": "Gorakhpur Jn"
  },
  {
    "number": "15028",
    "name": "Maurya Express",
    "sourceCode": "GKP",
    "source": "Gorakhpur Jn",
    "destCode": "HTE",
    "dest": "Hatia"
  },
  {
    "number": "15035",
    "name": "Uttarakhand Sampark Kranti Express",
    "sourceCode": "DLI",
    "source": "Old Delhi",
    "destCode": "KGM",
    "dest": "Kathgodam"
  },
  {
    "number": "15036",
    "name": "Uttarakhand Sampark Kranti Express",
    "sourceCode": "KGM",
    "source": "Kathgodam",
    "destCode": "DLI",
    "dest": "Old Delhi"
  },
  {
    "number": "15037",
    "name": "Kanpur Kasganj Express",
    "sourceCode": "CNB",
    "source": "Kanpur Central",
    "destCode": "KSJ",
    "dest": "Kasganj"
  },
  {
    "number": "15038",
    "name": "Kasganj Kanpur Express",
    "sourceCode": "KSJ",
    "source": "Kasganj",
    "destCode": "CNB",
    "dest": "Kanpur Central"
  },
  {
    "number": "15039",
    "name": "Farrukhabad Kasganj Express",
    "sourceCode": "FBD",
    "source": "Farrukhabad",
    "destCode": "KSJ",
    "dest": "Kasganj"
  },
  {
    "number": "15040",
    "name": "Farrukhabad Express",
    "sourceCode": "KSJ",
    "source": "Kasganj",
    "destCode": "FBD",
    "dest": "Farrukhabad"
  },
  {
    "number": "15041",
    "name": "Farrukhabad Kasganj Express",
    "sourceCode": "FBD",
    "source": "Farrukhabad",
    "destCode": "KSJ",
    "dest": "Kasganj"
  },
  {
    "number": "15042",
    "name": "Farrukhabad Express",
    "sourceCode": "KSJ",
    "source": "Kasganj",
    "destCode": "FBD",
    "dest": "Farrukhabad"
  },
  {
    "number": "15045",
    "name": "Gorakhpur-Okha Express",
    "sourceCode": "GKP",
    "source": "Gorakhpur Jn",
    "destCode": "OKHA",
    "dest": "Okha"
  },
  {
    "number": "15046",
    "name": "Okha-Gorakhpur Express",
    "sourceCode": "OKHA",
    "source": "Okha",
    "destCode": "GKP",
    "dest": "Gorakhpur Jn"
  },
  {
    "number": "15047",
    "name": "Purvanchal Express",
    "sourceCode": "KOAA",
    "source": "Kolkata Chitpur",
    "destCode": "GKP",
    "dest": "Gorakhpur Jn"
  },
  {
    "number": "15048",
    "name": "Purvanchal Express",
    "sourceCode": "GKP",
    "source": "Gorakhpur Jn",
    "destCode": "KOAA",
    "dest": "Kolkata Chitpur"
  },
  {
    "number": "15049",
    "name": "Poorvanchal Express",
    "sourceCode": "KOAA",
    "source": "Kolkata Chitpur",
    "destCode": "GKP",
    "dest": "Gorakhpur Jn"
  },
  {
    "number": "15050",
    "name": "Poorvanchal Express",
    "sourceCode": "GKP",
    "source": "Gorakhpur Jn",
    "destCode": "KOAA",
    "dest": "Kolkata Chitpur"
  },
  {
    "number": "15051",
    "name": "Poorvanchal Express",
    "sourceCode": "KOAA",
    "source": "Kolkata Chitpur",
    "destCode": "GKP",
    "dest": "Gorakhpur Jn"
  },
  {
    "number": "15052",
    "name": "Gorakhpur Kolkata Express",
    "sourceCode": "GKP",
    "source": "Gorakhpur Jn",
    "destCode": "KOAA",
    "dest": "Kolkata Chitpur"
  },
  {
    "number": "15097",
    "name": "Barauni-Jammu Amarnath Express",
    "sourceCode": "BJU",
    "source": "Barauni Jn",
    "destCode": "JAT",
    "dest": "Jammu Tawi"
  },
  {
    "number": "15098",
    "name": "Jammu-Barauni Amarnath Express",
    "sourceCode": "JAT",
    "source": "Jammu Tawi",
    "destCode": "BJU",
    "dest": "Barauni Jn"
  },
  {
    "number": "15101",
    "name": "Chhapra-Mumbai Jansadharan Express",
    "sourceCode": "CPR",
    "source": "Chhapra",
    "destCode": "CSTM",
    "dest": "Mumbai Cst"
  },
  {
    "number": "15102",
    "name": "Mumbai CST Chhapra Jansadharan Express",
    "sourceCode": "CSTM",
    "source": "Mumbai Cst",
    "destCode": "CPR",
    "dest": "Chhapra"
  },
  {
    "number": "15103",
    "name": "Gorakhpur Manduadih Intercity Express",
    "sourceCode": "GKP",
    "source": "Gorakhpur Jn",
    "destCode": "MUV",
    "dest": "Manduadih"
  },
  {
    "number": "15104",
    "name": "Manduadih Gorakhpur InterCity",
    "sourceCode": "MUV",
    "source": "Manduadih",
    "destCode": "GKP",
    "dest": "Gorakhpur Jn"
  },
  {
    "number": "15105",
    "name": "Chhapra Gorakhpur InterCity Express",
    "sourceCode": "CPR",
    "source": "Chhapra",
    "destCode": "GKP",
    "dest": "Gorakhpur Jn"
  },
  {
    "number": "15106",
    "name": "Gorakhpur Chhapra InterCity Express",
    "sourceCode": "GKP",
    "source": "Gorakhpur Jn",
    "destCode": "CPR",
    "dest": "Chhapra"
  },
  {
    "number": "15107",
    "name": "Chhapra Mathura Express",
    "sourceCode": "CPR",
    "source": "Chhapra",
    "destCode": "MTJ",
    "dest": "Mathura Jn"
  },
  {
    "number": "15108",
    "name": "Mathura Chhapra Express",
    "sourceCode": "MTJ",
    "source": "Mathura Jn",
    "destCode": "CPR",
    "dest": "Chhapra"
  },
  {
    "number": "15109",
    "name": "Budhpurnima Express",
    "sourceCode": "RGD",
    "source": "Rajgir",
    "destCode": "BSB",
    "dest": "Varanasi Jn"
  },
  {
    "number": "15110",
    "name": "Budhpurnima Express",
    "sourceCode": "BSB",
    "source": "Varanasi Jn",
    "destCode": "RGD",
    "dest": "Rajgir"
  },
  {
    "number": "15159",
    "name": "Sarnath Express",
    "sourceCode": "CPR",
    "source": "Chhapra",
    "destCode": "DURG",
    "dest": "Durg"
  },
  {
    "number": "15160",
    "name": "Sarnath Express",
    "sourceCode": "DURG",
    "source": "Durg",
    "destCode": "CPR",
    "dest": "Chhapra"
  },
  {
    "number": "15201",
    "name": "Hajipur Raxaul InterCity",
    "sourceCode": "HJP",
    "source": "Hajipur Jn",
    "destCode": "RXL",
    "dest": "Raxaul Jn"
  },
  {
    "number": "15202",
    "name": "Raxaul Hajipur InterCity",
    "sourceCode": "RXL",
    "source": "Raxaul Jn",
    "destCode": "HJP",
    "dest": "Hajipur Jn"
  },
  {
    "number": "15203",
    "name": "Barauni-Lucknow Express",
    "sourceCode": "BJU",
    "source": "Barauni Jn",
    "destCode": "LJN",
    "dest": "Lucknow Jn"
  },
  {
    "number": "15204",
    "name": "Lucknow-Barauni Express",
    "sourceCode": "LJN",
    "source": "Lucknow Jn",
    "destCode": "BJU",
    "dest": "Barauni Jn"
  },
  {
    "number": "15209",
    "name": "SAHARSA - AMRITSAR Jan Seva Exp",
    "sourceCode": "SHC",
    "source": "Saharsa Jn",
    "destCode": "ASR",
    "dest": "Amritsar Jn"
  },
  {
    "number": "15210",
    "name": "AMRITSAR - SAHARSA Jan Seva Exp",
    "sourceCode": "ASR",
    "source": "Amritsar Jn",
    "destCode": "SHC",
    "dest": "Saharsa Jn"
  },
  {
    "number": "15211",
    "name": "DARBHANGA - AMRITSAR Jan Nayak Exp",
    "sourceCode": "DBG",
    "source": "Darbhanga Jn",
    "destCode": "ASR",
    "dest": "Amritsar Jn"
  },
  {
    "number": "15212",
    "name": "AMRITSAR - DARBHANGA Jan Nayak Exp",
    "sourceCode": "ASR",
    "source": "Amritsar Jn",
    "destCode": "DBG",
    "dest": "Darbhanga Jn"
  },
  {
    "number": "15215",
    "name": "Muzaffarpur-Narkatiaganj Express",
    "sourceCode": "MFP",
    "source": "Muzaffarpur Jn",
    "destCode": "NKE",
    "dest": "Narkatiaganj Jn"
  },
  {
    "number": "15216",
    "name": "Narkatiaganj-Muzaffarpur Express",
    "sourceCode": "NKE",
    "source": "Narkatiaganj Jn",
    "destCode": "MFP",
    "dest": "Muzaffarpur Jn"
  },
  {
    "number": "15227",
    "name": "YESVANTPUR - MUZAFFARPUR Weekly Exp",
    "sourceCode": "YPR",
    "source": "Yesvantpur Jn",
    "destCode": "MFP",
    "dest": "Muzaffarpur Jn"
  },
  {
    "number": "15228",
    "name": "MUZAFFARPUR - YESVANTPUR Weekly Exp",
    "sourceCode": "MFP",
    "source": "Muzaffarpur Jn",
    "destCode": "YPR",
    "dest": "Yesvantpur Jn"
  },
  {
    "number": "15233",
    "name": "KOLKATA CHITPUR - DARBHANGA Maithili Exp",
    "sourceCode": "KOAA",
    "source": "Kolkata Chitpur",
    "destCode": "DBG",
    "dest": "Darbhanga Jn"
  },
  {
    "number": "15234",
    "name": "DARBHANGA - KOLKATA CHITPUR Maithili Exp",
    "sourceCode": "DBG",
    "source": "Darbhanga Jn",
    "destCode": "KOAA",
    "dest": "Kolkata Chitpur"
  },
  {
    "number": "15235",
    "name": "Howrah-Darbhanga Express",
    "sourceCode": "HWH",
    "source": "Howrah Jn",
    "destCode": "DBG",
    "dest": "Darbhanga Jn"
  },
  {
    "number": "15236",
    "name": "Darbhanga-Howrah Express",
    "sourceCode": "DBG",
    "source": "Darbhanga Jn",
    "destCode": "HWH",
    "dest": "Howrah Jn"
  },
  {
    "number": "15267",
    "name": "RAXAUL - MUMBAI LTT Jan Sadharan Exp",
    "sourceCode": "RXL",
    "source": "Raxaul Jn",
    "destCode": "LTT",
    "dest": "Lokmanya Tilak Term"
  },
  {
    "number": "15268",
    "name": "MUMBAI LTT - RAXAUL Jan Sadharan Exp",
    "sourceCode": "LTT",
    "source": "Lokmanya Tilak Term",
    "destCode": "RXL",
    "dest": "Raxaul Jn"
  },
  {
    "number": "15269",
    "name": "MUZAFFARPUR - AHMEDABAD Jan Sadharan Exp",
    "sourceCode": "MFP",
    "source": "Muzaffarpur Jn",
    "destCode": "ADI",
    "dest": "Ahmedabad Jn"
  },
  {
    "number": "15270",
    "name": "AHMEDABAD - MUZAFFARPUR Jan Sadharan Exp",
    "sourceCode": "ADI",
    "source": "Ahmedabad Jn",
    "destCode": "MFP",
    "dest": "Muzaffarpur Jn"
  },
  {
    "number": "15271",
    "name": "Howrah-Muzaffarpur JanSadharan Express",
    "sourceCode": "HWH",
    "source": "Howrah Jn",
    "destCode": "MFP",
    "dest": "Muzaffarpur Jn"
  },
  {
    "number": "15272",
    "name": "Muzzafarpur-Howrah JanSadharan Express",
    "sourceCode": "MFP",
    "source": "Muzaffarpur Jn",
    "destCode": "HWH",
    "dest": "Howrah Jn"
  },
  {
    "number": "15273",
    "name": "Satyagraha Express",
    "sourceCode": "RXL",
    "source": "Raxaul Jn",
    "destCode": "DLI",
    "dest": "Old Delhi"
  },
  {
    "number": "15274",
    "name": "Satyagraha Express",
    "sourceCode": "DLI",
    "source": "Old Delhi",
    "destCode": "RXL",
    "dest": "Raxaul Jn"
  },
  {
    "number": "15275",
    "name": "Saharsa-Barauni Express",
    "sourceCode": "SHC",
    "source": "Saharsa Jn",
    "destCode": "BJU",
    "dest": "Barauni Jn"
  },
  {
    "number": "15276",
    "name": "Barauni-Saharsa Express",
    "sourceCode": "BJU",
    "source": "Barauni Jn",
    "destCode": "SHC",
    "dest": "Saharsa Jn"
  },
  {
    "number": "15279",
    "name": "Poorbiya Express",
    "sourceCode": "SHC",
    "source": "Saharsa Jn",
    "destCode": "ANDI",
    "dest": "Adarsh Nagar Delhi"
  },
  {
    "number": "15280",
    "name": "Poorabiya Express",
    "sourceCode": "ANDI",
    "source": "Adarsh Nagar Delhi",
    "destCode": "SHC",
    "dest": "Saharsa Jn"
  },
  {
    "number": "15281",
    "name": "Kosi Express",
    "sourceCode": "SHC",
    "source": "Saharsa Jn",
    "destCode": "PNBE",
    "dest": "Patna Jn"
  },
  {
    "number": "15282",
    "name": "Kosi Express",
    "sourceCode": "PNBE",
    "source": "Patna Jn",
    "destCode": "SHC",
    "dest": "Saharsa Jn"
  },
  {
    "number": "15283",
    "name": "Janaki Express",
    "sourceCode": "SHC",
    "source": "Saharsa Jn",
    "destCode": "JYG",
    "dest": "Jaynagar"
  },
  {
    "number": "15284",
    "name": "Janaki Express",
    "sourceCode": "JYG",
    "source": "Jaynagar",
    "destCode": "SHC",
    "dest": "Saharsa Jn"
  },
  {
    "number": "15307",
    "name": "Nainital Express",
    "sourceCode": "LKU",
    "source": "Lal Kuan",
    "destCode": "ASH",
    "dest": "Aishbagh"
  },
  {
    "number": "15308",
    "name": "Nainital Express",
    "sourceCode": "ASH",
    "source": "Aishbagh",
    "destCode": "LKU",
    "dest": "Lal Kuan"
  },
  {
    "number": "15309",
    "name": "Rohilkhand Express",
    "sourceCode": "KSJF",
    "source": "Kasganj Mg",
    "destCode": "ASH",
    "dest": "Aishbagh"
  },
  {
    "number": "15310",
    "name": "Rohilkhand Express",
    "sourceCode": "ASH",
    "source": "Aishbagh",
    "destCode": "KSJF",
    "dest": "Kasganj Mg"
  },
  {
    "number": "15311",
    "name": "KUMAON EXPRESS",
    "sourceCode": "KSJF",
    "source": "Kasganj Mg",
    "destCode": "LKKA",
    "dest": "Lal Kuan"
  },
  {
    "number": "15312",
    "name": "Kumaun Express",
    "sourceCode": "LKKA",
    "source": "Lal Kuan",
    "destCode": "KSJF",
    "dest": "Kasganj Mg"
  },
  {
    "number": "15313",
    "name": "Aishbagh Bareilly Express",
    "sourceCode": "ASH",
    "source": "Aishbagh",
    "destCode": "BRY",
    "dest": "Bareilly"
  },
  {
    "number": "15314",
    "name": "Aishbagh Express",
    "sourceCode": "BRY",
    "source": "Bareilly",
    "destCode": "ASH",
    "dest": "Aishbagh"
  },
  {
    "number": "15315",
    "name": "Gonda-Kasganj Gokul Express",
    "sourceCode": "GD",
    "source": "Gonda Jn",
    "destCode": "KSJ",
    "dest": "Kasganj"
  },
  {
    "number": "15316",
    "name": "Kasganj-Gonda Gokul Express",
    "sourceCode": "KSJ",
    "source": "Kasganj",
    "destCode": "GD",
    "dest": "Gonda Jn"
  },
  {
    "number": "15321",
    "name": "Kapilavastu Express",
    "sourceCode": "ANDN",
    "source": "Anand Nagar",
    "destCode": "GD",
    "dest": "Gonda Jn"
  },
  {
    "number": "15322",
    "name": "Kapilavastu Express",
    "sourceCode": "GD",
    "source": "Gonda Jn",
    "destCode": "ANDN",
    "dest": "Anand Nagar"
  },
  {
    "number": "15603",
    "name": "Guwahati Ledo Intercity Express",
    "sourceCode": "GHY",
    "source": "Guwahati",
    "destCode": "LEDO",
    "dest": "Ledo"
  },
  {
    "number": "15604",
    "name": "Ledo Guwahati Intercity Express",
    "sourceCode": "LEDO",
    "source": "Ledo",
    "destCode": "GHY",
    "dest": "Guwahati"
  },
  {
    "number": "15605",
    "name": "Jorhat Town InterCity Express",
    "sourceCode": "GHY",
    "source": "Guwahati",
    "destCode": "MXN",
    "dest": "Mariani Jn"
  },
  {
    "number": "15606",
    "name": "Guwahati InterCity Express",
    "sourceCode": "MXN",
    "source": "Mariani Jn",
    "destCode": "GHY",
    "dest": "Guwahati"
  },
  {
    "number": "15609",
    "name": "Awadh Assam Express",
    "sourceCode": "GHY",
    "source": "Guwahati",
    "destCode": "LGH",
    "dest": "Lalgarh Jn"
  },
  {
    "number": "15610",
    "name": "Awadh Assam Express",
    "sourceCode": "LGH",
    "source": "Lalgarh Jn",
    "destCode": "GHY",
    "dest": "Guwahati"
  },
  {
    "number": "15611",
    "name": "Lokmanya Tilak (T)-Kamakhya Karmabhoomi Express",
    "sourceCode": "LTT",
    "source": "Lokmanya Tilak Term",
    "destCode": "KYQ",
    "dest": "Kamakhya"
  },
  {
    "number": "15612",
    "name": "Kamakhya-Mumbai LTT Karmabhoomi Express",
    "sourceCode": "KYQ",
    "source": "Kamakhya",
    "destCode": "LTT",
    "dest": "Lokmanya Tilak Term"
  },
  {
    "number": "15619",
    "name": "GAYA - KAMAKHYA Weekly Exp",
    "sourceCode": "GAYA",
    "source": "Gaya Jn",
    "destCode": "KYQ",
    "dest": "Kamakhya"
  },
  {
    "number": "15620",
    "name": "KAMAKHYA - GAYA Weekly Exp",
    "sourceCode": "KYQ",
    "source": "Kamakhya",
    "destCode": "GAYA",
    "dest": "Gaya Jn"
  },
  {
    "number": "15629",
    "name": "CHENNAI EGMORE - GUWAHATI Exp",
    "sourceCode": "MS",
    "source": "Chennai Egmore",
    "destCode": "GHY",
    "dest": "Guwahati"
  },
  {
    "number": "15630",
    "name": "GUWAHATI - CHENNAI EGMORE Exp",
    "sourceCode": "GHY",
    "source": "Guwahati",
    "destCode": "MS",
    "dest": "Chennai Egmore"
  },
  {
    "number": "15631",
    "name": "BARMER - GUWAHATI Exp",
    "sourceCode": "BME",
    "source": "Barmer",
    "destCode": "GHY",
    "dest": "Guwahati"
  },
  {
    "number": "15632",
    "name": "GUWAHATI - BARMER Exp",
    "sourceCode": "GHY",
    "source": "Guwahati",
    "destCode": "BME",
    "dest": "Barmer"
  },
  {
    "number": "15635",
    "name": "OKHA - GUWAHATI EXP",
    "sourceCode": "OKHA",
    "source": "Okha",
    "destCode": "GHY",
    "dest": "Guwahati"
  },
  {
    "number": "15636",
    "name": "GUWAHATI - OKHA DWARKA EXP",
    "sourceCode": "GHY",
    "source": "Guwahati",
    "destCode": "OKHA",
    "dest": "Okha"
  },
  {
    "number": "15639",
    "name": "PURI - GUWAHATI Exp",
    "sourceCode": "PURI",
    "source": "Puri",
    "destCode": "GHY",
    "dest": "Guwahati"
  },
  {
    "number": "15640",
    "name": "GUWAHATI - PURI Exp",
    "sourceCode": "GHY",
    "source": "Guwahati",
    "destCode": "PURI",
    "dest": "Puri"
  },
  {
    "number": "15643",
    "name": "PURI - KAMAKHYA Weekly Express",
    "sourceCode": "PURI",
    "source": "Puri",
    "destCode": "KYQ",
    "dest": "Kamakhya"
  },
  {
    "number": "15644",
    "name": "KAMAKHYA - PURI Weekly Spl",
    "sourceCode": "KYQ",
    "source": "Kamakhya",
    "destCode": "PURI",
    "dest": "Puri"
  },
  {
    "number": "15645",
    "name": "MUMBAI LTT - GUWAHATI Exp",
    "sourceCode": "LTT",
    "source": "Lokmanya Tilak Term",
    "destCode": "GHY",
    "dest": "Guwahati"
  },
  {
    "number": "15646",
    "name": "GUWAHATI - MUMBAI LTT Exp",
    "sourceCode": "GHY",
    "source": "Guwahati",
    "destCode": "LTT",
    "dest": "Lokmanya Tilak Term"
  },
  {
    "number": "15647",
    "name": "MUMBAI LTT - GUWAHATI Exp",
    "sourceCode": "LTT",
    "source": "Lokmanya Tilak Term",
    "destCode": "GHY",
    "dest": "Guwahati"
  },
  {
    "number": "15648",
    "name": "GUWAHATI - MUMBAI LTT Exp",
    "sourceCode": "GHY",
    "source": "Guwahati",
    "destCode": "LTT",
    "dest": "Lokmanya Tilak Term"
  },
  {
    "number": "15651",
    "name": "GUWAHATI - JAMMU TAWI Lohit Exp",
    "sourceCode": "GHY",
    "source": "Guwahati",
    "destCode": "JAT",
    "dest": "Jammu Tawi"
  },
  {
    "number": "15652",
    "name": "JAMMU TAWI - GUWAHATI Lohit Exp",
    "sourceCode": "JAT",
    "source": "Jammu Tawi",
    "destCode": "GHY",
    "dest": "Guwahati"
  },
  {
    "number": "15653",
    "name": "GUWAHATI - JAMMU TAWI Amarnath Exp",
    "sourceCode": "GHY",
    "source": "Guwahati",
    "destCode": "JAT",
    "dest": "Jammu Tawi"
  },
  {
    "number": "15654",
    "name": "JAMMU TAWI - GUWAHATI Amarnath Exp",
    "sourceCode": "JAT",
    "source": "Jammu Tawi",
    "destCode": "GHY",
    "dest": "Guwahati"
  },
  {
    "number": "15657",
    "name": "KOLKATA SEALDAH - GUWAHATI KanchanJungha Exp",
    "sourceCode": "SDAH",
    "source": "Kolkata Sealdah",
    "destCode": "GHY",
    "dest": "Guwahati"
  },
  {
    "number": "15658",
    "name": "GUWAHATI - KOLKATA SEALDAH KanchanJungha Exp",
    "sourceCode": "GHY",
    "source": "Guwahati",
    "destCode": "SDAH",
    "dest": "Kolkata Sealdah"
  },
  {
    "number": "15661",
    "name": "RANCHI - KAMAKHYA Exp",
    "sourceCode": "RNC",
    "source": "Ranchi",
    "destCode": "KYQ",
    "dest": "Kamakhya"
  },
  {
    "number": "15662",
    "name": "KAMAKHYA - RANCHI Exp",
    "sourceCode": "KYQ",
    "source": "Kamakhya",
    "destCode": "RNC",
    "dest": "Ranchi"
  },
  {
    "number": "15665",
    "name": "Guwahati-Dimapur Express",
    "sourceCode": "GHY",
    "source": "Guwahati",
    "destCode": "DMV",
    "dest": "Dimapur"
  },
  {
    "number": "15666",
    "name": "Dimapur-Guwahati Express",
    "sourceCode": "DMV",
    "source": "Dimapur",
    "destCode": "GHY",
    "dest": "Guwahati"
  },
  {
    "number": "15667",
    "name": "GANDHIDHAM - KAMAKHYA Exp",
    "sourceCode": "GIMB",
    "source": "Gandhidham Bg",
    "destCode": "KYQ",
    "dest": "Kamakhya"
  },
  {
    "number": "15668",
    "name": "KAMAKHYA - GANDHIDHAM Exp",
    "sourceCode": "KYQ",
    "source": "Kamakhya",
    "destCode": "GIMB",
    "dest": "Gandhidham Bg"
  },
  {
    "number": "15669",
    "name": "Nagaland Express",
    "sourceCode": "KYQ",
    "source": "Kamakhya",
    "destCode": "DMV",
    "dest": "Dimapur"
  },
  {
    "number": "15670",
    "name": "Nagaland Express",
    "sourceCode": "DMV",
    "source": "Dimapur",
    "destCode": "KYQ",
    "dest": "Kamakhya"
  },
  {
    "number": "15691",
    "name": "Cachar Express",
    "sourceCode": "LMG",
    "source": "Lumding Jn",
    "destCode": "SCL",
    "dest": "Silchar"
  },
  {
    "number": "15692",
    "name": "Cachar Express",
    "sourceCode": "SCL",
    "source": "Silchar",
    "destCode": "LMG",
    "dest": "Lumding Jn"
  },
  {
    "number": "15693",
    "name": "Barak Valley Express",
    "sourceCode": "LMG",
    "source": "Lumding Jn",
    "destCode": "SCL",
    "dest": "Silchar"
  },
  {
    "number": "15694",
    "name": "Barak Valley Express",
    "sourceCode": "SCL",
    "source": "Silchar",
    "destCode": "LMG",
    "dest": "Lumding Jn"
  },
  {
    "number": "15695",
    "name": "Lumding Agartala Express",
    "sourceCode": "LMG",
    "source": "Lumding Jn",
    "destCode": "AGTL",
    "dest": "Agartala"
  },
  {
    "number": "15696",
    "name": "Agartala Lumding Express",
    "sourceCode": "AGTL",
    "source": "Agartala",
    "destCode": "LMG",
    "dest": "Lumding Jn"
  },
  {
    "number": "15707",
    "name": "Amrapali Express",
    "sourceCode": "KIR",
    "source": "Katihar Jn",
    "destCode": "ASR",
    "dest": "Amritsar Jn"
  },
  {
    "number": "15708",
    "name": "Amrapali Express",
    "sourceCode": "ASR",
    "source": "Amritsar Jn",
    "destCode": "KIR",
    "dest": "Katihar Jn"
  },
  {
    "number": "15713",
    "name": "InterCity Express",
    "sourceCode": "KIR",
    "source": "Katihar Jn",
    "destCode": "PNBE",
    "dest": "Patna Jn"
  },
  {
    "number": "15714",
    "name": "InterCity Express",
    "sourceCode": "PNBE",
    "source": "Patna Jn",
    "destCode": "KIR",
    "dest": "Katihar Jn"
  },
  {
    "number": "15715",
    "name": "Garib Nawaz Express",
    "sourceCode": "KNE",
    "source": "Kishanganj",
    "destCode": "AII",
    "dest": "Ajmer Jn"
  },
  {
    "number": "15716",
    "name": "Garib Nawaz Express Slip",
    "sourceCode": "AII",
    "source": "Ajmer Jn",
    "destCode": "KNE",
    "dest": "Kishanganj"
  },
  {
    "number": "15717",
    "name": "Guwahati Mariani Intercity Express",
    "sourceCode": "GHY",
    "source": "Guwahati",
    "destCode": "MXN",
    "dest": "Mariani Jn"
  },
  {
    "number": "15718",
    "name": "Mariani-Guwahati Intercity Express",
    "sourceCode": "MXN",
    "source": "Mariani Jn",
    "destCode": "GHY",
    "dest": "Guwahati"
  },
  {
    "number": "15719",
    "name": "Katihar sguj InterCity Express",
    "sourceCode": "KIR",
    "source": "Katihar Jn",
    "destCode": "SGUJ",
    "dest": "Siliguri Jn"
  },
  {
    "number": "15720",
    "name": "Siliguri Katihar InterCity Express",
    "sourceCode": "SGUJ",
    "source": "Siliguri Jn",
    "destCode": "KIR",
    "dest": "Katihar Jn"
  },
  {
    "number": "15721",
    "name": "Paharia Express",
    "sourceCode": "DGHA",
    "source": "Digha Flag Station",
    "destCode": "NJP",
    "dest": "New Jalpaiguri"
  },
  {
    "number": "15722",
    "name": "Paharia Express",
    "sourceCode": "NJP",
    "source": "New Jalpaiguri",
    "destCode": "DGHA",
    "dest": "Digha Flag Station"
  },
  {
    "number": "15723",
    "name": "NewJalpaiguri-Darbhanga Weekly Express",
    "sourceCode": "NJP",
    "source": "New Jalpaiguri",
    "destCode": "DBG",
    "dest": "Darbhanga Jn"
  },
  {
    "number": "15724",
    "name": "Darbhanga-NewJalpaiguri Weekly Express",
    "sourceCode": "DBG",
    "source": "Darbhanga Jn",
    "destCode": "NJP",
    "dest": "New Jalpaiguri"
  },
  {
    "number": "15743",
    "name": "InterCity Express",
    "sourceCode": "APDJ",
    "source": "Alipur Duar Jn",
    "destCode": "KYQ",
    "dest": "Kamakhya"
  },
  {
    "number": "15763",
    "name": "Balurghat-New Jalpaiguri Intercity Express",
    "sourceCode": "BLGT",
    "source": "Balurghat",
    "destCode": "NJP",
    "dest": "New Jalpaiguri"
  },
  {
    "number": "15764",
    "name": "NewJalpaiguri-Balurghat Intercity Express",
    "sourceCode": "NJP",
    "source": "New Jalpaiguri",
    "destCode": "BLGT",
    "dest": "Balurghat"
  },
  {
    "number": "15765",
    "name": "New Jalpaiguri Alipur Duar Intercity Express",
    "sourceCode": "NJP",
    "source": "New Jalpaiguri",
    "destCode": "APDJ",
    "dest": "Alipur Duar Jn"
  },
  {
    "number": "15766",
    "name": "Alipur Duar-New Jalpaiguri Intercity Express",
    "sourceCode": "APDJ",
    "source": "Alipur Duar Jn",
    "destCode": "NJP",
    "dest": "New Jalpaiguri"
  },
  {
    "number": "15767",
    "name": "New Jalpaiguri-Alipur Duar Intercity Express",
    "sourceCode": "NJP",
    "source": "New Jalpaiguri",
    "destCode": "APDJ",
    "dest": "Alipur Duar Jn"
  },
  {
    "number": "15768",
    "name": "Alipurduar Jn-New Jalpaiguri InterCity Express",
    "sourceCode": "APDJ",
    "source": "Alipur Duar Jn",
    "destCode": "NJP",
    "dest": "New Jalpaiguri"
  },
  {
    "number": "15769",
    "name": "Alipurduar Lumding Express",
    "sourceCode": "APDJ",
    "source": "Alipur Duar Jn",
    "destCode": "LMG",
    "dest": "Lumding Jn"
  },
  {
    "number": "15770",
    "name": "Lumding Alipurduar Express",
    "sourceCode": "LMG",
    "source": "Lumding Jn",
    "destCode": "APDJ",
    "dest": "Alipur Duar Jn"
  },
  {
    "number": "15771",
    "name": "AlipurDuar-Kamakhya Intercity Express",
    "sourceCode": "APDJ",
    "source": "Alipur Duar Jn",
    "destCode": "KYQ",
    "dest": "Kamakhya"
  },
  {
    "number": "15772",
    "name": "Kamakhya-AlipurDuar Intercity Express",
    "sourceCode": "KYQ",
    "source": "Kamakhya",
    "destCode": "APDJ",
    "dest": "Alipur Duar Jn"
  },
  {
    "number": "15903",
    "name": "Dibrugarh-Chandigarh Weekly Express",
    "sourceCode": "DBRG",
    "source": "Dibrugarh",
    "destCode": "CDG",
    "dest": "Chandigarh"
  },
  {
    "number": "15905",
    "name": "KANNIYAKUMARI - DIBRUGARH Vivek Exp",
    "sourceCode": "CAPE",
    "source": "Kanyakumari",
    "destCode": "DBRG",
    "dest": "Dibrugarh"
  },
  {
    "number": "15906",
    "name": "DIBRUGARH - KANNIYAKUMARI Vivek Exp",
    "sourceCode": "DBRG",
    "source": "Dibrugarh",
    "destCode": "CAPE",
    "dest": "Kanyakumari"
  },
  {
    "number": "15927",
    "name": "Kamakhya Dibrugarh Express",
    "sourceCode": "KYQ",
    "source": "Kamakhya",
    "destCode": "DBRG",
    "dest": "Dibrugarh"
  },
  {
    "number": "15928",
    "name": "Dibrugarh Kamakhya Express",
    "sourceCode": "DBRG",
    "source": "Dibrugarh",
    "destCode": "KYQ",
    "dest": "Kamakhya"
  },
  {
    "number": "15929",
    "name": "CHENNAI EGMORE - DIBRUGARH Weekly Exp",
    "sourceCode": "MS",
    "source": "Chennai Egmore",
    "destCode": "DBRG",
    "dest": "Dibrugarh"
  },
  {
    "number": "15930",
    "name": "DIBRUGARH - CHENNAI EGMORE Weekly Exp",
    "sourceCode": "DBRG",
    "source": "Dibrugarh",
    "destCode": "MS",
    "dest": "Chennai Egmore"
  },
  {
    "number": "15933",
    "name": "Dibrugarh-Amritsar Weekly Express",
    "sourceCode": "DBRG",
    "source": "Dibrugarh",
    "destCode": "ASR",
    "dest": "Amritsar Jn"
  },
  {
    "number": "15941",
    "name": "JHAJHA - DIBRUGARH Exp",
    "sourceCode": "JAJ",
    "source": "Jhajha",
    "destCode": "DBRG",
    "dest": "Dibrugarh"
  },
  {
    "number": "15942",
    "name": "DIBRUGARH - JHAJHA Exp",
    "sourceCode": "DBRG",
    "source": "Dibrugarh",
    "destCode": "JAJ",
    "dest": "Jhajha"
  },
  {
    "number": "15959",
    "name": "HOWRAH - DIBRUGARH Kamrup Exp",
    "sourceCode": "HWH",
    "source": "Howrah Jn",
    "destCode": "DBRG",
    "dest": "Dibrugarh"
  },
  {
    "number": "15960",
    "name": "DIBRUGARH - HOWRAH Kamrup Exp",
    "sourceCode": "DBRG",
    "source": "Dibrugarh",
    "destCode": "HWH",
    "dest": "Howrah Jn"
  },
  {
    "number": "16031",
    "name": "Andaman Express",
    "sourceCode": "MAS",
    "source": "Chennai Central",
    "destCode": "JAT",
    "dest": "Jammu Tawi"
  },
  {
    "number": "16032",
    "name": "Andaman Express",
    "sourceCode": "JAT",
    "source": "Jammu Tawi",
    "destCode": "MAS",
    "dest": "Chennai Central"
  },
  {
    "number": "16041",
    "name": "Chennai- Alapuzha Alleppey Express",
    "sourceCode": "MAS",
    "source": "Chennai Central",
    "destCode": "ALLP",
    "dest": "Alleppey"
  },
  {
    "number": "16042",
    "name": "Alappuzha-Chennai Express",
    "sourceCode": "ALLP",
    "source": "Alleppey",
    "destCode": "MAS",
    "dest": "Chennai Central"
  },
  {
    "number": "16053",
    "name": "Tirupati Express",
    "sourceCode": "MAS",
    "source": "Chennai Central",
    "destCode": "TPTY",
    "dest": "Tirupati Main"
  },
  {
    "number": "16054",
    "name": "Chennai Express",
    "sourceCode": "TPTY",
    "source": "Tirupati Main",
    "destCode": "MAS",
    "dest": "Chennai Central"
  },
  {
    "number": "16057",
    "name": "Saptagiri Express",
    "sourceCode": "MAS",
    "source": "Chennai Central",
    "destCode": "TPTY",
    "dest": "Tirupati Main"
  },
  {
    "number": "16058",
    "name": "Saptagiri Express",
    "sourceCode": "TPTY",
    "source": "Tirupati Main",
    "destCode": "MAS",
    "dest": "Chennai Central"
  },
  {
    "number": "16085",
    "name": "Arakkonam-Jolarpettai Express",
    "sourceCode": "AJJ",
    "source": "Arakkonam",
    "destCode": "JTJ",
    "dest": "Jolarpettai"
  },
  {
    "number": "16086",
    "name": "Arakkonam Express",
    "sourceCode": "JTJ",
    "source": "Jolarpettai",
    "destCode": "AJJ",
    "dest": "Arakkonam"
  },
  {
    "number": "16089",
    "name": "Yelagiri Express",
    "sourceCode": "MAS",
    "source": "Chennai Central",
    "destCode": "TPT",
    "dest": "Tirupattur Jn"
  },
  {
    "number": "16090",
    "name": "Yelagiri Express",
    "sourceCode": "TPT",
    "source": "Tirupattur Jn",
    "destCode": "MAS",
    "dest": "Chennai Central"
  },
  {
    "number": "16093",
    "name": "Chennai Lucknow Express",
    "sourceCode": "MAS",
    "source": "Chennai Central",
    "destCode": "LKO",
    "dest": "Lucknow"
  },
  {
    "number": "16094",
    "name": "Lucknow Chennai Express",
    "sourceCode": "LJN",
    "source": "Lucknow Jn",
    "destCode": "MAS",
    "dest": "Chennai Central"
  },
  {
    "number": "16107",
    "name": "Chennai Egmore-Mangalore Express",
    "sourceCode": "MS",
    "source": "Chennai Egmore",
    "destCode": "MAQ",
    "dest": "Mangalore Cntl"
  },
  {
    "number": "16108",
    "name": "Mangalore Chennai Egmore Express",
    "sourceCode": "MAQ",
    "source": "Mangalore Cntl",
    "destCode": "MS",
    "dest": "Chennai Egmore"
  },
  {
    "number": "16115",
    "name": "Chennai Egmore Puducherry Express",
    "sourceCode": "MS",
    "source": "Chennai Egmore",
    "destCode": "PDY",
    "dest": "Puducherry"
  },
  {
    "number": "16116",
    "name": "Puducherry Chennai Express",
    "sourceCode": "PDY",
    "source": "Puducherry",
    "destCode": "MS",
    "dest": "Chennai Egmore"
  },
  {
    "number": "16125",
    "name": "CHENNAI EGMORE - JODHPUR Exp",
    "sourceCode": "MS",
    "source": "Chennai Egmore",
    "destCode": "JU",
    "dest": "Jodhpur Jn"
  },
  {
    "number": "16126",
    "name": "JODHPUR - CHENNAI EGMORE Exp",
    "sourceCode": "JU",
    "source": "Jodhpur Jn",
    "destCode": "MS",
    "dest": "Chennai Egmore"
  },
  {
    "number": "16127",
    "name": "CHENNAI EGMORE - GURUVAYUR Exp",
    "sourceCode": "MS",
    "source": "Chennai Egmore",
    "destCode": "GUV",
    "dest": "Guruvayur"
  },
  {
    "number": "16128",
    "name": "GURUVAYUR - CHENNAI EGMORE Exp",
    "sourceCode": "GUV",
    "source": "Guruvayur",
    "destCode": "MS",
    "dest": "Chennai Egmore"
  },
  {
    "number": "16175",
    "name": "Kamban Express",
    "sourceCode": "MS",
    "source": "Chennai Egmore",
    "destCode": "NCR",
    "dest": "Nagore"
  },
  {
    "number": "16176",
    "name": "Kamban Express",
    "sourceCode": "NCR",
    "source": "Nagore",
    "destCode": "MS",
    "dest": "Chennai Egmore"
  },
  {
    "number": "16177",
    "name": "Rock Fort Express",
    "sourceCode": "MS",
    "source": "Chennai Egmore",
    "destCode": "KMU",
    "dest": "Kumbakonam"
  },
  {
    "number": "16178",
    "name": "Rock Fort (Malai Kottai) Express",
    "sourceCode": "KMU",
    "source": "Kumbakonam",
    "destCode": "MS",
    "dest": "Chennai Egmore"
  },
  {
    "number": "16179",
    "name": "Mannai Express",
    "sourceCode": "MS",
    "source": "Chennai Egmore",
    "destCode": "MQ",
    "dest": "Mannargudi"
  },
  {
    "number": "16180",
    "name": "Mannai Express",
    "sourceCode": "MQ",
    "source": "Mannargudi",
    "destCode": "MS",
    "dest": "Chennai Egmore"
  },
  {
    "number": "16201",
    "name": "Bangalore City-Shimoga InterCity",
    "sourceCode": "SBC",
    "source": "Bangalore City Jn",
    "destCode": "SMET",
    "dest": "Shimoga Town"
  },
  {
    "number": "16202",
    "name": "Shimoga-Bangalore City InterCity",
    "sourceCode": "SMET",
    "source": "Shimoga Town",
    "destCode": "SBC",
    "dest": "Bangalore City Jn"
  },
  {
    "number": "16203",
    "name": "Garudadri Express",
    "sourceCode": "MAS",
    "source": "Chennai Central",
    "destCode": "TPTY",
    "dest": "Tirupati Main"
  },
  {
    "number": "16204",
    "name": "Garudadri Express",
    "sourceCode": "TPTY",
    "source": "Tirupati Main",
    "destCode": "MAS",
    "dest": "Chennai Central"
  },
  {
    "number": "16205",
    "name": "Talaguppa Mysore Intercity Express",
    "sourceCode": "TLGP",
    "source": "Talguppa",
    "destCode": "MYS",
    "dest": "Mysore Jn"
  },
  {
    "number": "16206",
    "name": "Mysore - Talguppa Intercity Express",
    "sourceCode": "MYS",
    "source": "Mysore Jn",
    "destCode": "TLGP",
    "dest": "Talguppa"
  },
  {
    "number": "16209",
    "name": "Ajmer-Mysore Express",
    "sourceCode": "AII",
    "source": "Ajmer Jn",
    "destCode": "MYS",
    "dest": "Mysore Jn"
  },
  {
    "number": "16210",
    "name": "Mysore-Ajmer Express",
    "sourceCode": "MYS",
    "source": "Mysore Jn",
    "destCode": "AII",
    "dest": "Ajmer Jn"
  },
  {
    "number": "16215",
    "name": "Chamundi Express",
    "sourceCode": "MYS",
    "source": "Mysore Jn",
    "destCode": "SBC",
    "dest": "Bangalore City Jn"
  },
  {
    "number": "16216",
    "name": "Chamundi Express",
    "sourceCode": "SBC",
    "source": "Bangalore City Jn",
    "destCode": "MYS",
    "dest": "Mysore Jn"
  },
  {
    "number": "16221",
    "name": "Kaveri Express",
    "sourceCode": "MYS",
    "source": "Mysore Jn",
    "destCode": "MAS",
    "dest": "Chennai Central"
  },
  {
    "number": "16222",
    "name": "Kaveri Express",
    "sourceCode": "MAS",
    "source": "Chennai Central",
    "destCode": "MYS",
    "dest": "Mysore Jn"
  },
  {
    "number": "16227",
    "name": "Bangalore-Shimoga Express",
    "sourceCode": "SBC",
    "source": "Bangalore City Jn",
    "destCode": "SMET",
    "dest": "Shimoga Town"
  },
  {
    "number": "16228",
    "name": "Shimoga-Bangalore Express",
    "sourceCode": "SMET",
    "source": "Shimoga Town",
    "destCode": "SBC",
    "dest": "Bangalore City Jn"
  },
  {
    "number": "16231",
    "name": "Mayiladuturai Mysore Express",
    "sourceCode": "MV",
    "source": "Mayiladuturai Jn",
    "destCode": "MYS",
    "dest": "Mysore Jn"
  },
  {
    "number": "16232",
    "name": "Mysore Mayiladuturai Express",
    "sourceCode": "MYS",
    "source": "Mysore Jn",
    "destCode": "MV",
    "dest": "Mayiladuturai Jn"
  },
  {
    "number": "16233",
    "name": "Mayiladuturai Tiruchirappalli Express",
    "sourceCode": "MV",
    "source": "Mayiladuturai Jn",
    "destCode": "TPJ",
    "dest": "Tiruchirappalli"
  },
  {
    "number": "16234",
    "name": "Tiruchchirapalli Mayiladuturai Express",
    "sourceCode": "TPJ",
    "source": "Tiruchirappalli",
    "destCode": "MV",
    "dest": "Mayiladuturai Jn"
  },
  {
    "number": "16301",
    "name": "Venad Express",
    "sourceCode": "SRR",
    "source": "Shoranur Jn",
    "destCode": "TVC",
    "dest": "Trivandrum Central"
  },
  {
    "number": "16302",
    "name": "Venad Express",
    "sourceCode": "TVC",
    "source": "Trivandrum Central",
    "destCode": "SRR",
    "dest": "Shoranur Jn"
  },
  {
    "number": "16303",
    "name": "Vanchinad Express",
    "sourceCode": "ERS",
    "source": "Ernakulam Jn",
    "destCode": "TVC",
    "dest": "Trivandrum Central"
  },
  {
    "number": "16304",
    "name": "Vanchinad Express",
    "sourceCode": "TVC",
    "source": "Trivandrum Central",
    "destCode": "ERS",
    "dest": "Ernakulam Jn"
  },
  {
    "number": "16305",
    "name": "Ernakulam Kannur InterCity Express",
    "sourceCode": "ERS",
    "source": "Ernakulam Jn",
    "destCode": "CAN",
    "dest": "Kannur"
  },
  {
    "number": "16306",
    "name": "Kannur Ernakulam InterCity Express",
    "sourceCode": "CAN",
    "source": "Kannur",
    "destCode": "ERS",
    "dest": "Ernakulam Jn"
  },
  {
    "number": "16307",
    "name": "Executive Express",
    "sourceCode": "ALLP",
    "source": "Alleppey",
    "destCode": "CAN",
    "dest": "Kannur"
  },
  {
    "number": "16308",
    "name": "Executive Express",
    "sourceCode": "CAN",
    "source": "Kannur",
    "destCode": "ALLP",
    "dest": "Alleppey"
  },
  {
    "number": "16309",
    "name": "Ernakulam-Patna Express",
    "sourceCode": "ERS",
    "source": "Ernakulam Jn",
    "destCode": "PNBE",
    "dest": "Patna Jn"
  },
  {
    "number": "16310",
    "name": "Patna - Ernakulam Express",
    "sourceCode": "PNBE",
    "source": "Patna Jn",
    "destCode": "ERS",
    "dest": "Ernakulam Jn"
  },
  {
    "number": "16311",
    "name": "BIKANER - KOCHUVELI Express",
    "sourceCode": "BKN",
    "source": "Bikaner Jn",
    "destCode": "KCVL",
    "dest": "Kochuveli"
  },
  {
    "number": "16312",
    "name": "KOCHUVELI - BIKANER Express",
    "sourceCode": "KCVL",
    "source": "Kochuveli",
    "destCode": "BKN",
    "dest": "Bikaner Jn"
  },
  {
    "number": "16313",
    "name": "Executive Express",
    "sourceCode": "ERS",
    "source": "Ernakulam Jn",
    "destCode": "CAN",
    "dest": "Kannur"
  },
  {
    "number": "16314",
    "name": "Executive Express",
    "sourceCode": "CAN",
    "source": "Kannur",
    "destCode": "ERS",
    "dest": "Ernakulam Jn"
  },
  {
    "number": "16315",
    "name": "BANGALORE - KOCHUVELI Exp",
    "sourceCode": "SBC",
    "source": "Bangalore City Jn",
    "destCode": "KCVL",
    "dest": "Kochuveli"
  },
  {
    "number": "16316",
    "name": "KOCHUVELI - BANGALORE Exp",
    "sourceCode": "KCVL",
    "source": "Kochuveli",
    "destCode": "SBC",
    "dest": "Bangalore City Jn"
  },
  {
    "number": "16317",
    "name": "Himsagar Express",
    "sourceCode": "CAPE",
    "source": "Kanyakumari",
    "destCode": "JAT",
    "dest": "Jammu Tawi"
  },
  {
    "number": "16318",
    "name": "Himsagar Express",
    "sourceCode": "JAT",
    "source": "Jammu Tawi",
    "destCode": "CAPE",
    "dest": "Kanyakumari"
  },
  {
    "number": "16321",
    "name": "Bangalore Tiruvananthapuram Weekly Express",
    "sourceCode": "SBC",
    "source": "Bangalore City Jn",
    "destCode": "TVC",
    "dest": "Trivandrum Central"
  },
  {
    "number": "16322",
    "name": "Tiruvananthapuram Bangalore Weekly Express",
    "sourceCode": "TVC",
    "source": "Trivandrum Central",
    "destCode": "SBC",
    "dest": "Bangalore City Jn"
  },
  {
    "number": "16323",
    "name": "Trivandrum Shalimar Biweekly Express",
    "sourceCode": "TVC",
    "source": "Trivandrum Central",
    "destCode": "SHM",
    "dest": "Kolkata Shalimar"
  },
  {
    "number": "16324",
    "name": "Shalimar Tiruvananthapuram Express",
    "sourceCode": "SHM",
    "source": "Kolkata Shalimar",
    "destCode": "TVC",
    "dest": "Trivandrum Central"
  },
  {
    "number": "16325",
    "name": "Ahilyanagari Express",
    "sourceCode": "INDB",
    "source": "Indore Jn Bg",
    "destCode": "TVC",
    "dest": "Trivandrum Central"
  },
  {
    "number": "16326",
    "name": "Ahilyanagari Express",
    "sourceCode": "TVC",
    "source": "Trivandrum Central",
    "destCode": "INDB",
    "dest": "Indore Jn Bg"
  },
  {
    "number": "16327",
    "name": "Korba Tiruvananthapuram Express",
    "sourceCode": "KRBA",
    "source": "Korba",
    "destCode": "TVC",
    "dest": "Trivandrum Central"
  },
  {
    "number": "16328",
    "name": "Trivandrum-Korba Express",
    "sourceCode": "TVC",
    "source": "Trivandrum Central",
    "destCode": "KRBA",
    "dest": "Korba"
  },
  {
    "number": "16331",
    "name": "MUMBAI CST - TRIVANDRUM Exp",
    "sourceCode": "CSTM",
    "source": "Mumbai Cst",
    "destCode": "TVC",
    "dest": "Trivandrum Central"
  },
  {
    "number": "16332",
    "name": "TRIVANDRUM - MUMBAI CST Exp",
    "sourceCode": "TVC",
    "source": "Trivandrum Central",
    "destCode": "CSTM",
    "dest": "Mumbai Cst"
  },
  {
    "number": "16333",
    "name": "VERAVAL - TRIVANDRUM Exp",
    "sourceCode": "VRL",
    "source": "Veraval",
    "destCode": "TVC",
    "dest": "Trivandrum Central"
  },
  {
    "number": "16334",
    "name": "TRIVANDRUM - VERAVAL Exp",
    "sourceCode": "TVC",
    "source": "Trivandrum Central",
    "destCode": "VRL",
    "dest": "Veraval"
  },
  {
    "number": "16335",
    "name": "GANDHIDHAM - NAGERCOIL Weekly Exp",
    "sourceCode": "GIMB",
    "source": "Gandhidham Bg",
    "destCode": "NCJ",
    "dest": "Nagercoil Jn"
  },
  {
    "number": "16336",
    "name": "NAGERCOIL - GANDHIDHAM Weekly Exp",
    "sourceCode": "NCJ",
    "source": "Nagercoil Jn",
    "destCode": "GIMB",
    "dest": "Gandhidham Bg"
  },
  {
    "number": "16337",
    "name": "OKHA - ERNAKULAM Exp",
    "sourceCode": "OKHA",
    "source": "Okha",
    "destCode": "ERS",
    "dest": "Ernakulam Jn"
  },
  {
    "number": "16338",
    "name": "ERNAKULAM - OKHA Exp",
    "sourceCode": "ERS",
    "source": "Ernakulam Jn",
    "destCode": "OKHA",
    "dest": "Okha"
  },
  {
    "number": "16339",
    "name": "MUMBAI CST - NAGERCOIL Exp",
    "sourceCode": "CSTM",
    "source": "Mumbai Cst",
    "destCode": "NCJ",
    "dest": "Nagercoil Jn"
  },
  {
    "number": "16340",
    "name": "NAGERCOIL - MUMBAI CST Exp",
    "sourceCode": "NCJ",
    "source": "Nagercoil Jn",
    "destCode": "CSTM",
    "dest": "Mumbai Cst"
  },
  {
    "number": "16341",
    "name": "Guruvayur-Ernakulam-Trivandrum Intercity Express",
    "sourceCode": "GUV",
    "source": "Guruvayur",
    "destCode": "TVC",
    "dest": "Trivandrum Central"
  },
  {
    "number": "16342",
    "name": "Trivandrum-Ernakulam-Guruvayur Intercity Express",
    "sourceCode": "TVC",
    "source": "Trivandrum Central",
    "destCode": "GUV",
    "dest": "Guruvayur"
  },
  {
    "number": "16343",
    "name": "Amrita Express",
    "sourceCode": "TVC",
    "source": "Trivandrum Central",
    "destCode": "PGTN",
    "dest": "Palghat Town"
  },
  {
    "number": "16344",
    "name": "Amrita Express",
    "sourceCode": "PGTN",
    "source": "Palghat Town",
    "destCode": "TVC",
    "dest": "Trivandrum Central"
  },
  {
    "number": "16345",
    "name": "MUMBAI LTT - TRIVANDRUM Netravati Exp",
    "sourceCode": "LTT",
    "source": "Lokmanya Tilak Term",
    "destCode": "TVC",
    "dest": "Trivandrum Central"
  },
  {
    "number": "16346",
    "name": "TRIVANDRUM - MUMBAI LTT Netravati Exp",
    "sourceCode": "TVC",
    "source": "Trivandrum Central",
    "destCode": "LTT",
    "dest": "Lokmanya Tilak Term"
  },
  {
    "number": "16347",
    "name": "Trivandrum Mangalore Express",
    "sourceCode": "TVC",
    "source": "Trivandrum Central",
    "destCode": "MAQ",
    "dest": "Mangalore Cntl"
  },
  {
    "number": "16348",
    "name": "Trivandrum Express",
    "sourceCode": "MAQ",
    "source": "Mangalore Cntl",
    "destCode": "TVC",
    "dest": "Trivandrum Central"
  },
  {
    "number": "16349",
    "name": "Trivandrum Nilambur Road Rajya Rani Express",
    "sourceCode": "TVC",
    "source": "Trivandrum Central",
    "destCode": "NIL",
    "dest": "Nilambur Road"
  },
  {
    "number": "16350",
    "name": "Nilambur Road Trivandrum Rajya Rani Express",
    "sourceCode": "NIL",
    "source": "Nilambur Road",
    "destCode": "TVC",
    "dest": "Trivandrum Central"
  },
  {
    "number": "16351",
    "name": "MUMBAI CST - NAGERCOIL Balaji Exp",
    "sourceCode": "CSTM",
    "source": "Mumbai Cst",
    "destCode": "NCJ",
    "dest": "Nagercoil Jn"
  },
  {
    "number": "16352",
    "name": "NAGERCOIL - MUMBAI CST Balaji Exp",
    "sourceCode": "NCJ",
    "source": "Nagercoil Jn",
    "destCode": "CSTM",
    "dest": "Mumbai Cst"
  },
  {
    "number": "16359",
    "name": "ERNAKULAM - PATNA Exp",
    "sourceCode": "ERS",
    "source": "Ernakulam Jn",
    "destCode": "PNBE",
    "dest": "Patna Jn"
  },
  {
    "number": "16360",
    "name": "PATNA - ERNAKULAM Express",
    "sourceCode": "PNBE",
    "source": "Patna Jn",
    "destCode": "ERS",
    "dest": "Ernakulam Jn"
  },
  {
    "number": "16381",
    "name": "Mumbai CST - Kanyakumari Express",
    "sourceCode": "CSTM",
    "source": "Mumbai Cst",
    "destCode": "CAPE",
    "dest": "Kanyakumari"
  },
  {
    "number": "16382",
    "name": "Kanniyakumari-Mumbai CST Express",
    "sourceCode": "CAPE",
    "source": "Kanyakumari",
    "destCode": "CSTM",
    "dest": "Mumbai Cst"
  },
  {
    "number": "16501",
    "name": "Ahmedabad Bangalore Express",
    "sourceCode": "ADI",
    "source": "Ahmedabad Jn",
    "destCode": "SBC",
    "dest": "Bangalore City Jn"
  },
  {
    "number": "16502",
    "name": "Bangalore - Ahmedabad (Weekly) Express",
    "sourceCode": "SBC",
    "source": "Bangalore City Jn",
    "destCode": "ADI",
    "dest": "Ahmedabad Jn"
  },
  {
    "number": "16505",
    "name": "GANDHIDHAM - BANGALORE Exp",
    "sourceCode": "GIMB",
    "source": "Gandhidham Bg",
    "destCode": "SBC",
    "dest": "Bangalore City Jn"
  },
  {
    "number": "16506",
    "name": "BANGALORE - GANDHIDHAM Exp",
    "sourceCode": "SBC",
    "source": "Bangalore City Jn",
    "destCode": "GIMB",
    "dest": "Gandhidham Bg"
  },
  {
    "number": "16508",
    "name": "BANGALORE - BHAGAT KI KOTHI Exp",
    "sourceCode": "SBC",
    "source": "Bangalore City Jn",
    "destCode": "JU",
    "dest": "Jodhpur Jn"
  },
  {
    "number": "16515",
    "name": "Yesvantpur - Karwar Express",
    "sourceCode": "YPR",
    "source": "Yesvantpur Jn",
    "destCode": "KAWR",
    "dest": "Karwar"
  },
  {
    "number": "16516",
    "name": "Karwar-Yeshvantpur Express",
    "sourceCode": "KAWR",
    "source": "Karwar",
    "destCode": "YPR",
    "dest": "Yesvantpur Jn"
  },
  {
    "number": "16517",
    "name": "Yeshvantapur-Kannur Express",
    "sourceCode": "YPR",
    "source": "Yesvantpur Jn",
    "destCode": "CAN",
    "dest": "Kannur"
  },
  {
    "number": "16518",
    "name": "Kannur-Yesvantpur Express",
    "sourceCode": "CAN",
    "source": "Kannur",
    "destCode": "YPR",
    "dest": "Yesvantpur Jn"
  },
  {
    "number": "16519",
    "name": "JOLARPETTAI - BANGALORE Exp",
    "sourceCode": "JTJ",
    "source": "Jolarpettai",
    "destCode": "SBC",
    "dest": "Bangalore City Jn"
  },
  {
    "number": "16520",
    "name": "BANGALORE - JOLARPETTAI Exp",
    "sourceCode": "SBC",
    "source": "Bangalore City Jn",
    "destCode": "JTJ",
    "dest": "Jolarpettai"
  },
  {
    "number": "16521",
    "name": "Bangarpet-Bangalore Express",
    "sourceCode": "BWT",
    "source": "Bangarapet",
    "destCode": "SBC",
    "dest": "Bangalore City Jn"
  },
  {
    "number": "16522",
    "name": "Bangalore Bangarpet Express",
    "sourceCode": "SBC",
    "source": "Bangalore City Jn",
    "destCode": "BWT",
    "dest": "Bangarapet"
  },
  {
    "number": "16525",
    "name": "Bangalore Kanyakumari Express",
    "sourceCode": "SBC",
    "source": "Bangalore City",
    "destCode": "CAPE",
    "dest": "Kanyakumari"
  },
  {
    "number": "16526",
    "name": "Kanyakumari Bangalore Express",
    "sourceCode": "CAPE",
    "source": "Kanyakumari",
    "destCode": "SBC",
    "dest": "Bangalore City"
  },
  {
    "number": "16527",
    "name": "Yesvantpur Kannur Express",
    "sourceCode": "YPR",
    "source": "Yesvantpur",
    "destCode": "CAN",
    "dest": "Kannur"
  },
  {
    "number": "16528",
    "name": "Kannur Yesvantpur Express",
    "sourceCode": "CAN",
    "source": "Kannur",
    "destCode": "YPR",
    "dest": "Yesvantpur"
  },
  {
    "number": "16529",
    "name": "Udyan Express",
    "sourceCode": "CSTM",
    "source": "Mumbai Cst",
    "destCode": "SBC",
    "dest": "Bangalore City Jn"
  },
  {
    "number": "16530",
    "name": "Udyan Express",
    "sourceCode": "SBC",
    "source": "Bangalore City Jn",
    "destCode": "CSTM",
    "dest": "Mumbai Cst"
  },
  {
    "number": "16531",
    "name": "Garib Nawaz Express",
    "sourceCode": "AII",
    "source": "Ajmer Jn",
    "destCode": "YPR",
    "dest": "Yesvantpur Jn"
  },
  {
    "number": "16532",
    "name": "Garib Nawaz Express",
    "sourceCode": "YPR",
    "source": "Yesvantpur Jn",
    "destCode": "AII",
    "dest": "Ajmer Jn"
  },
  {
    "number": "16534",
    "name": "BANGALORE CITY - JODHPUR Exp",
    "sourceCode": "YPR",
    "source": "Yesvantpur Jn",
    "destCode": "JU",
    "dest": "Jodhpur Jn"
  },
  {
    "number": "16535",
    "name": "Gol Gumbaz Express",
    "sourceCode": "YPR",
    "source": "Yesvantpur Jn",
    "destCode": "SUR",
    "dest": "Solapur Jn"
  },
  {
    "number": "16536",
    "name": "Gol Gumbaz Express",
    "sourceCode": "SUR",
    "source": "Solapur Jn",
    "destCode": "YPR",
    "dest": "Yesvantpur Jn"
  },
  {
    "number": "16537",
    "name": "Bangalore-Nagercoil Weekly Express",
    "sourceCode": "SBC",
    "source": "Bangalore City Jn",
    "destCode": "NCJ",
    "dest": "Nagercoil Jn"
  },
  {
    "number": "16538",
    "name": "Nagercoil-Bangalore Express",
    "sourceCode": "NCJ",
    "source": "Nagercoil Jn",
    "destCode": "SBC",
    "dest": "Bangalore City Jn"
  },
  {
    "number": "16557",
    "name": "Rajya Rani Express",
    "sourceCode": "MYS",
    "source": "Mysore Jn",
    "destCode": "SBC",
    "dest": "Bangalore City Jn"
  },
  {
    "number": "16558",
    "name": "Bangalore Mysore Rajya Rani Express",
    "sourceCode": "SBC",
    "source": "Bangalore City Jn",
    "destCode": "MYS",
    "dest": "Mysore Jn"
  },
  {
    "number": "16559",
    "name": "Mysore-Yeshvantapur Express",
    "sourceCode": "MYS",
    "source": "Mysore Jn",
    "destCode": "YPR",
    "dest": "Yesvantpur Jn"
  },
  {
    "number": "16560",
    "name": "Yeshvantapur-Mysore Express",
    "sourceCode": "YPR",
    "source": "Yesvantpur Jn",
    "destCode": "MYS",
    "dest": "Mysore Jn"
  },
  {
    "number": "16583",
    "name": "Yesvantpur Mangalore Express",
    "sourceCode": "YPR",
    "source": "Yesvantpur",
    "destCode": "MAQ",
    "dest": "Mangalore Central"
  },
  {
    "number": "16584",
    "name": "Mangalore Yesvantpur Express",
    "sourceCode": "MAQ",
    "source": "Mangalore Central",
    "destCode": "YPR",
    "dest": "Yesvantpur"
  },
  {
    "number": "16587",
    "name": "Yesvantpur Bangalore Express",
    "sourceCode": "YPR",
    "source": "Yesvantpur",
    "destCode": "SBC",
    "dest": "Bangalore City"
  },
  {
    "number": "16589",
    "name": "Rani Chennamma Express",
    "sourceCode": "SBC",
    "source": "Bangalore City Jn",
    "destCode": "KOP",
    "dest": "C Shahu M Raj Kolhapur Term"
  },
  {
    "number": "16590",
    "name": "Rani Chennamma Express",
    "sourceCode": "KOP",
    "source": "C Shahu M Raj Kolhapur Term",
    "destCode": "SBC",
    "dest": "Bangalore City Jn"
  },
  {
    "number": "16591",
    "name": "Hampi Express",
    "sourceCode": "UBL",
    "source": "Hubli Jn",
    "destCode": "SBC",
    "dest": "Bangalore City Jn"
  },
  {
    "number": "16592",
    "name": "Hampi Express",
    "sourceCode": "SBC",
    "source": "Bangalore City Jn",
    "destCode": "UBL",
    "dest": "Hubli Jn"
  },
  {
    "number": "16593",
    "name": "Nanded-Bangalore Express",
    "sourceCode": "NED",
    "source": "Huzur Sahib Nanded",
    "destCode": "SBC",
    "dest": "Bangalore City Jn"
  },
  {
    "number": "16594",
    "name": "Bangalore-Nanded Express",
    "sourceCode": "SBC",
    "source": "Bangalore City Jn",
    "destCode": "NED",
    "dest": "Huzur Sahib Nanded"
  },
  {
    "number": "16603",
    "name": "Maveli Express",
    "sourceCode": "MAQ",
    "source": "Mangalore Cntl",
    "destCode": "TVC",
    "dest": "Trivandrum Central"
  },
  {
    "number": "16604",
    "name": "Maveli Express",
    "sourceCode": "TVC",
    "source": "Trivandrum Central",
    "destCode": "MAQ",
    "dest": "Mangalore Cntl"
  },
  {
    "number": "16605",
    "name": "Eranad Express",
    "sourceCode": "MAQ",
    "source": "Mangalore Cntl",
    "destCode": "NCJ",
    "dest": "Nagercoil Jn"
  },
  {
    "number": "16606",
    "name": "Eranad Express",
    "sourceCode": "NCJ",
    "source": "Nagercoil Jn",
    "destCode": "MAQ",
    "dest": "Mangalore Cntl"
  },
  {
    "number": "16609",
    "name": "Nagercoil-Coimbatore Express",
    "sourceCode": "NCJ",
    "source": "Nagercoil Jn",
    "destCode": "CBE",
    "dest": "Coimbatore Jn"
  },
  {
    "number": "16610",
    "name": "Coimbatore-Nagercoil Express",
    "sourceCode": "CBE",
    "source": "Coimbatore Jn",
    "destCode": "NCJ",
    "dest": "Nagercoil Jn"
  },
  {
    "number": "16611",
    "name": "Tuticorin Coimbatore Link Express",
    "sourceCode": "TN",
    "source": "Tuticorin",
    "destCode": "CBE",
    "dest": "Coimbatore Jn"
  },
  {
    "number": "16612",
    "name": "Coimbatore Tuticorin Link Express",
    "sourceCode": "CBE",
    "source": "Coimbatore Jn",
    "destCode": "TN",
    "dest": "Tuticorin"
  },
  {
    "number": "16613",
    "name": "RAJKOT - COIMBATORE Exp",
    "sourceCode": "RJT",
    "source": "Rajkot Jn",
    "destCode": "CBE",
    "dest": "Coimbatore Jn"
  },
  {
    "number": "16614",
    "name": "COIMBATORE - RAJKOT Exp",
    "sourceCode": "CBE",
    "source": "Coimbatore Jn",
    "destCode": "RJT",
    "dest": "Rajkot Jn"
  },
  {
    "number": "16627",
    "name": "West Coast Express",
    "sourceCode": "MAS",
    "source": "Chennai Central",
    "destCode": "MAQ",
    "dest": "Mangalore Cntl"
  },
  {
    "number": "16628",
    "name": "West Coast Express",
    "sourceCode": "MAQ",
    "source": "Mangalore Cntl",
    "destCode": "MAS",
    "dest": "Chennai Central"
  },
  {
    "number": "16629",
    "name": "Malabar Express",
    "sourceCode": "TVC",
    "source": "Trivandrum Central",
    "destCode": "MAQ",
    "dest": "Mangalore Cntl"
  },
  {
    "number": "16630",
    "name": "Malabar Express",
    "sourceCode": "MAQ",
    "source": "Mangalore Cntl",
    "destCode": "TVC",
    "dest": "Trivandrum Central"
  },
  {
    "number": "16649",
    "name": "Parasuram Express",
    "sourceCode": "MAQ",
    "source": "Mangalore Cntl",
    "destCode": "TVC",
    "dest": "Trivandrum Central"
  },
  {
    "number": "16650",
    "name": "Parasuram Express",
    "sourceCode": "TVC",
    "source": "Trivandrum Central",
    "destCode": "MAQ",
    "dest": "Mangalore Cntl"
  },
  {
    "number": "16669",
    "name": "Yercaud Express",
    "sourceCode": "MAS",
    "source": "Chennai Central",
    "destCode": "ED",
    "dest": "Erode Jn"
  },
  {
    "number": "16670",
    "name": "Yercaud Express",
    "sourceCode": "ED",
    "source": "Erode Jn",
    "destCode": "MAS",
    "dest": "Chennai Central"
  },
  {
    "number": "16687",
    "name": "Navyug Express",
    "sourceCode": "MAQ",
    "source": "Mangalore Cntl",
    "destCode": "JAT",
    "dest": "Jammu Tawi"
  },
  {
    "number": "16688",
    "name": "Navyug Express",
    "sourceCode": "JAT",
    "source": "Jammu Tawi",
    "destCode": "MAQ",
    "dest": "Mangalore Cntl"
  },
  {
    "number": "16701",
    "name": "Chennai Egmore-Rameshwaram Express",
    "sourceCode": "MS",
    "source": "Chennai Egmore",
    "destCode": "RMM",
    "dest": "Rameswaram"
  },
  {
    "number": "16702",
    "name": "Rameswaram-Chennai Egmore Express",
    "sourceCode": "RMM",
    "source": "Rameswaram",
    "destCode": "MS",
    "dest": "Chennai Egmore"
  },
  {
    "number": "16713",
    "name": "Setu Express",
    "sourceCode": "MS",
    "source": "Chennai Egmore",
    "destCode": "RMM",
    "dest": "Rameswaram"
  },
  {
    "number": "16714",
    "name": "Setu Express",
    "sourceCode": "RMM",
    "source": "Rameswaram",
    "destCode": "MS",
    "dest": "Chennai Egmore"
  },
  {
    "number": "16723",
    "name": "CHENNAI EGMORE - TRIVANDRUM Anantapuri Exp",
    "sourceCode": "MS",
    "source": "Chennai Egmore",
    "destCode": "TVC",
    "dest": "Trivandrum Central"
  },
  {
    "number": "16724",
    "name": "TRIVANDRUM - CHENNAI EGMORE Anantapuri Exp",
    "sourceCode": "TVC",
    "source": "Trivandrum Central",
    "destCode": "MS",
    "dest": "Chennai Egmore"
  },
  {
    "number": "16731",
    "name": "Tuticorin Mysore Express",
    "sourceCode": "TN",
    "source": "Tuticorin",
    "destCode": "MYS",
    "dest": "Mysore Jn"
  },
  {
    "number": "16732",
    "name": "Mysore-Tuticorin Express",
    "sourceCode": "MYS",
    "source": "Mysore Jn",
    "destCode": "TN",
    "dest": "Tuticorin"
  },
  {
    "number": "16733",
    "name": "Rameswaram-Okha Express",
    "sourceCode": "RMM",
    "source": "Rameswaram",
    "destCode": "OKHA",
    "dest": "Okha"
  },
  {
    "number": "16734",
    "name": "Okha-Rameswaram Express",
    "sourceCode": "OKHA",
    "source": "Okha",
    "destCode": "RMM",
    "dest": "Rameswaram"
  },
  {
    "number": "16735",
    "name": "Chendhur Express",
    "sourceCode": "MS",
    "source": "Chennai Egmore",
    "destCode": "TCN",
    "dest": "Tiruchendur"
  },
  {
    "number": "16736",
    "name": "Chendhur Express",
    "sourceCode": "TCN",
    "source": "Tiruchendur",
    "destCode": "MS",
    "dest": "Chennai Egmore"
  },
  {
    "number": "16779",
    "name": "TIRUPATI - RAMESWARAM Exp",
    "sourceCode": "TPTY",
    "source": "Tirupati Main",
    "destCode": "MDU",
    "dest": "Madurai Jn"
  },
  {
    "number": "16780",
    "name": "RAMESWARAM - TIRUPATI Exp",
    "sourceCode": "MDU",
    "source": "Madurai Jn",
    "destCode": "TPTY",
    "dest": "Tirupati Main"
  },
  {
    "number": "16787",
    "name": "TIRUNELVELI - KATRA Exp",
    "sourceCode": "TEN",
    "source": "Tirunelveli",
    "destCode": "JAT",
    "dest": "Jammu Tawi"
  },
  {
    "number": "16788",
    "name": "JAMMU ERODE - TIRUNELVELI Link Exp",
    "sourceCode": "ED",
    "source": "Erode Jn",
    "destCode": "TEN",
    "dest": "Tirunelveli"
  },
  {
    "number": "16853",
    "name": "Cholan Express (Day Express)",
    "sourceCode": "MS",
    "source": "Chennai Egmore",
    "destCode": "TPJ",
    "dest": "Tiruchirappalli"
  },
  {
    "number": "16854",
    "name": "Cholan Express( Day Express)",
    "sourceCode": "TPJ",
    "source": "Tiruchirappalli",
    "destCode": "MS",
    "dest": "Chennai Egmore"
  },
  {
    "number": "16861",
    "name": "Tiruturaipudi Karaikkudi Express",
    "sourceCode": "TTP",
    "source": "Tiruturaipudi Junction",
    "destCode": "KKDI",
    "dest": "Karaikkudi Junction"
  },
  {
    "number": "16862",
    "name": "Karaikkudi Tiruturaipudi Express",
    "sourceCode": "KKDI",
    "source": "Karaikkudi Junction",
    "destCode": "TTP",
    "dest": "Tiruturaipudi Junction"
  },
  {
    "number": "16865",
    "name": "Tea Garden Express",
    "sourceCode": "NCR",
    "source": "Nagore",
    "destCode": "ERS",
    "dest": "Ernakulam Jn"
  },
  {
    "number": "16866",
    "name": "Tea Garden Express",
    "sourceCode": "ERS",
    "source": "Ernakulam Jn",
    "destCode": "NCR",
    "dest": "Nagore"
  },
  {
    "number": "17001",
    "name": "Sainagar Shirdi Secunderabad Express",
    "sourceCode": "SNSI",
    "source": "Sainagar Shirdi",
    "destCode": "SC",
    "dest": "Secunderabad Jn"
  },
  {
    "number": "17002",
    "name": "Secunderabad Sainagar Shirdi Express",
    "sourceCode": "SC",
    "source": "Secunderabad Jn",
    "destCode": "SNSI",
    "dest": "Sainagar Shirdi"
  },
  {
    "number": "17003",
    "name": "Hyderabad-Kolhapur BiWeekly Express",
    "sourceCode": "HYB",
    "source": "Hyderabad Deccan",
    "destCode": "KOP",
    "dest": "C Shahu M Raj Kolhapur Term"
  },
  {
    "number": "17004",
    "name": "Kolhapur-Hyderabad BiWeekly Express",
    "sourceCode": "KOP",
    "source": "C Shahu M Raj Kolhapur Term",
    "destCode": "HYB",
    "dest": "Hyderabad Deccan"
  },
  {
    "number": "17005",
    "name": "HYDERABAD DECCAN - RAXAUL  Exp",
    "sourceCode": "HYB",
    "source": "Hyderabad Deccan",
    "destCode": "DBG",
    "dest": "Darbhanga Jn"
  },
  {
    "number": "17006",
    "name": "RAXAUL - HYDERABAD Deccan Exp",
    "sourceCode": "DBG",
    "source": "Darbhanga Jn",
    "destCode": "HYB",
    "dest": "Hyderabad Deccan"
  },
  {
    "number": "17013",
    "name": "Pune-Hyderabad Express",
    "sourceCode": "PUNE",
    "source": "Pune Jn",
    "destCode": "HYB",
    "dest": "Hyderabad Deccan"
  },
  {
    "number": "17014",
    "name": "Hyderabad-Pune Express",
    "sourceCode": "HYB",
    "source": "Hyderabad Deccan",
    "destCode": "PUNE",
    "dest": "Pune Jn"
  },
  {
    "number": "17015",
    "name": "Visakha Express",
    "sourceCode": "BBS",
    "source": "Bhubaneswar",
    "destCode": "SC",
    "dest": "Secunderabad Jn"
  },
  {
    "number": "17016",
    "name": "Visakha Express",
    "sourceCode": "SC",
    "source": "Secunderabad Jn",
    "destCode": "BBS",
    "dest": "Bhubaneswar"
  },
  {
    "number": "17017",
    "name": "Rajkot Secunderabad Express",
    "sourceCode": "RJT",
    "source": "Rajkot Jn",
    "destCode": "SC",
    "dest": "Secunderabad Jn"
  },
  {
    "number": "17018",
    "name": "Secunderabad - Rajkot Express",
    "sourceCode": "SC",
    "source": "Secunderabad Jn",
    "destCode": "RJT",
    "dest": "Rajkot Jn"
  },
  {
    "number": "17031",
    "name": "Mumbai CST-Hyderabad Express",
    "sourceCode": "CSTM",
    "source": "Mumbai Cst",
    "destCode": "HYB",
    "dest": "Hyderabad Deccan"
  },
  {
    "number": "17032",
    "name": "Hyderabad-Mumbai Express",
    "sourceCode": "HYB",
    "source": "Hyderabad Deccan",
    "destCode": "CSTM",
    "dest": "Mumbai Cst"
  },
  {
    "number": "17035",
    "name": "Telangana Express",
    "sourceCode": "SC",
    "source": "Secunderabad Jn",
    "destCode": "SKZR",
    "dest": "Sirpur Kagaznagar"
  },
  {
    "number": "17036",
    "name": "Telangana Express",
    "sourceCode": "SKZR",
    "source": "Sirpur Kagaznagar",
    "destCode": "SC",
    "dest": "Secunderabad Jn"
  },
  {
    "number": "17037",
    "name": "SECUNDERABAD - BIKANER Express",
    "sourceCode": "SC",
    "source": "Secunderabad Jn",
    "destCode": "BKN",
    "dest": "Bikaner Jn"
  },
  {
    "number": "17038",
    "name": "BIKANER - SECUNDERABAD Express",
    "sourceCode": "BKN",
    "source": "Bikaner Jn",
    "destCode": "SC",
    "dest": "Secunderabad Jn"
  },
  {
    "number": "17049",
    "name": "Machilipatnam Secunderabad Express",
    "sourceCode": "MTM",
    "source": "Machilipatnam",
    "destCode": "SC",
    "dest": "Secunderabad Jn"
  },
  {
    "number": "17050",
    "name": "Secunderabad Machilipatnam Express",
    "sourceCode": "SC",
    "source": "Secunderabad Jn",
    "destCode": "MTM",
    "dest": "Machilipatnam"
  },
  {
    "number": "17057",
    "name": "Mumbai-Secunderabad Devagiri Expres",
    "sourceCode": "CSTM",
    "source": "Mumbai Cst",
    "destCode": "SC",
    "dest": "Secunderabad Jn"
  },
  {
    "number": "17058",
    "name": "Devagiri Express",
    "sourceCode": "SC",
    "source": "Secunderabad Jn",
    "destCode": "CSTM",
    "dest": "Mumbai Cst"
  },
  {
    "number": "17063",
    "name": "Ajanta Express",
    "sourceCode": "MMR",
    "source": "Manmad Jn",
    "destCode": "SC",
    "dest": "Secunderabad Jn"
  },
  {
    "number": "17064",
    "name": "Ajanta Express",
    "sourceCode": "SC",
    "source": "Secunderabad Jn",
    "destCode": "MMR",
    "dest": "Manmad Jn"
  },
  {
    "number": "17201",
    "name": "Golconda Express",
    "sourceCode": "GNT",
    "source": "Guntur Jn",
    "destCode": "SC",
    "dest": "Secunderabad Jn"
  },
  {
    "number": "17202",
    "name": "Golconda Express",
    "sourceCode": "SC",
    "source": "Secunderabad Jn",
    "destCode": "GNT",
    "dest": "Guntur Jn"
  },
  {
    "number": "17203",
    "name": "Bhavnagar(T)-Kakinada Town Express",
    "sourceCode": "BVC",
    "source": "Bhavnagar Terminus",
    "destCode": "CCT",
    "dest": "Kakinada Town"
  },
  {
    "number": "17204",
    "name": "Kakinada Town- Bhavnagar Express",
    "sourceCode": "CCT",
    "source": "Kakinada Town",
    "destCode": "BVC",
    "dest": "Bhavnagar Terminus"
  },
  {
    "number": "17205",
    "name": "Sainagar Shirdi-Kakinada Express",
    "sourceCode": "SNSI",
    "source": "Sainagar Shirdi",
    "destCode": "CCT",
    "dest": "Kakinada Town"
  },
  {
    "number": "17206",
    "name": "Kakinada-Sainagar Shirdi Express",
    "sourceCode": "CCT",
    "source": "Kakinada Town",
    "destCode": "SNSI",
    "dest": "Sainagar Shirdi"
  },
  {
    "number": "17207",
    "name": "Sainagar Shiridi Vijayawada Express",
    "sourceCode": "SNSI",
    "source": "Sainagar Shirdi",
    "destCode": "BZA",
    "dest": "Vijayawada Jn"
  },
  {
    "number": "17208",
    "name": "Vijayawada Sainagar Shirdi Express",
    "sourceCode": "BZA",
    "source": "Vijayawada Jn",
    "destCode": "SNSI",
    "dest": "Sainagar Shirdi"
  },
  {
    "number": "17209",
    "name": "BANGALORE - KAKINADA TOWN Seshadri Exp",
    "sourceCode": "SBC",
    "source": "Bangalore City Jn",
    "destCode": "CCT",
    "dest": "Kakinada Town"
  },
  {
    "number": "17210",
    "name": "KAKINADA TOWN -BANGALORE Seshadri Exp",
    "sourceCode": "CCT",
    "source": "Kakinada Town",
    "destCode": "SBC",
    "dest": "Bangalore City Jn"
  },
  {
    "number": "17211",
    "name": "Machilipatnam Yeshvantapur Express",
    "sourceCode": "MTM",
    "source": "Machilipatnam",
    "destCode": "YPR",
    "dest": "Yesvantpur Jn"
  },
  {
    "number": "17212",
    "name": "Machilipatnam Express",
    "sourceCode": "YPR",
    "source": "Yesvantpur Jn",
    "destCode": "MTM",
    "dest": "Machilipatnam"
  },
  {
    "number": "17213",
    "name": "Narasapur-Nagarsol Express",
    "sourceCode": "NS",
    "source": "Narasapur",
    "destCode": "NSL",
    "dest": "Nagarsol"
  },
  {
    "number": "17214",
    "name": "Nagarsol Narsapur Express",
    "sourceCode": "NSL",
    "source": "Nagarsol",
    "destCode": "NS",
    "dest": "Narasapur"
  },
  {
    "number": "17225",
    "name": "Amaravati Express",
    "sourceCode": "BZA",
    "source": "Vijayawada Jn",
    "destCode": "UBL",
    "dest": "Hubli Jn"
  },
  {
    "number": "17226",
    "name": "Amaravati Express",
    "sourceCode": "UBL",
    "source": "Hubli Jn",
    "destCode": "BZA",
    "dest": "Vijayawada Jn"
  },
  {
    "number": "17229",
    "name": "Trivandrum Sabari Express",
    "sourceCode": "TVC",
    "source": "Trivandrum Central",
    "destCode": "SC",
    "dest": "Secunderabad"
  },
  {
    "number": "17230",
    "name": "Secunderabad Sabari Express",
    "sourceCode": "SC",
    "source": "Secunderabad",
    "destCode": "TVC",
    "dest": "Trivandrum Central"
  },
  {
    "number": "17233",
    "name": "Bhagyanagar Express",
    "sourceCode": "SC",
    "source": "Secunderabad Jn",
    "destCode": "BPQ",
    "dest": "Balharshah"
  },
  {
    "number": "17234",
    "name": "Bhagyanagar Express",
    "sourceCode": "BPQ",
    "source": "Balharshah",
    "destCode": "SC",
    "dest": "Secunderabad Jn"
  },
  {
    "number": "17235",
    "name": "Nagercoil Express",
    "sourceCode": "SC",
    "source": "Secunderabad",
    "destCode": "NCJ",
    "dest": "Nagercoil"
  },
  {
    "number": "17236",
    "name": "Nagercoil Express",
    "sourceCode": "NCJ",
    "source": "Nagercoil",
    "destCode": "SC",
    "dest": "Secunderabad"
  },
  {
    "number": "17239",
    "name": "Guntur Secunderabad Express",
    "sourceCode": "GNT",
    "source": "Guntur",
    "destCode": "SC",
    "dest": "Secunderabad"
  },
  {
    "number": "17240",
    "name": "Secunderabad Guntur Express",
    "sourceCode": "SC",
    "source": "Secunderabad",
    "destCode": "GNT",
    "dest": "Guntur"
  },
  {
    "number": "17241",
    "name": "Simhadri Link Express",
    "sourceCode": "NS",
    "source": "Narasapur",
    "destCode": "NDD",
    "dest": "Nidadavolu Jn"
  },
  {
    "number": "17242",
    "name": "Simhadri Link Express",
    "sourceCode": "NDD",
    "source": "Nidadavolu Jn",
    "destCode": "NS",
    "dest": "Narasapur"
  },
  {
    "number": "17255",
    "name": "Narasapur Hyderabad Express",
    "sourceCode": "NS",
    "source": "Narasapur",
    "destCode": "HYB",
    "dest": "Hyderabad Deccan"
  },
  {
    "number": "17256",
    "name": "Hyderabad-Narsapur Express",
    "sourceCode": "HYB",
    "source": "Hyderabad Deccan",
    "destCode": "NS",
    "dest": "Narasapur"
  },
  {
    "number": "17301",
    "name": "Mysore Dharwad Express",
    "sourceCode": "MYS",
    "source": "Mysore Jn",
    "destCode": "DWR",
    "dest": "Dharwar"
  },
  {
    "number": "17302",
    "name": "Dharwad Mysore Express",
    "sourceCode": "DWR",
    "source": "Dharwar",
    "destCode": "MYS",
    "dest": "Mysore Jn"
  },
  {
    "number": "17303",
    "name": "Malgudi Express",
    "sourceCode": "MYS",
    "source": "Mysore Jn",
    "destCode": "YPR",
    "dest": "Yesvantpur Jn"
  },
  {
    "number": "17304",
    "name": "Malgudi Express",
    "sourceCode": "YPR",
    "source": "Yesvantpur Jn",
    "destCode": "MYS",
    "dest": "Mysore Jn"
  },
  {
    "number": "17305",
    "name": "Hubli-H.Nizamuddin Goa Express",
    "sourceCode": "UBL",
    "source": "Hubli Jn",
    "destCode": "NZM",
    "dest": "Delhi H Nizamuddin"
  },
  {
    "number": "17307",
    "name": "Basava Express",
    "sourceCode": "YPR",
    "source": "Yesvantpur Jn",
    "destCode": "BGK",
    "dest": "Bagalkot"
  },
  {
    "number": "17308",
    "name": "Basava Express",
    "sourceCode": "BGK",
    "source": "Bagalkot",
    "destCode": "YPR",
    "dest": "Yesvantpur Jn"
  },
  {
    "number": "17309",
    "name": "YESVANTPUR - VASCO DA GAMA Exp",
    "sourceCode": "YPR",
    "source": "Yesvantpur Jn",
    "destCode": "VSG",
    "dest": "Vasco Da Gama"
  },
  {
    "number": "17310",
    "name": "VASCO DA GAMA - YESVANTPUR Exp",
    "sourceCode": "VSG",
    "source": "Vasco Da Gama",
    "destCode": "YPR",
    "dest": "Yesvantpur Jn"
  },
  {
    "number": "17311",
    "name": "CHENNAI CENT - VASCO DA GAMA Exp",
    "sourceCode": "MAS",
    "source": "Chennai Central",
    "destCode": "VSG",
    "dest": "Vasco Da Gama"
  },
  {
    "number": "17312",
    "name": "VASCO DA GAMA - CHENNAI CENT Exp",
    "sourceCode": "VSG",
    "source": "Vasco Da Gama",
    "destCode": "MAS",
    "dest": "Chennai Central"
  },
  {
    "number": "17313",
    "name": "CHENNAI CENT - HUBLI Weekly Exp",
    "sourceCode": "MAS",
    "source": "Chennai Central",
    "destCode": "UBL",
    "dest": "Hubli Jn"
  },
  {
    "number": "17314",
    "name": "HUBLI - CHENNAI CENT Weekly Exp",
    "sourceCode": "UBL",
    "source": "Hubli Jn",
    "destCode": "MAS",
    "dest": "Chennai Central"
  },
  {
    "number": "17401",
    "name": "Tirupati-Machilipatnam Express",
    "sourceCode": "TPTY",
    "source": "Tirupati Main",
    "destCode": "MTM",
    "dest": "Machilipatnam"
  },
  {
    "number": "17402",
    "name": "Machilipatanam-Tirupati Express",
    "sourceCode": "MTM",
    "source": "Machilipatnam",
    "destCode": "TPTY",
    "dest": "Tirupati Main"
  },
  {
    "number": "17403",
    "name": "Tirupati Narasapur Express",
    "sourceCode": "GDV",
    "source": "Gudivada Jn",
    "destCode": "NS",
    "dest": "Narasapur"
  },
  {
    "number": "17404",
    "name": "Narasapur Tirupati Link Express",
    "sourceCode": "NS",
    "source": "Narasapur",
    "destCode": "TPTY",
    "dest": "Tirupati Main"
  },
  {
    "number": "17405",
    "name": "Krishna Express",
    "sourceCode": "TPTY",
    "source": "Tirupati Main",
    "destCode": "ADB",
    "dest": "Adilabad"
  },
  {
    "number": "17406",
    "name": "Krishna Express",
    "sourceCode": "ADB",
    "source": "Adilabad",
    "destCode": "TPTY",
    "dest": "Tirupati Main"
  },
  {
    "number": "17415",
    "name": "Haripriya Express",
    "sourceCode": "TPTY",
    "source": "Tirupati Main",
    "destCode": "KOP",
    "dest": "C Shahu M Raj Kolhapur Term"
  },
  {
    "number": "17416",
    "name": "Haripriya Express",
    "sourceCode": "KOP",
    "source": "C Shahu M Raj Kolhapur Term",
    "destCode": "TPTY",
    "dest": "Tirupati Main"
  },
  {
    "number": "17429",
    "name": "Rayalaseema Express",
    "sourceCode": "HYB",
    "source": "Hyderabad Deccan",
    "destCode": "TPTY",
    "dest": "Tirupati Main"
  },
  {
    "number": "17430",
    "name": "Rayalaseema Express",
    "sourceCode": "TPTY",
    "source": "Tirupati Main",
    "destCode": "HYB",
    "dest": "Hyderabad Deccan"
  },
  {
    "number": "17479",
    "name": "Puri-Tirupati Express",
    "sourceCode": "PURI",
    "source": "Puri",
    "destCode": "TPTY",
    "dest": "Tirupati Main"
  },
  {
    "number": "17480",
    "name": "Tirupati-Puri Express",
    "sourceCode": "TPTY",
    "source": "Tirupati Main",
    "destCode": "PURI",
    "dest": "Puri"
  },
  {
    "number": "17481",
    "name": "Bilaspur-Tirupati Express",
    "sourceCode": "BSP",
    "source": "Bilaspur Jn",
    "destCode": "TPTY",
    "dest": "Tirupati Main"
  },
  {
    "number": "17482",
    "name": "Tirupati-Bilaspur Express",
    "sourceCode": "TPTY",
    "source": "Tirupati Main",
    "destCode": "BSP",
    "dest": "Bilaspur Jn"
  },
  {
    "number": "17487",
    "name": "Tirumala Express",
    "sourceCode": "TPTY",
    "source": "Tirupati Main",
    "destCode": "VSKP",
    "dest": "Vishakapatnam"
  },
  {
    "number": "17488",
    "name": "Tirumala Express",
    "sourceCode": "VSKP",
    "source": "Vishakapatnam",
    "destCode": "TPTY",
    "dest": "Tirupati Main"
  },
  {
    "number": "17603",
    "name": "Prasanti Nilayam Express",
    "sourceCode": "KCG",
    "source": "Kacheguda",
    "destCode": "YPR",
    "dest": "Yesvantpur Jn"
  },
  {
    "number": "17604",
    "name": "Prashanti Nilayam Express",
    "sourceCode": "YPR",
    "source": "Yesvantpur Jn",
    "destCode": "KCG",
    "dest": "Kacheguda"
  },
  {
    "number": "17607",
    "name": "Tungabhadra Express",
    "sourceCode": "SC",
    "source": "Secunderabad Jn",
    "destCode": "KRNT",
    "dest": "Kurnool Town"
  },
  {
    "number": "17608",
    "name": "Tungabhadra Express",
    "sourceCode": "KRNT",
    "source": "Kurnool Town",
    "destCode": "SC",
    "dest": "Secunderabad Jn"
  },
  {
    "number": "17609",
    "name": "PATNA - PURNA Exp",
    "sourceCode": "PNBE",
    "source": "Patna Jn",
    "destCode": "PAU",
    "dest": "Purna Jn"
  },
  {
    "number": "17610",
    "name": "PURNA - PATNA Exp",
    "sourceCode": "PAU",
    "source": "Purna Jn",
    "destCode": "PNBE",
    "dest": "Patna Jn"
  },
  {
    "number": "17613",
    "name": "Pune Nanded Exp",
    "sourceCode": "PUNE",
    "source": "Pune Jn",
    "destCode": "NED",
    "dest": "Huzur Sahib Nanded"
  },
  {
    "number": "17614",
    "name": "Nanded Pune Express",
    "sourceCode": "NED",
    "source": "Huzur Sahib Nanded",
    "destCode": "PUNE",
    "dest": "Pune Jn"
  },
  {
    "number": "17617",
    "name": "Tapovan Express",
    "sourceCode": "CSTM",
    "source": "Mumbai Cst",
    "destCode": "NED",
    "dest": "Huzur Sahib Nanded"
  },
  {
    "number": "17618",
    "name": "Tapovan Express",
    "sourceCode": "NED",
    "source": "Huzur Sahib Nanded",
    "destCode": "CSTM",
    "dest": "Mumbai Cst"
  },
  {
    "number": "17639",
    "name": "KACHEGUDA - AKOLA Intercity Exp",
    "sourceCode": "KCG",
    "source": "Kacheguda",
    "destCode": "AK",
    "dest": "Akola Jn"
  },
  {
    "number": "17640",
    "name": "AKOLA - KACHEGUDA Intercity Exp",
    "sourceCode": "AK",
    "source": "Akola Jn",
    "destCode": "KCG",
    "dest": "Kacheguda"
  },
  {
    "number": "17643",
    "name": "Circar Express",
    "sourceCode": "MS",
    "source": "Chennai Egmore",
    "destCode": "COA",
    "dest": "Kakinada Port"
  },
  {
    "number": "17644",
    "name": "Circar Express",
    "sourceCode": "COA",
    "source": "Kakinada Port",
    "destCode": "MS",
    "dest": "Chennai Egmore"
  },
  {
    "number": "17651",
    "name": "Chennai Egmore Kacheguda Express",
    "sourceCode": "MS",
    "source": "Chennai Egmore",
    "destCode": "KCG",
    "dest": "Kacheguda"
  },
  {
    "number": "17652",
    "name": "Kacheguda Chennai Egmore Express",
    "sourceCode": "KCG",
    "source": "Kacheguda",
    "destCode": "MS",
    "dest": "Chennai Egmore"
  },
  {
    "number": "17687",
    "name": "Manmad-Dharmabad Composite Express",
    "sourceCode": "MMR",
    "source": "Manmad Jn",
    "destCode": "DAB",
    "dest": "Dharmabad"
  },
  {
    "number": "17688",
    "name": "Dharmabad-Manmad Composit Express",
    "sourceCode": "DAB",
    "source": "Dharmabad",
    "destCode": "MMR",
    "dest": "Manmad Jn"
  },
  {
    "number": "18001",
    "name": "Kandari Express",
    "sourceCode": "HWH",
    "source": "Howrah Jn",
    "destCode": "DGHA",
    "dest": "Digha Flag Station"
  },
  {
    "number": "18002",
    "name": "Kandari Express",
    "sourceCode": "DGHA",
    "source": "Digha Flag Station",
    "destCode": "HWH",
    "dest": "Howrah Jn"
  },
  {
    "number": "18003",
    "name": "Jhargram Purulia Express",
    "sourceCode": "JGM",
    "source": "Jhargram",
    "destCode": "PRR",
    "dest": "Purulia Jn"
  },
  {
    "number": "18004",
    "name": "Purulia Jhargram Express",
    "sourceCode": "PRR",
    "source": "Purulia Jn",
    "destCode": "JGM",
    "dest": "Jhargram"
  },
  {
    "number": "18005",
    "name": "HOWRAH - JAGDALPUR Samaleshwari Exp",
    "sourceCode": "HWH",
    "source": "Howrah Jn",
    "destCode": "KRPU",
    "dest": "Koraput"
  },
  {
    "number": "18006",
    "name": "JAGDALPUR - HOWRAH Samaleshwari Exp",
    "sourceCode": "KRPU",
    "source": "Koraput",
    "destCode": "HWH",
    "dest": "Howrah Jn"
  },
  {
    "number": "18007",
    "name": "Shalimar-Baripada Express",
    "sourceCode": "SHM",
    "source": "Kolkata Shalimar",
    "destCode": "BPO",
    "dest": "Baripada"
  },
  {
    "number": "18008",
    "name": "Baripada-Shalimar Express",
    "sourceCode": "BPO",
    "source": "Baripada",
    "destCode": "SHM",
    "dest": "Kolkata Shalimar"
  },
  {
    "number": "18029",
    "name": "MUMBAI LTT [Kurla] - KOLKATA SALIMAR Exp",
    "sourceCode": "LTT",
    "source": "Lokmanya Tilak Term",
    "destCode": "SHM",
    "dest": "Kolkata Shalimar"
  },
  {
    "number": "18030",
    "name": "KOLKATA SALIMAR - MUMBAI LTT [Kurla] Exp",
    "sourceCode": "SHM",
    "source": "Kolkata Shalimar",
    "destCode": "LTT",
    "dest": "Lokmanya Tilak Term"
  },
  {
    "number": "18047",
    "name": "HOWRAH - VASCO DA GAMA Amravati Exp",
    "sourceCode": "HWH",
    "source": "Howrah Jn",
    "destCode": "VSG",
    "dest": "Vasco Da Gama"
  },
  {
    "number": "18048",
    "name": "VASCO-DA-GAMA - HOWRAH Amaravati Exp",
    "sourceCode": "VSG",
    "source": "Vasco Da Gama",
    "destCode": "HWH",
    "dest": "Howrah Jn"
  },
  {
    "number": "18101",
    "name": "Tatanagar Jammu Tawi Express",
    "sourceCode": "TATA",
    "source": "Tatanagar Jn",
    "destCode": "JAT",
    "dest": "Jammu Tawi"
  },
  {
    "number": "18102",
    "name": "Jammu-Rourkela Express",
    "sourceCode": "JAT",
    "source": "Jammu Tawi",
    "destCode": "ROU",
    "dest": "Rourkela"
  },
  {
    "number": "18103",
    "name": "Jallianwalabagh Express",
    "sourceCode": "TATA",
    "source": "Tatanagar Jn",
    "destCode": "ASR",
    "dest": "Amritsar Jn"
  },
  {
    "number": "18104",
    "name": "Jallianwalabagh Express",
    "sourceCode": "ASR",
    "source": "Amritsar Jn",
    "destCode": "TATA",
    "dest": "Tatanagar Jn"
  },
  {
    "number": "18105",
    "name": "Rourkela-Bhubaneswar InterCity",
    "sourceCode": "ROU",
    "source": "Rourkela",
    "destCode": "BBS",
    "dest": "Bhubaneswar"
  },
  {
    "number": "18106",
    "name": "Bhubaneswar-Rourkela InterCity",
    "sourceCode": "BBS",
    "source": "Bhubaneswar",
    "destCode": "ROU",
    "dest": "Rourkela"
  },
  {
    "number": "18107",
    "name": "ROURKELA - KORAPUT Exp",
    "sourceCode": "ROU",
    "source": "Rourkela",
    "destCode": "KRPU",
    "dest": "Koraput"
  },
  {
    "number": "18108",
    "name": "KORAPUT - ROURKELA Exp",
    "sourceCode": "KRPU",
    "source": "Koraput",
    "destCode": "ROU",
    "dest": "Rourkela"
  },
  {
    "number": "18181",
    "name": "Tata-Chapra Express",
    "sourceCode": "TATA",
    "source": "Tatanagar Jn",
    "destCode": "CPR",
    "dest": "Chhapra"
  },
  {
    "number": "18182",
    "name": "Chhapra-Tata Express",
    "sourceCode": "CPR",
    "source": "Chhapra",
    "destCode": "TATA",
    "dest": "Tatanagar Jn"
  },
  {
    "number": "18183",
    "name": "Tata-Danapur Express",
    "sourceCode": "TATA",
    "source": "Tatanagar Jn",
    "destCode": "DNR",
    "dest": "Danapur"
  },
  {
    "number": "18184",
    "name": "Danapur-Tatanagar Express",
    "sourceCode": "DNR",
    "source": "Danapur",
    "destCode": "TATA",
    "dest": "Tatanagar Jn"
  },
  {
    "number": "18189",
    "name": "Tatanagar- Alappuzha (Alleppey) Express",
    "sourceCode": "TATA",
    "source": "Tatanagar Jn",
    "destCode": "ALLP",
    "dest": "Alleppey"
  },
  {
    "number": "18190",
    "name": "Allapuzha Dhanbad Slip Express",
    "sourceCode": "ROU",
    "source": "Rourkela",
    "destCode": "TATA",
    "dest": "Tatanagar Jn"
  },
  {
    "number": "18191",
    "name": "Utsarg Express",
    "sourceCode": "CPR",
    "source": "Chhapra",
    "destCode": "CPA",
    "dest": "Kanpur Anwarganj"
  },
  {
    "number": "18192",
    "name": "Utsarg Express",
    "sourceCode": "CPA",
    "source": "Kanpur Anwarganj",
    "destCode": "CPR",
    "dest": "Chhapra"
  },
  {
    "number": "18201",
    "name": "Durg-Nautanwa (via Varanasi)Express",
    "sourceCode": "DURG",
    "source": "Durg",
    "destCode": "NTV",
    "dest": "Nautanwa"
  },
  {
    "number": "18202",
    "name": "Nautanwa-Durg Nautanwa Express",
    "sourceCode": "NTV",
    "source": "Nautanwa",
    "destCode": "DURG",
    "dest": "Durg"
  },
  {
    "number": "18203",
    "name": "Betwa Express",
    "sourceCode": "DURG",
    "source": "Durg",
    "destCode": "CNB",
    "dest": "Kanpur Central"
  },
  {
    "number": "18204",
    "name": "Betwa Express",
    "sourceCode": "CNB",
    "source": "Kanpur Central",
    "destCode": "DURG",
    "dest": "Durg"
  },
  {
    "number": "18205",
    "name": "Durg -Nautanwa Express",
    "sourceCode": "DURG",
    "source": "Durg",
    "destCode": "NTV",
    "dest": "Nautanwa"
  },
  {
    "number": "18206",
    "name": "Nautanwa-Durg Express",
    "sourceCode": "NTV",
    "source": "Nautanwa",
    "destCode": "DURG",
    "dest": "Durg"
  },
  {
    "number": "18207",
    "name": "Durg Jaipur Express",
    "sourceCode": "DURG",
    "source": "Durg",
    "destCode": "JP",
    "dest": "Jaipur"
  },
  {
    "number": "18208",
    "name": "Jaipur Durg Express",
    "sourceCode": "JP",
    "source": "Jaipur",
    "destCode": "DURG",
    "dest": "Durg"
  },
  {
    "number": "18209",
    "name": "Dalli Rajhara Raipur Express",
    "sourceCode": "DRZ",
    "source": "Dalli Rajhara",
    "destCode": "R",
    "dest": "Raipur Jn"
  },
  {
    "number": "18210",
    "name": "Raipur Dalli Rajhara Express",
    "sourceCode": "R",
    "source": "Raipur Jn",
    "destCode": "DRZ",
    "dest": "Dalli Rajhara"
  },
  {
    "number": "18233",
    "name": "INDORE - BILASPUR Narmada Exp",
    "sourceCode": "INDB",
    "source": "Indore Jn Bg",
    "destCode": "BSP",
    "dest": "Bilaspur Jn"
  },
  {
    "number": "18234",
    "name": "BILASPUR - INDORE Narmada Exp",
    "sourceCode": "BSP",
    "source": "Bilaspur Jn",
    "destCode": "INDB",
    "dest": "Indore Jn Bg"
  },
  {
    "number": "18237",
    "name": "Chhattisgarh Express",
    "sourceCode": "BSP",
    "source": "Bilaspur Jn",
    "destCode": "ASR",
    "dest": "Amritsar Jn"
  },
  {
    "number": "18238",
    "name": "Chhattisgarh Express",
    "sourceCode": "ASR",
    "source": "Amritsar Jn",
    "destCode": "BSP",
    "dest": "Bilaspur Jn"
  },
  {
    "number": "18239",
    "name": "Gerva Road-Nagpur Express",
    "sourceCode": "GAD",
    "source": "Gevra Road",
    "destCode": "NGP",
    "dest": "Nagpur"
  },
  {
    "number": "18240",
    "name": "Nagpur Bilaspur Express",
    "sourceCode": "NGP",
    "source": "Nagpur",
    "destCode": "BSP",
    "dest": "Bilaspur Jn"
  },
  {
    "number": "18241",
    "name": "Durg Ambikapur Express",
    "sourceCode": "DURG",
    "source": "Durg",
    "destCode": "ABKP",
    "dest": "Ambikapur"
  },
  {
    "number": "18301",
    "name": "Rayagada Express",
    "sourceCode": "SBP",
    "source": "Sambalpur",
    "destCode": "RGDA",
    "dest": "Rayagada"
  },
  {
    "number": "18302",
    "name": "Sambalpur Express",
    "sourceCode": "RGDA",
    "source": "Rayagada",
    "destCode": "SBP",
    "dest": "Sambalpur"
  },
  {
    "number": "18303",
    "name": "SAMBALPUR - PURI Intercity Exp",
    "sourceCode": "SBP",
    "source": "Sambalpur",
    "destCode": "PURI",
    "dest": "Puri"
  },
  {
    "number": "18304",
    "name": "PURI - SAMBALPUR Intercity Exp",
    "sourceCode": "PURI",
    "source": "Puri",
    "destCode": "SBP",
    "dest": "Sambalpur"
  },
  {
    "number": "18309",
    "name": "Nagavali Express",
    "sourceCode": "SBP",
    "source": "Sambalpur",
    "destCode": "NED",
    "dest": "Huzur Sahib Nanded"
  },
  {
    "number": "18310",
    "name": "Nagavali Express",
    "sourceCode": "NED",
    "source": "Huzur Sahib Nanded",
    "destCode": "SBP",
    "dest": "Sambalpur"
  },
  {
    "number": "18311",
    "name": "SAMBALPUR - VARANASI Exp",
    "sourceCode": "SBP",
    "source": "Sambalpur",
    "destCode": "BSB",
    "dest": "Varanasi Jn"
  },
  {
    "number": "18312",
    "name": "VARANASI - SAMBALPUR Exp",
    "sourceCode": "BSB",
    "source": "Varanasi Jn",
    "destCode": "SBP",
    "dest": "Sambalpur"
  },
  {
    "number": "18401",
    "name": "Puri - Okha (Weekly) Express",
    "sourceCode": "PURI",
    "source": "Puri",
    "destCode": "OKHA",
    "dest": "Okha"
  },
  {
    "number": "18402",
    "name": "Okha Puri Weekly Express",
    "sourceCode": "OKHA",
    "source": "Okha",
    "destCode": "PURI",
    "dest": "Puri"
  },
  {
    "number": "18405",
    "name": "PURI - AHMEDABAD Exp",
    "sourceCode": "PURI",
    "source": "Puri",
    "destCode": "ADI",
    "dest": "Ahmedabad Jn"
  },
  {
    "number": "18406",
    "name": "AHMEDABAD - PURI Exp",
    "sourceCode": "ADI",
    "source": "Ahmedabad Jn",
    "destCode": "PURI",
    "dest": "Puri"
  },
  {
    "number": "18409",
    "name": "Sri Jagannath Express",
    "sourceCode": "HWH",
    "source": "Howrah Jn",
    "destCode": "PURI",
    "dest": "Puri"
  },
  {
    "number": "18410",
    "name": "Sri Jagannath Express",
    "sourceCode": "PURI",
    "source": "Puri",
    "destCode": "HWH",
    "dest": "Howrah Jn"
  },
  {
    "number": "18411",
    "name": "Bhubaneswar-Visakhapatnam Inter City Express",
    "sourceCode": "BBS",
    "source": "Bhubaneswar",
    "destCode": "VSKP",
    "dest": "Vishakapatnam"
  },
  {
    "number": "18412",
    "name": "Visakhapatnam-Bhubaneswar Inter City Express",
    "sourceCode": "VSKP",
    "source": "Vishakapatnam",
    "destCode": "BBS",
    "dest": "Bhubaneswar"
  },
  {
    "number": "18413",
    "name": "Paradip Puri InterCity Express",
    "sourceCode": "PRDP",
    "source": "Paradip",
    "destCode": "PURI",
    "dest": "Puri"
  },
  {
    "number": "18414",
    "name": "Puri Paradip InterCity Express",
    "sourceCode": "PURI",
    "source": "Puri",
    "destCode": "PRDP",
    "dest": "Paradip"
  },
  {
    "number": "18415",
    "name": "Banspani-Puri InterCity",
    "sourceCode": "BSPX",
    "source": "Banspani",
    "destCode": "PURI",
    "dest": "Puri"
  },
  {
    "number": "18416",
    "name": "Puri-Banspani InterCity",
    "sourceCode": "PURI",
    "source": "Puri",
    "destCode": "BSPX",
    "dest": "Banspani"
  },
  {
    "number": "18417",
    "name": "Jharsuguda-Bhubaneswar Rajya Rani Express",
    "sourceCode": "JSG",
    "source": "Jharsuguda Jn",
    "destCode": "BBS",
    "dest": "Bhubaneswar"
  },
  {
    "number": "18418",
    "name": "Bhubaneswar-Jharsuguda Rajya Rani Express",
    "sourceCode": "BBS",
    "source": "Bhubaneswar",
    "destCode": "JSG",
    "dest": "Jharsuguda Jn"
  },
  {
    "number": "18419",
    "name": "Puri-Darbhanga Weekly Express",
    "sourceCode": "PURI",
    "source": "Puri",
    "destCode": "DBG",
    "dest": "Darbhanga Jn"
  },
  {
    "number": "18420",
    "name": "Darbhanga-Puri Weekly Express",
    "sourceCode": "DBG",
    "source": "Darbhanga Jn",
    "destCode": "PURI",
    "dest": "Puri"
  },
  {
    "number": "18425",
    "name": "PURI - DURG Exp",
    "sourceCode": "PURI",
    "source": "Puri",
    "destCode": "DURG",
    "dest": "Durg"
  },
  {
    "number": "18426",
    "name": "DURG - PURI Exp",
    "sourceCode": "DURG",
    "source": "Durg",
    "destCode": "PURI",
    "dest": "Puri"
  },
  {
    "number": "18447",
    "name": "Hirakhand Express",
    "sourceCode": "BBS",
    "source": "Bhubaneswar",
    "destCode": "JDB",
    "dest": "Jagdalpur"
  },
  {
    "number": "18448",
    "name": "Hirakhand Express",
    "sourceCode": "JDB",
    "source": "Jagdalpur",
    "destCode": "BBS",
    "dest": "Bhubaneswar"
  },
  {
    "number": "18449",
    "name": "Baidyanathdham Express",
    "sourceCode": "PURI",
    "source": "Puri",
    "destCode": "PNBE",
    "dest": "Patna Jn"
  },
  {
    "number": "18450",
    "name": "Baidyanathdham Express",
    "sourceCode": "PNBE",
    "source": "Patna Jn",
    "destCode": "PURI",
    "dest": "Puri"
  },
  {
    "number": "18451",
    "name": "HATIA - PURI Tapaswini Exp",
    "sourceCode": "HTE",
    "source": "Hatia",
    "destCode": "PURI",
    "dest": "Puri"
  },
  {
    "number": "18452",
    "name": "PURI - HATIA Tapaswini Exp",
    "sourceCode": "PURI",
    "source": "Puri",
    "destCode": "HTE",
    "dest": "Hatia"
  },
  {
    "number": "18463",
    "name": "Prasanti Express",
    "sourceCode": "BBS",
    "source": "Bhubaneswar",
    "destCode": "SBC",
    "dest": "Bangalore City Jn"
  },
  {
    "number": "18464",
    "name": "Prasanti Express",
    "sourceCode": "SBC",
    "source": "Bangalore City Jn",
    "destCode": "BBS",
    "dest": "Bhubaneswar"
  },
  {
    "number": "18473",
    "name": "PURI - JODHPUR Express",
    "sourceCode": "PURI",
    "source": "Puri",
    "destCode": "JU",
    "dest": "Jodhpur Jn"
  },
  {
    "number": "18474",
    "name": "JODHPUR - PURI Express",
    "sourceCode": "JU",
    "source": "Jodhpur Jn",
    "destCode": "PURI",
    "dest": "Puri"
  },
  {
    "number": "18477",
    "name": "Utkal Express",
    "sourceCode": "PURI",
    "source": "Puri",
    "destCode": "HW",
    "dest": "Haridwar Jn"
  },
  {
    "number": "18478",
    "name": "Utkal Express",
    "sourceCode": "HW",
    "source": "Haridwar Jn",
    "destCode": "PURI",
    "dest": "Puri"
  },
  {
    "number": "18495",
    "name": "Rameswaram-Bhubaneswar Express",
    "sourceCode": "RMM",
    "source": "Rameswaram",
    "destCode": "BBS",
    "dest": "Bhubaneswar"
  },
  {
    "number": "18496",
    "name": "Bhubaneswar-Rameswaram Weekly Express",
    "sourceCode": "BBS",
    "source": "Bhubaneswar",
    "destCode": "RMM",
    "dest": "Rameswaram"
  },
  {
    "number": "18507",
    "name": "VISAKHAPATNAM - AMRITSAR Hirakud Exp",
    "sourceCode": "VSKP",
    "source": "Vishakapatnam",
    "destCode": "ASR",
    "dest": "Amritsar Jn"
  },
  {
    "number": "18508",
    "name": "AMRITSAR - VISAKHAPATNAM Hirakud Exp",
    "sourceCode": "ASR",
    "source": "Amritsar Jn",
    "destCode": "VSKP",
    "dest": "Vishakapatnam"
  },
  {
    "number": "18509",
    "name": "Visakhapatnam-Nanded Express",
    "sourceCode": "VSKP",
    "source": "Vishakapatnam",
    "destCode": "NED",
    "dest": "Huzur Sahib Nanded"
  },
  {
    "number": "18510",
    "name": "Nanded-Visakhapatnam Express",
    "sourceCode": "NED",
    "source": "Huzur Sahib Nanded",
    "destCode": "VSKP",
    "dest": "Vishakapatnam"
  },
  {
    "number": "18517",
    "name": "Korba Visakhapatnam Express",
    "sourceCode": "KRBA",
    "source": "Korba",
    "destCode": "VSKP",
    "dest": "Vishakapatnam"
  },
  {
    "number": "18518",
    "name": "Visakhapatnam-Korba Express",
    "sourceCode": "VSKP",
    "source": "Vishakapatnam",
    "destCode": "KRBA",
    "dest": "Korba"
  },
  {
    "number": "18601",
    "name": "Rourkela-JammuTawi Express",
    "sourceCode": "ROU",
    "source": "Rourkela",
    "destCode": "JAT",
    "dest": "Jammu Tawi"
  },
  {
    "number": "18602",
    "name": "Jammu Tawi-Rourkela Express",
    "sourceCode": "MURI",
    "source": "Muri",
    "destCode": "HTE",
    "dest": "Hatia"
  },
  {
    "number": "18603",
    "name": "Ranchi-Bhagalpur Tri-Weekly Express",
    "sourceCode": "RNC",
    "source": "Ranchi",
    "destCode": "BGP",
    "dest": "Bhagalpur"
  },
  {
    "number": "18604",
    "name": "Bhagalpur Ranchi Express",
    "sourceCode": "BGP",
    "source": "Bhagalpur",
    "destCode": "RNC",
    "dest": "Ranchi"
  },
  {
    "number": "18605",
    "name": "Ranchi-Jaynagar Express",
    "sourceCode": "RNC",
    "source": "Ranchi",
    "destCode": "JYG",
    "dest": "Jaynagar"
  },
  {
    "number": "18606",
    "name": "Jaynagar-Ranchi Express",
    "sourceCode": "JYG",
    "source": "Jaynagar",
    "destCode": "RNC",
    "dest": "Ranchi"
  },
  {
    "number": "18609",
    "name": "RANCHI - MUMBAI LTT Exp",
    "sourceCode": "RNC",
    "source": "Ranchi",
    "destCode": "LTT",
    "dest": "Lokmanya Tilak Term"
  },
  {
    "number": "18610",
    "name": "MUMBAI LTT - RANCHI Exp",
    "sourceCode": "LTT",
    "source": "Lokmanya Tilak Term",
    "destCode": "RNC",
    "dest": "Ranchi"
  },
  {
    "number": "18611",
    "name": "Ranchi-Varanasi Express",
    "sourceCode": "RNC",
    "source": "Ranchi",
    "destCode": "BSB",
    "dest": "Varanasi Jn"
  },
  {
    "number": "18612",
    "name": "Varanasi-Ranchi Express",
    "sourceCode": "BSB",
    "source": "Varanasi Jn",
    "destCode": "RNC",
    "dest": "Ranchi"
  },
  {
    "number": "18613",
    "name": "Ranchi Chopan Express",
    "sourceCode": "RNC",
    "source": "Ranchi",
    "destCode": "CPU",
    "dest": "Chopan"
  },
  {
    "number": "18614",
    "name": "Chopan Ranchi Express",
    "sourceCode": "CPU",
    "source": "Chopan",
    "destCode": "RNC",
    "dest": "Ranchi"
  },
  {
    "number": "18615",
    "name": "HOWRAH - HATIA Kriya Yoga Express",
    "sourceCode": "HWH",
    "source": "Howrah Jn",
    "destCode": "HTE",
    "dest": "Hatia"
  },
  {
    "number": "18616",
    "name": "HATIA - HOWRAH Kriya Yoga Express",
    "sourceCode": "HTE",
    "source": "Hatia",
    "destCode": "HWH",
    "dest": "Howrah Jn"
  },
  {
    "number": "18617",
    "name": "Howrah-Ranchi Intercity",
    "sourceCode": "HWH",
    "source": "Howrah Jn",
    "destCode": "RNC",
    "dest": "Ranchi"
  },
  {
    "number": "18618",
    "name": "Ranchi-Howrah Intercity",
    "sourceCode": "RNC",
    "source": "Ranchi",
    "destCode": "HWH",
    "dest": "Howrah Jn"
  },
  {
    "number": "18621",
    "name": "Patliputra Express",
    "sourceCode": "PNBE",
    "source": "Patna Jn",
    "destCode": "HTE",
    "dest": "Hatia"
  },
  {
    "number": "18622",
    "name": "Patliputra Express",
    "sourceCode": "HTE",
    "source": "Hatia",
    "destCode": "PNBE",
    "dest": "Patna Jn"
  },
  {
    "number": "18623",
    "name": "Patna Rajendra Nagar-Hatia Express",
    "sourceCode": "RJPB",
    "source": "Rajendra Nagar Bihar",
    "destCode": "HTE",
    "dest": "Hatia"
  },
  {
    "number": "18624",
    "name": "Hatia-Rajendranagar Express",
    "sourceCode": "HTE",
    "source": "Hatia",
    "destCode": "RJPB",
    "dest": "Rajendra Nagar Bihar"
  },
  {
    "number": "18625",
    "name": "Patna-Hatia Super Express",
    "sourceCode": "PNBE",
    "source": "Patna Jn",
    "destCode": "HTE",
    "dest": "Hatia"
  },
  {
    "number": "18626",
    "name": "Hatia-Patna Super Express",
    "sourceCode": "HTE",
    "source": "Hatia",
    "destCode": "PNBE",
    "dest": "Patna Jn"
  },
  {
    "number": "18627",
    "name": "Howrah-Ranchi InterCity Express",
    "sourceCode": "HWH",
    "source": "Howrah Jn",
    "destCode": "RNC",
    "dest": "Ranchi"
  },
  {
    "number": "18628",
    "name": "Ranchi-Howrah InterCity Express",
    "sourceCode": "RNC",
    "source": "Ranchi",
    "destCode": "HWH",
    "dest": "Howrah Jn"
  },
  {
    "number": "18631",
    "name": "Ranchi Garib Nawaz Express",
    "sourceCode": "RNC",
    "source": "Ranchi",
    "destCode": "AII",
    "dest": "Ajmer Jn"
  },
  {
    "number": "18632",
    "name": "Garib Nawaz Express",
    "sourceCode": "AII",
    "source": "Ajmer Jn",
    "destCode": "RNC",
    "dest": "Ranchi"
  },
  {
    "number": "18645",
    "name": "East Coast Express",
    "sourceCode": "HWH",
    "source": "Howrah Jn",
    "destCode": "HYB",
    "dest": "Hyderabad Deccan"
  },
  {
    "number": "18646",
    "name": "East Coast Express",
    "sourceCode": "HYB",
    "source": "Hyderabad Deccan",
    "destCode": "HWH",
    "dest": "Howrah Jn"
  },
  {
    "number": "19005",
    "name": "Saurashtra Mail",
    "sourceCode": "BCT",
    "source": "Mumbai Central",
    "destCode": "OKHA",
    "dest": "Okha"
  },
  {
    "number": "19006",
    "name": "Saurashtra Mail",
    "sourceCode": "OKHA",
    "source": "Okha",
    "destCode": "BCT",
    "dest": "Mumbai Central"
  },
  {
    "number": "19011",
    "name": "Gujarat Express",
    "sourceCode": "BCT",
    "source": "Mumbai Central",
    "destCode": "ADI",
    "dest": "Ahmedabad Jn"
  },
  {
    "number": "19012",
    "name": "Gujarat Express",
    "sourceCode": "ADI",
    "source": "Ahmedabad Jn",
    "destCode": "BCT",
    "dest": "Mumbai Central"
  },
  {
    "number": "19017",
    "name": "Saurashtra Janata Express",
    "sourceCode": "BDTS",
    "source": "Mumbai Bandra Terminus",
    "destCode": "JAM",
    "dest": "Jamnagar"
  },
  {
    "number": "19018",
    "name": "Saurashtra Janata Express",
    "sourceCode": "JAM",
    "source": "Jamnagar",
    "destCode": "BDTS",
    "dest": "Mumbai Bandra Terminus"
  },
  {
    "number": "19019",
    "name": "Bandra T - Dehradun Express",
    "sourceCode": "BDTS",
    "source": "Mumbai Bandra Terminus",
    "destCode": "DDN",
    "dest": "Dehradun"
  },
  {
    "number": "19020",
    "name": "Dehradun - Bandra Terminus Express",
    "sourceCode": "DDN",
    "source": "Dehradun",
    "destCode": "BDTS",
    "dest": "Mumbai Bandra Terminus"
  },
  {
    "number": "19023",
    "name": "Mumbai Firozpur Janata Express",
    "sourceCode": "BCT",
    "source": "Mumbai Central",
    "destCode": "FZR",
    "dest": "Firozpur Cant"
  },
  {
    "number": "19024",
    "name": "Firozpur Mumbai Janata Express",
    "sourceCode": "FZR",
    "source": "Firozpur Cant",
    "destCode": "BCT",
    "dest": "Mumbai Central"
  },
  {
    "number": "19025",
    "name": "Surat Bhavnagar Express Slip",
    "sourceCode": "ST",
    "source": "Surat",
    "destCode": "MHV",
    "dest": "Mahuva Jn"
  },
  {
    "number": "19026",
    "name": "Bhavnagar Surat (Slip) Express",
    "sourceCode": "MHV",
    "source": "Mahuva Jn",
    "destCode": "ST",
    "dest": "Surat"
  },
  {
    "number": "19037",
    "name": "Awadh Express",
    "sourceCode": "BDTS",
    "source": "Mumbai Bandra Terminus",
    "destCode": "GKP",
    "dest": "Gorakhpur Jn"
  },
  {
    "number": "19038",
    "name": "Awadh Express",
    "sourceCode": "GKP",
    "source": "Gorakhpur Jn",
    "destCode": "BDTS",
    "dest": "Mumbai Bandra Terminus"
  },
  {
    "number": "19039",
    "name": "Awadh Express",
    "sourceCode": "BDTS",
    "source": "Mumbai Bandra Terminus",
    "destCode": "MFP",
    "dest": "Muzaffarpur Jn"
  },
  {
    "number": "19040",
    "name": "Awadh Express",
    "sourceCode": "MFP",
    "source": "Muzaffarpur Jn",
    "destCode": "BDTS",
    "dest": "Mumbai Bandra Terminus"
  },
  {
    "number": "19047",
    "name": "SURAT - BHAGALPUR Tapti Ganga Exp",
    "sourceCode": "ST",
    "source": "Surat",
    "destCode": "BGP",
    "dest": "Bhagalpur"
  },
  {
    "number": "19048",
    "name": "BHAGALPUR - SURAT Tapti Ganga Exp",
    "sourceCode": "BGP",
    "source": "Bhagalpur",
    "destCode": "ST",
    "dest": "Surat"
  },
  {
    "number": "19049",
    "name": "MUMBAI BANDRA T - PATNA Exp",
    "sourceCode": "BDTS",
    "source": "Mumbai Bandra Terminus",
    "destCode": "PNBE",
    "dest": "Patna Jn"
  },
  {
    "number": "19050",
    "name": "PATNA - MUMBAI BANDRA T Exp",
    "sourceCode": "PNBE",
    "source": "Patna Jn",
    "destCode": "BDTS",
    "dest": "Mumbai Bandra Terminus"
  },
  {
    "number": "19051",
    "name": "VALSAD - MUZAFFARPUR Shramik Exp",
    "sourceCode": "BL",
    "source": "Valsad",
    "destCode": "SEE",
    "dest": "Sonpur Jn"
  },
  {
    "number": "19052",
    "name": "MUZAFFARPUR - VALSAD Shramik Exp",
    "sourceCode": "SEE",
    "source": "Sonpur Jn",
    "destCode": "BL",
    "dest": "Valsad"
  },
  {
    "number": "19053",
    "name": "SURAT - MUZAFFARPUR Exp",
    "sourceCode": "ST",
    "source": "Surat",
    "destCode": "MFP",
    "dest": "Muzaffarpur Jn"
  },
  {
    "number": "19054",
    "name": "MUZAFFARPUR - SURAT Exp",
    "sourceCode": "MFP",
    "source": "Muzaffarpur Jn",
    "destCode": "ST",
    "dest": "Surat"
  },
  {
    "number": "19059",
    "name": "Surat-Jamnagar InterCity Express",
    "sourceCode": "ST",
    "source": "Surat",
    "destCode": "JAM",
    "dest": "Jamnagar"
  },
  {
    "number": "19060",
    "name": "Jamnagar-Surat InterCity Express",
    "sourceCode": "JAM",
    "source": "Jamnagar",
    "destCode": "ST",
    "dest": "Surat"
  },
  {
    "number": "19105",
    "name": "Ahmedabad-Haridwar Mail",
    "sourceCode": "ADI",
    "source": "Ahmedabad Jn",
    "destCode": "HW",
    "dest": "Haridwar Jn"
  },
  {
    "number": "19106",
    "name": "Haridwar-Ahmedabad Mail",
    "sourceCode": "HW",
    "source": "Haridwar Jn",
    "destCode": "ADI",
    "dest": "Ahmedabad Jn"
  },
  {
    "number": "19107",
    "name": "Ahmedabad-Udhampur Janmabhoomi Express",
    "sourceCode": "ADI",
    "source": "Ahmedabad Jn",
    "destCode": "UHP",
    "dest": "Udhampur"
  },
  {
    "number": "19108",
    "name": "Udhampur-Ahmedabad Janmabhoomi Express",
    "sourceCode": "UHP",
    "source": "Udhampur",
    "destCode": "ADI",
    "dest": "Ahmedabad Jn"
  },
  {
    "number": "19109",
    "name": "Gujarat Queen Express",
    "sourceCode": "BL",
    "source": "Valsad",
    "destCode": "ADI",
    "dest": "Ahmedabad Jn"
  },
  {
    "number": "19110",
    "name": "Gujarat Queen Express",
    "sourceCode": "ADI",
    "source": "Ahmedabad Jn",
    "destCode": "BL",
    "dest": "Valsad"
  },
  {
    "number": "19113",
    "name": "Bhilad Vadodara Express",
    "sourceCode": "BLD",
    "source": "Bhilad",
    "destCode": "BRC",
    "dest": "Vadodara Jn"
  },
  {
    "number": "19114",
    "name": "Vadodara Bhilad Express",
    "sourceCode": "BRC",
    "source": "Vadodara Jn",
    "destCode": "BLD",
    "dest": "Bhilad"
  },
  {
    "number": "19115",
    "name": "MUMBAI BANDRA - BHUJ Sayaji Nagari Exp",
    "sourceCode": "BDTS",
    "source": "Mumbai Bandra Terminus",
    "destCode": "BHUJ",
    "dest": "Bhuj"
  },
  {
    "number": "19116",
    "name": "BHUJ - MUMBAI BANDRA Sayaji Nagari Exp",
    "sourceCode": "BHUJ",
    "source": "Bhuj",
    "destCode": "BDTS",
    "dest": "Mumbai Bandra Terminus"
  },
  {
    "number": "19119",
    "name": "Ahmedabad Somnath Intercity Express",
    "sourceCode": "ADI",
    "source": "Ahmedabad Jn",
    "destCode": "VRL",
    "dest": "Veraval"
  },
  {
    "number": "19120",
    "name": "Somnath Ahmedabad Intercity Express",
    "sourceCode": "SMNH",
    "source": "Somnath",
    "destCode": "ADI",
    "dest": "Ahmedabad Jn"
  },
  {
    "number": "19129",
    "name": "Baroda Ahmedabad Express",
    "sourceCode": "BRC",
    "source": "Vadodara Jn",
    "destCode": "ADI",
    "dest": "Ahmedabad Jn"
  },
  {
    "number": "19130",
    "name": "Ahmedabad Baroda Express",
    "sourceCode": "ADI",
    "source": "Ahmedabad Jn",
    "destCode": "BRC",
    "dest": "Vadodara Jn"
  },
  {
    "number": "19131",
    "name": "MUMBAI BANDRA - BHUJ Kutch Exp",
    "sourceCode": "BDTS",
    "source": "Mumbai Bandra Terminus",
    "destCode": "BHUJ",
    "dest": "Bhuj"
  },
  {
    "number": "19132",
    "name": "BHUJ - MUMBAI BANDRA Kutch Exp",
    "sourceCode": "BHUJ",
    "source": "Bhuj",
    "destCode": "BDTS",
    "dest": "Mumbai Bandra Terminus"
  },
  {
    "number": "19143",
    "name": "Lokshakti Express",
    "sourceCode": "BDTS",
    "source": "Mumbai Bandra Terminus",
    "destCode": "ADI",
    "dest": "Ahmedabad Jn"
  },
  {
    "number": "19144",
    "name": "Lokshakti Express",
    "sourceCode": "ADI",
    "source": "Ahmedabad Jn",
    "destCode": "BDTS",
    "dest": "Mumbai Bandra Terminus"
  },
  {
    "number": "19151",
    "name": "PALANPUR - GANDHIDHAM Exp",
    "sourceCode": "PNU",
    "source": "Palanpur Jn",
    "destCode": "GIMB",
    "dest": "Gandhidham Bg"
  },
  {
    "number": "19152",
    "name": "GANDHIDHAM - PALANPUR Exp",
    "sourceCode": "GIMB",
    "source": "Gandhidham Bg",
    "destCode": "PNU",
    "dest": "Palanpur Jn"
  },
  {
    "number": "19165",
    "name": "Sabarmati Express",
    "sourceCode": "ADI",
    "source": "Ahmedabad Jn",
    "destCode": "DBG",
    "dest": "Darbhanga Jn"
  },
  {
    "number": "19166",
    "name": "Sabarmati Express",
    "sourceCode": "DBG",
    "source": "Darbhanga Jn",
    "destCode": "ADI",
    "dest": "Ahmedabad Jn"
  },
  {
    "number": "19167",
    "name": "Sabarmati Express",
    "sourceCode": "ADI",
    "source": "Ahmedabad Jn",
    "destCode": "BSB",
    "dest": "Varanasi Jn"
  },
  {
    "number": "19168",
    "name": "Sabarmati Express",
    "sourceCode": "BSB",
    "source": "Varanasi Jn",
    "destCode": "ADI",
    "dest": "Ahmedabad Jn"
  },
  {
    "number": "19215",
    "name": "Saurashtra Express",
    "sourceCode": "BCT",
    "source": "Mumbai Central",
    "destCode": "PBR",
    "dest": "Porbandar"
  },
  {
    "number": "19216",
    "name": "Saurashtra Express",
    "sourceCode": "PBR",
    "source": "Porbandar",
    "destCode": "BCT",
    "dest": "Mumbai Central"
  },
  {
    "number": "19221",
    "name": "Ahmedabad-Veraval Somnath Express",
    "sourceCode": "ADI",
    "source": "Ahmedabad Jn",
    "destCode": "VRL",
    "dest": "Veraval"
  },
  {
    "number": "19222",
    "name": "Veraval-Ahmedabad Somnath Express",
    "sourceCode": "VRL",
    "source": "Veraval",
    "destCode": "ADI",
    "dest": "Ahmedabad Jn"
  },
  {
    "number": "19223",
    "name": "AHMEDABAD - JAMMU TAWI Exp",
    "sourceCode": "ADI",
    "source": "Ahmedabad Jn",
    "destCode": "JAT",
    "dest": "Jammu Tawi"
  },
  {
    "number": "19224",
    "name": "JAMMU TAWI - AHMEDABAD Exp",
    "sourceCode": "JAT",
    "source": "Jammu Tawi",
    "destCode": "ADI",
    "dest": "Ahmedabad Jn"
  },
  {
    "number": "19225",
    "name": "Bhatinda Jammu Tawi Express",
    "sourceCode": "BTI",
    "source": "Bhatinda Jn",
    "destCode": "JAT",
    "dest": "Jammu Tawi"
  },
  {
    "number": "19226",
    "name": "Jammu Tawi Bhatinda Express",
    "sourceCode": "JAT",
    "source": "Jammu Tawi",
    "destCode": "BTI",
    "dest": "Bhatinda Jn"
  },
  {
    "number": "19259",
    "name": "KOCHUVELI - BHAVNAGAR Exp",
    "sourceCode": "KCVL",
    "source": "Kochuveli",
    "destCode": "BVC",
    "dest": "Bhavnagar Terminus"
  },
  {
    "number": "19260",
    "name": "BHAVNAGAR - KOCHUVELI Exp",
    "sourceCode": "BVC",
    "source": "Bhavnagar Terminus",
    "destCode": "KCVL",
    "dest": "Kochuveli"
  },
  {
    "number": "19263",
    "name": "Porbandar-Delhi Sarai Rohilla (Biweekly) Express",
    "sourceCode": "PBR",
    "source": "Porbandar",
    "destCode": "DEE",
    "dest": "Delhi Sarai Rohilla"
  },
  {
    "number": "19264",
    "name": "Delhi SaraiRohilla-Porbandar Express",
    "sourceCode": "DEE",
    "source": "Delhi Sarai Rohilla",
    "destCode": "PBR",
    "dest": "Porbandar"
  },
  {
    "number": "19269",
    "name": "Porbandar Muzaffarpur Express",
    "sourceCode": "PBR",
    "source": "Porbandar",
    "destCode": "MFP",
    "dest": "Muzaffarpur Jn"
  },
  {
    "number": "19270",
    "name": "Muzaffarpur-Porbandar Express",
    "sourceCode": "MFP",
    "source": "Muzaffarpur Jn",
    "destCode": "PBR",
    "dest": "Porbandar"
  },
  {
    "number": "19303",
    "name": "InterCity Express",
    "sourceCode": "RTM",
    "source": "Ratlam Jn",
    "destCode": "BPL",
    "dest": "Bhopal Jn"
  },
  {
    "number": "19305",
    "name": "Shipra Express",
    "sourceCode": "INDB",
    "source": "Indore Jn Bg",
    "destCode": "HWH",
    "dest": "Howrah Jn"
  },
  {
    "number": "19306",
    "name": "Shipra Express",
    "sourceCode": "HWH",
    "source": "Howrah Jn",
    "destCode": "INDB",
    "dest": "Indore Jn Bg"
  },
  {
    "number": "19309",
    "name": "Shanti Express",
    "sourceCode": "GNC",
    "source": "Gandhinagar Capital",
    "destCode": "INDB",
    "dest": "Indore Jn Bg"
  },
  {
    "number": "19310",
    "name": "Shanti Express",
    "sourceCode": "INDB",
    "source": "Indore Jn Bg",
    "destCode": "GNC",
    "dest": "Gandhinagar Capital"
  },
  {
    "number": "19311",
    "name": "Pune Indore Express",
    "sourceCode": "PUNE",
    "source": "Pune Jn",
    "destCode": "INDB",
    "dest": "Indore Jn Bg"
  },
  {
    "number": "19312",
    "name": "Indore Pune Express",
    "sourceCode": "INDB",
    "source": "Indore Jn Bg",
    "destCode": "PUNE",
    "dest": "Pune Jn"
  },
  {
    "number": "19313",
    "name": "Indore-Patna Express",
    "sourceCode": "INDB",
    "source": "Indore Jn Bg",
    "destCode": "PNBE",
    "dest": "Patna Jn"
  },
  {
    "number": "19314",
    "name": "Patna Indore Express",
    "sourceCode": "RJPB",
    "source": "Rajendra Nagar Bihar",
    "destCode": "INDB",
    "dest": "Indore Jn Bg"
  },
  {
    "number": "19321",
    "name": "Indore-Rajendranagar Express",
    "sourceCode": "INDB",
    "source": "Indore Jn Bg",
    "destCode": "RJPB",
    "dest": "Rajendra Nagar Bihar"
  },
  {
    "number": "19322",
    "name": "Patna-Indore Express",
    "sourceCode": "RJPB",
    "source": "Rajendra Nagar Bihar",
    "destCode": "INDB",
    "dest": "Indore Jn Bg"
  },
  {
    "number": "19323",
    "name": "Indore Habibganj InterCity Express",
    "sourceCode": "INDB",
    "source": "Indore Jn Bg",
    "destCode": "HBJ",
    "dest": "Habibganj"
  },
  {
    "number": "19324",
    "name": "Habibganj Indore InterCity Express",
    "sourceCode": "HBJ",
    "source": "Habibganj",
    "destCode": "INDB",
    "dest": "Indore Jn Bg"
  },
  {
    "number": "19325",
    "name": "Indore Amritsar (Weekly) Express",
    "sourceCode": "INDB",
    "source": "Indore Jn Bg",
    "destCode": "ASR",
    "dest": "Amritsar Jn"
  },
  {
    "number": "19326",
    "name": "Amritsar Indore Express",
    "sourceCode": "ASR",
    "source": "Amritsar Jn",
    "destCode": "INDB",
    "dest": "Indore Jn Bg"
  },
  {
    "number": "19327",
    "name": "Ratlam Chittaurgarh Express",
    "sourceCode": "RTM",
    "source": "Ratlam Jn",
    "destCode": "COR",
    "dest": "Chittaurgarh"
  },
  {
    "number": "19328",
    "name": "Chittaurgarh Ratlam Express",
    "sourceCode": "COR",
    "source": "Chittaurgarh",
    "destCode": "RTM",
    "dest": "Ratlam Jn"
  },
  {
    "number": "19565",
    "name": "Uttaranchal Express",
    "sourceCode": "OKHA",
    "source": "Okha",
    "destCode": "DDN",
    "dest": "Dehradun"
  },
  {
    "number": "19566",
    "name": "Uttranchal Express",
    "sourceCode": "DDN",
    "source": "Dehradun",
    "destCode": "OKHA",
    "dest": "Okha"
  },
  {
    "number": "19567",
    "name": "TUTICORIN - OKHA Exp",
    "sourceCode": "MDU",
    "source": "Madurai Jn",
    "destCode": "DWK",
    "dest": "Dwarka"
  },
  {
    "number": "19568",
    "name": "OKHA - TUTICORIN Exp",
    "sourceCode": "DWK",
    "source": "Dwarka",
    "destCode": "MDU",
    "dest": "Madurai Jn"
  },
  {
    "number": "19569",
    "name": "Okha Varanasi Express",
    "sourceCode": "OKHA",
    "source": "Okha",
    "destCode": "BSB",
    "dest": "Varanasi Jn"
  },
  {
    "number": "19570",
    "name": "Varanasi Okha Weekly Express",
    "sourceCode": "BSB",
    "source": "Varanasi Jn",
    "destCode": "OKHA",
    "dest": "Okha"
  },
  {
    "number": "19571",
    "name": "Rajkot-Porbandar Express",
    "sourceCode": "RJT",
    "source": "Rajkot Jn",
    "destCode": "PBR",
    "dest": "Porbandar"
  },
  {
    "number": "19572",
    "name": "Porbandar-Rajkot Express",
    "sourceCode": "PBR",
    "source": "Porbandar",
    "destCode": "RJT",
    "dest": "Rajkot Jn"
  },
  {
    "number": "19601",
    "name": "Ajmer New Jalpaiguri Weekly Express",
    "sourceCode": "AII",
    "source": "Ajmer Jn",
    "destCode": "NJP",
    "dest": "New Jalpaiguri"
  },
  {
    "number": "19602",
    "name": "New Jalpaiguri Ajmer Weekly Express",
    "sourceCode": "NJP",
    "source": "New Jalpaiguri",
    "destCode": "AII",
    "dest": "Ajmer Jn"
  },
  {
    "number": "19603",
    "name": "Ajmer-Sultanpur Weekly Express",
    "sourceCode": "AII",
    "source": "Ajmer Jn",
    "destCode": "SLN",
    "dest": "Sultanpur"
  },
  {
    "number": "19604",
    "name": "Sultanpur Ajmer Express",
    "sourceCode": "SLN",
    "source": "Sultanpur",
    "destCode": "AII",
    "dest": "Ajmer Jn"
  },
  {
    "number": "19653",
    "name": "Ratlam-Ajmer Express",
    "sourceCode": "RTM",
    "source": "Ratlam Jn",
    "destCode": "AII",
    "dest": "Ajmer Jn"
  },
  {
    "number": "19654",
    "name": "Ajmer-Ratlam Express",
    "sourceCode": "AII",
    "source": "Ajmer Jn",
    "destCode": "RTM",
    "dest": "Ratlam Jn"
  },
  {
    "number": "19657",
    "name": "Indore Jn - Udaipur Express",
    "sourceCode": "INDB",
    "source": "Indore Jn Bg",
    "destCode": "UDZ",
    "dest": "Udaipur City"
  },
  {
    "number": "19658",
    "name": "Udaipur Indore Express",
    "sourceCode": "UDZ",
    "source": "Udaipur City",
    "destCode": "INDB",
    "dest": "Indore Jn Bg"
  },
  {
    "number": "19707",
    "name": "Aravalli Express",
    "sourceCode": "BDTS",
    "source": "Mumbai Bandra Terminus",
    "destCode": "JP",
    "dest": "Jaipur"
  },
  {
    "number": "19708",
    "name": "Aravalli Express",
    "sourceCode": "JP",
    "source": "Jaipur",
    "destCode": "BDTS",
    "dest": "Mumbai Bandra Terminus"
  },
  {
    "number": "19709",
    "name": "JAIPUR - KAMAKHYA Kavi Guru Exp",
    "sourceCode": "JP",
    "source": "Jaipur",
    "destCode": "KYQ",
    "dest": "Kamakhya"
  },
  {
    "number": "19710",
    "name": "KAMAKHYA - JAIPUR Kavi Guru Exp",
    "sourceCode": "KYQ",
    "source": "Kamakhya",
    "destCode": "JP",
    "dest": "Jaipur"
  },
  {
    "number": "19711",
    "name": "Jaipur-Bhopal Express",
    "sourceCode": "JP",
    "source": "Jaipur",
    "destCode": "BPL",
    "dest": "Bhopal Jn"
  },
  {
    "number": "19712",
    "name": "Bhopal Jaipur Express",
    "sourceCode": "BPL",
    "source": "Bhopal Jn",
    "destCode": "JP",
    "dest": "Jaipur"
  },
  {
    "number": "19735",
    "name": "Intercity Express",
    "sourceCode": "JP",
    "source": "Jaipur",
    "destCode": "LHU",
    "dest": "Loharu"
  },
  {
    "number": "19736",
    "name": "Loharu-Jaipur Intercity Express",
    "sourceCode": "LHU",
    "source": "Loharu",
    "destCode": "JP",
    "dest": "Jaipur"
  },
  {
    "number": "19771",
    "name": "Jaipur - Amritsar Express",
    "sourceCode": "JP",
    "source": "Jaipur",
    "destCode": "ASR",
    "dest": "Amritsar Jn"
  },
  {
    "number": "19772",
    "name": "Amritsar - Jaipur Express",
    "sourceCode": "ASR",
    "source": "Amritsar Jn",
    "destCode": "JP",
    "dest": "Jaipur"
  },
  {
    "number": "19781",
    "name": "Jaipur-Amritsar Express",
    "sourceCode": "JP",
    "source": "Jaipur",
    "destCode": "ASR",
    "dest": "Amritsar Jn"
  },
  {
    "number": "19782",
    "name": "Amritsar-Jaipur Express",
    "sourceCode": "ASR",
    "source": "Amritsar Jn",
    "destCode": "JP",
    "dest": "Jaipur"
  },
  {
    "number": "19801",
    "name": "Kota-Indore Intercity Express",
    "sourceCode": "KOTA",
    "source": "Kota Jn",
    "destCode": "INDB",
    "dest": "Indore Jn Bg"
  },
  {
    "number": "19802",
    "name": "Indore-Kota InterCity Express",
    "sourceCode": "INDB",
    "source": "Indore Jn Bg",
    "destCode": "KOTA",
    "dest": "Kota Jn"
  },
  {
    "number": "19911",
    "name": "Mahesana Ahmedabad InterCity Express",
    "sourceCode": "MSH",
    "source": "Mahesana Jn",
    "destCode": "ADI",
    "dest": "Ahmedabad Jn"
  },
  {
    "number": "19915",
    "name": "Mahesana Ahmedabad InterCity",
    "sourceCode": "MSH",
    "source": "Mahesana Jn",
    "destCode": "ADI",
    "dest": "Ahmedabad Jn"
  },
  {
    "number": "19916",
    "name": "Ahmedabad Mahesana InterCity",
    "sourceCode": "ADI",
    "source": "Ahmedabad Jn",
    "destCode": "MSH",
    "dest": "Mahesana Jn"
  },
  {
    "number": "19943",
    "name": "UDAIPUR - AHMEDABAD Exp",
    "sourceCode": "UDZ",
    "source": "Udaipur City",
    "destCode": "ADI",
    "dest": "Ahmedabad Jn"
  },
  {
    "number": "20607",
    "name": "Vande Bharat Express",
    "sourceCode": "MAS",
    "source": "Chennai Central",
    "destCode": "CBE",
    "dest": "Coimbatore"
  },
  {
    "number": "20608",
    "name": "Vande Bharat Express",
    "sourceCode": "CBE",
    "source": "Coimbatore",
    "destCode": "MAS",
    "dest": "Chennai Central"
  },
  {
    "number": "21028",
    "name": "Solapur-Gondia Slip Exp.",
    "sourceCode": "SUR",
    "source": "Solapur Jn",
    "destCode": "G",
    "dest": "Gondia Jn"
  },
  {
    "number": "21068",
    "name": "Rai Bareli-Mumbai LTT Saket Express",
    "sourceCode": "RBL",
    "source": "Rae Bareli Jn",
    "destCode": "LTT",
    "dest": "Lokmanya Tilak Term"
  },
  {
    "number": "21107",
    "name": "Khajuraho-Varanasi Bundelkhand Link Express",
    "sourceCode": "KURJ",
    "source": "Khajuraho",
    "destCode": "BSB",
    "dest": "Varanasi Jn"
  },
  {
    "number": "21108",
    "name": "Bundelkhand Link Express",
    "sourceCode": "BSB",
    "source": "Varanasi Jn",
    "destCode": "KURJ",
    "dest": "Khajuraho"
  },
  {
    "number": "21125",
    "name": "Indore Bhind Express",
    "sourceCode": "INDB",
    "source": "Indore Jn Bg",
    "destCode": "BIX",
    "dest": "Bhind"
  },
  {
    "number": "21126",
    "name": "Bhind Indore Express",
    "sourceCode": "BIX",
    "source": "Bhind",
    "destCode": "INDB",
    "dest": "Indore Jn Bg"
  },
  {
    "number": "22111",
    "name": "Bhusaval Nagpur (Triweekly) Express",
    "sourceCode": "BSL",
    "source": "Bhusaval Jn",
    "destCode": "NGP",
    "dest": "Nagpur"
  },
  {
    "number": "22112",
    "name": "Nagpur-Bhusaval SF Express",
    "sourceCode": "NGP",
    "source": "Nagpur",
    "destCode": "BSL",
    "dest": "Bhusaval Jn"
  },
  {
    "number": "22131",
    "name": "PUNE - MANDUADIH Gyan Ganga Exp",
    "sourceCode": "PUNE",
    "source": "Pune Jn",
    "destCode": "MUV",
    "dest": "Manduadih"
  },
  {
    "number": "22132",
    "name": "MANDUADIH - PUNE Gyan Ganga Exp",
    "sourceCode": "MUV",
    "source": "Manduadih",
    "destCode": "PUNE",
    "dest": "Pune Jn"
  },
  {
    "number": "22161",
    "name": "Bhopal Damoh Rajya Rani exp",
    "sourceCode": "BPL",
    "source": "Bhopal Jn",
    "destCode": "DMO",
    "dest": "Damoh"
  },
  {
    "number": "22162",
    "name": "Damoh Bhopal Rajya Rani Express",
    "sourceCode": "DMO",
    "source": "Damoh",
    "destCode": "BPL",
    "dest": "Bhopal Jn"
  },
  {
    "number": "22207",
    "name": "Super AC Express",
    "sourceCode": "MAS",
    "source": "Chennai Central",
    "destCode": "TVC",
    "dest": "Trivandrum Central"
  },
  {
    "number": "22208",
    "name": "Super AC Express",
    "sourceCode": "TVC",
    "source": "Trivandrum Central",
    "destCode": "MAS",
    "dest": "Chennai Central"
  },
  {
    "number": "22308",
    "name": "Bikaner-Howrah SF Express",
    "sourceCode": "BKN",
    "source": "Bikaner Jn",
    "destCode": "HWH",
    "dest": "Howrah Jn"
  },
  {
    "number": "22403",
    "name": "Puducherry-New Delhi SF Express",
    "sourceCode": "PDY",
    "source": "Puducherry",
    "destCode": "NDLS",
    "dest": "New Delhi"
  },
  {
    "number": "22404",
    "name": "New Delhi-Puducherry SF Exp",
    "sourceCode": "NDLS",
    "source": "New Delhi",
    "destCode": "PDY",
    "dest": "Puducherry"
  },
  {
    "number": "22405",
    "name": "Bhagalpur - Delhi AnandVihar T. Garib Rath Express",
    "sourceCode": "BGP",
    "source": "Bhagalpur",
    "destCode": "ANVT",
    "dest": "Anand Vihar Trm"
  },
  {
    "number": "22406",
    "name": "AnandVihar Terminal-Bhagalpur Garib Rath",
    "sourceCode": "ANVT",
    "source": "Anand Vihar Trm",
    "destCode": "BGP",
    "dest": "Bhagalpur"
  },
  {
    "number": "22407",
    "name": "Varanasi-Delhi Anand Vihar Terminus Garib Rath",
    "sourceCode": "BSB",
    "source": "Varanasi Jn",
    "destCode": "ANVT",
    "dest": "Anand Vihar Trm"
  },
  {
    "number": "22408",
    "name": "Delhi Anand Vihar Terminus-Varanasi Garib Rath",
    "sourceCode": "ANVT",
    "source": "Anand Vihar Trm",
    "destCode": "BSB",
    "dest": "Varanasi Jn"
  },
  {
    "number": "22409",
    "name": "Sasaram-Anand ViharT Delhi GariRath Express",
    "sourceCode": "SSM",
    "source": "Sasaram",
    "destCode": "ANVT",
    "dest": "Anand Vihar Trm"
  },
  {
    "number": "22410",
    "name": "Anand ViharT Delhi-Sasaram GaribRath Express",
    "sourceCode": "ANVT",
    "source": "Anand Vihar Trm",
    "destCode": "SSM",
    "dest": "Sasaram"
  },
  {
    "number": "22423",
    "name": "Guwahati-New Delhi Rajdhani Express",
    "sourceCode": "GHY",
    "source": "Guwahati",
    "destCode": "NDLS",
    "dest": "New Delhi"
  },
  {
    "number": "22424",
    "name": "New Delhi-Guwahati Rajdhani Express",
    "sourceCode": "NDLS",
    "source": "New Delhi",
    "destCode": "GHY",
    "dest": "Guwahati"
  },
  {
    "number": "22447",
    "name": "Khajuraho Nizamuddin Express",
    "sourceCode": "KURJ",
    "source": "Khajuraho",
    "destCode": "NZM",
    "dest": "Delhi H Nizamuddin"
  },
  {
    "number": "22463",
    "name": "Rajasthan Sampark Kranti Express",
    "sourceCode": "MTD",
    "source": "Merta Road Jn",
    "destCode": "BKN",
    "dest": "Bikaner Jn"
  },
  {
    "number": "22464",
    "name": "Rajasthan Sampark Kranti Express",
    "sourceCode": "BKN",
    "source": "Bikaner Jn",
    "destCode": "DEE",
    "dest": "Delhi Sarai Rohilla"
  },
  {
    "number": "22471",
    "name": "Bikaner - Delhi Sarai Rohilla SF Intercity Express",
    "sourceCode": "BKN",
    "source": "Bikaner Jn",
    "destCode": "DEE",
    "dest": "Delhi Sarai Rohilla"
  },
  {
    "number": "22472",
    "name": "Delhi Sarai Rohilla - Bikaner SF Intercity Express",
    "sourceCode": "DEE",
    "source": "Delhi Sarai Rohilla",
    "destCode": "BKN",
    "dest": "Bikaner Jn"
  },
  {
    "number": "22481",
    "name": "Jodhpur-Delhi Sarai Rohilla Express",
    "sourceCode": "JU",
    "source": "Jodhpur Jn",
    "destCode": "DEE",
    "dest": "Delhi Sarai Rohilla"
  },
  {
    "number": "22482",
    "name": "Delhi Sarai Rohilla-Jodhpur Express",
    "sourceCode": "DEE",
    "source": "Delhi Sarai Rohilla",
    "destCode": "JU",
    "dest": "Jodhpur Jn"
  },
  {
    "number": "22601",
    "name": "CHENNAI CENT - SAINAGAR SHIRDI SF Exp",
    "sourceCode": "MAS",
    "source": "Chennai Central",
    "destCode": "SNSI",
    "dest": "Sainagar Shirdi"
  },
  {
    "number": "22602",
    "name": "SAINAGAR SHIRDI - CHENNAI CENT SF Exp",
    "sourceCode": "SNSI",
    "source": "Sainagar Shirdi",
    "destCode": "MAS",
    "dest": "Chennai Central"
  },
  {
    "number": "22607",
    "name": "ERNAKULAM - BANGALORE Weekly SF Exp",
    "sourceCode": "ERS",
    "source": "Ernakulam Jn",
    "destCode": "SBC",
    "dest": "Bangalore City Jn"
  },
  {
    "number": "22608",
    "name": "BANGALORE - ERNAKULAM Weekly SF Exp",
    "sourceCode": "SBC",
    "source": "Bangalore City Jn",
    "destCode": "ERS",
    "dest": "Ernakulam Jn"
  },
  {
    "number": "22609",
    "name": "Mangalore - Palghat Intercity Express",
    "sourceCode": "MAQ",
    "source": "Mangalore Cntl",
    "destCode": "PGT",
    "dest": "Palakkad"
  },
  {
    "number": "22610",
    "name": "Palghat Mangalore Intercity",
    "sourceCode": "PGT",
    "source": "Palakkad",
    "destCode": "MAQ",
    "dest": "Mangalore Cntl"
  },
  {
    "number": "22625",
    "name": "Chennai Tirupati SF Express",
    "sourceCode": "MAS",
    "source": "Chennai Central",
    "destCode": "TPTY",
    "dest": "Tirupati"
  },
  {
    "number": "22626",
    "name": "Tirupati Chennai SF Express",
    "sourceCode": "TPTY",
    "source": "Tirupati",
    "destCode": "MAS",
    "dest": "Chennai Central"
  },
  {
    "number": "22639",
    "name": "Alleppey Chennai Express",
    "sourceCode": "ALLP",
    "source": "Alleppey",
    "destCode": "MAS",
    "dest": "Chennai Central"
  },
  {
    "number": "22640",
    "name": "Chennai Alleppey Express",
    "sourceCode": "MAS",
    "source": "Chennai Central",
    "destCode": "ALLP",
    "dest": "Alleppey"
  },
  {
    "number": "22659",
    "name": "Kochuveli Dehradun Express",
    "sourceCode": "KCVL",
    "source": "Kochuveli",
    "destCode": "DDN",
    "dest": "Dehradun"
  },
  {
    "number": "22660",
    "name": "Dehradun Kochuveli Express",
    "sourceCode": "DDN",
    "source": "Dehradun",
    "destCode": "KCVL",
    "dest": "Kochuveli"
  },
  {
    "number": "22681",
    "name": "MYSORE - CHENNAI Weekly SF Exp",
    "sourceCode": "MYS",
    "source": "Mysore Jn",
    "destCode": "MAS",
    "dest": "Chennai Central"
  },
  {
    "number": "22682",
    "name": "CHENNAI - MYSORE Weekly SF Exp",
    "sourceCode": "MAS",
    "source": "Chennai Central",
    "destCode": "MYS",
    "dest": "Mysore Jn"
  },
  {
    "number": "22688",
    "name": "Chandigarh Chennai Express",
    "sourceCode": "CDG",
    "source": "Chandigarh",
    "destCode": "MAS",
    "dest": "Chennai Central"
  },
  {
    "number": "22811",
    "name": "Bhubaneshwar-New Delhi Rajdhani Express",
    "sourceCode": "BBS",
    "source": "Bhubaneswar",
    "destCode": "NDLS",
    "dest": "New Delhi"
  },
  {
    "number": "22812",
    "name": "New Delhi-Bhubaneswar Rajdhani Express",
    "sourceCode": "NDLS",
    "source": "New Delhi",
    "destCode": "BBS",
    "dest": "Bhubaneswar"
  },
  {
    "number": "22815",
    "name": "Bilaspur-Ernakulam Express",
    "sourceCode": "BSP",
    "source": "Bilaspur Jn",
    "destCode": "ERS",
    "dest": "Ernakulam Jn"
  },
  {
    "number": "22816",
    "name": "Ernakulam-Bilaspur Express",
    "sourceCode": "ERS",
    "source": "Ernakulam Jn",
    "destCode": "BSP",
    "dest": "Bilaspur Jn"
  },
  {
    "number": "22823",
    "name": "BHUBANESWAR - NEW DELHI RAJDHANI Express",
    "sourceCode": "BBS",
    "source": "Bhubaneswar",
    "destCode": "NDLS",
    "dest": "New Delhi"
  },
  {
    "number": "22824",
    "name": "NEW DELHI - BHUBANESWAR Rajdhani Exp (Via Bokaro)",
    "sourceCode": "NDLS",
    "source": "New Delhi",
    "destCode": "BBS",
    "dest": "Bhubaneswar"
  },
  {
    "number": "22835",
    "name": "Shalimar-Puri Express",
    "sourceCode": "SHM",
    "source": "Kolkata Shalimar",
    "destCode": "PURI",
    "dest": "Puri"
  },
  {
    "number": "22836",
    "name": "Puri-Shalimar weekly superfast express",
    "sourceCode": "PURI",
    "source": "Puri",
    "destCode": "SHM",
    "dest": "Kolkata Shalimar"
  },
  {
    "number": "22845",
    "name": "PUNE - HATIA SF Exp",
    "sourceCode": "PUNE",
    "source": "Pune Jn",
    "destCode": "HTE",
    "dest": "Hatia"
  },
  {
    "number": "22846",
    "name": "HATIA - PUNE SF Exp",
    "sourceCode": "HTE",
    "source": "Hatia",
    "destCode": "PUNE",
    "dest": "Pune Jn"
  },
  {
    "number": "22853",
    "name": "Kolkata Shalimar-Visakhapatnam Superfast express",
    "sourceCode": "SHM",
    "source": "Kolkata Shalimar",
    "destCode": "VSKP",
    "dest": "Vishakapatnam"
  },
  {
    "number": "22854",
    "name": "Visakhapatnam-Shalimar Express",
    "sourceCode": "VSKP",
    "source": "Vishakapatnam",
    "destCode": "SHM",
    "dest": "Kolkata Shalimar"
  },
  {
    "number": "22855",
    "name": "Santragachi-Tirupati Superfast Express",
    "sourceCode": "SRC",
    "source": "Santragachi Jn",
    "destCode": "TPTY",
    "dest": "Tirupati Main"
  },
  {
    "number": "22856",
    "name": "TirupatiSantragachi Superfast Express",
    "sourceCode": "TPTY",
    "source": "Tirupati Main",
    "destCode": "SRC",
    "dest": "Santragachi Jn"
  },
  {
    "number": "22861",
    "name": "Rajya Rani Express",
    "sourceCode": "SHM",
    "source": "Kolkata Shalimar",
    "destCode": "BQA",
    "dest": "Bankura"
  },
  {
    "number": "22862",
    "name": "Rajya Rani Express",
    "sourceCode": "BQA",
    "source": "Bankura",
    "destCode": "SHM",
    "dest": "Kolkata Shalimar"
  },
  {
    "number": "22905",
    "name": "Okha Howrah Triweekly SF Express",
    "sourceCode": "OKHA",
    "source": "Okha",
    "destCode": "HWH",
    "dest": "Howrah Jn"
  },
  {
    "number": "22926",
    "name": "Paschim Express",
    "sourceCode": "KLK",
    "source": "Kalka",
    "destCode": "BDTS",
    "dest": "Mumbai Bandra Terminus"
  },
  {
    "number": "22996",
    "name": "Ajmer Bandra SF Express",
    "sourceCode": "AII",
    "source": "Ajmer Jn",
    "destCode": "BDTS",
    "dest": "Mumbai Bandra Terminus"
  },
  {
    "number": "23010",
    "name": "Doon Express",
    "sourceCode": "KTW",
    "source": "Kotdwara",
    "destCode": "HWH",
    "dest": "Howrah Jn"
  },
  {
    "number": "23111",
    "name": "Danapur Express",
    "sourceCode": "GRD",
    "source": "Giridih",
    "destCode": "DNR",
    "dest": "Danapur"
  },
  {
    "number": "23112",
    "name": "Giridih Kolkata Express",
    "sourceCode": "GRD",
    "source": "Giridih",
    "destCode": "KOAA",
    "dest": "Kolkata Chitpur"
  },
  {
    "number": "23142",
    "name": "Teesta Torsa Express",
    "sourceCode": "HDB",
    "source": "Haldibari",
    "destCode": "SDAH",
    "dest": "Kolkata Sealdah"
  },
  {
    "number": "23154",
    "name": "Gour Express",
    "sourceCode": "BLGT",
    "source": "Balurghat",
    "destCode": "SDAH",
    "dest": "Kolkata Sealdah"
  },
  {
    "number": "23225",
    "name": "InterCity Link Express",
    "sourceCode": "SHC",
    "source": "Saharsa Jn",
    "destCode": "DNR",
    "dest": "Danapur"
  },
  {
    "number": "23226",
    "name": "InterCity Link Express",
    "sourceCode": "DNR",
    "source": "Danapur",
    "destCode": "SHC",
    "dest": "Saharsa Jn"
  },
  {
    "number": "23347",
    "name": "Palamu Express",
    "sourceCode": "SGRL",
    "source": "Singrauli",
    "destCode": "PNBE",
    "dest": "Patna Jn"
  },
  {
    "number": "23348",
    "name": "Palamau Express (Slip)",
    "sourceCode": "GHD",
    "source": "Garwa Road",
    "destCode": "SGRL",
    "dest": "Singrauli"
  },
  {
    "number": "24033",
    "name": "Jammu Mail",
    "sourceCode": "DLI",
    "source": "Old Delhi",
    "destCode": "HSX",
    "dest": "Hoshiarpur"
  },
  {
    "number": "24034",
    "name": "Jammu Mail",
    "sourceCode": "HSX",
    "source": "Hoshiarpur",
    "destCode": "DLI",
    "dest": "Old Delhi"
  },
  {
    "number": "24042",
    "name": "KOTDWAR - NAJIBABAD Mussoorie Exp",
    "sourceCode": "KTW",
    "source": "Kotdwara",
    "destCode": "DEE",
    "dest": "Delhi Sarai Rohilla"
  },
  {
    "number": "24227",
    "name": "Varuna Express",
    "sourceCode": "BSB",
    "source": "Varanasi Jn",
    "destCode": "CNB",
    "dest": "Kanpur Central"
  },
  {
    "number": "24228",
    "name": "Varuna Express",
    "sourceCode": "CNB",
    "source": "Kanpur Central",
    "destCode": "BSB",
    "dest": "Varanasi Jn"
  },
  {
    "number": "24369",
    "name": "Triveni Express",
    "sourceCode": "SKTN",
    "source": "Shakti Nagar",
    "destCode": "BE",
    "dest": "Bareilly"
  },
  {
    "number": "24370",
    "name": "Triveni Express",
    "sourceCode": "BE",
    "source": "Bareilly",
    "destCode": "SKTN",
    "dest": "Shakti Nagar"
  },
  {
    "number": "24512",
    "name": "Khurja Allahabad Link Express",
    "sourceCode": "BSC",
    "source": "Bulandshahr",
    "destCode": "ALD",
    "dest": "Allahabad Jn"
  },
  {
    "number": "24887",
    "name": "Haridwar-Barmer Link Express",
    "sourceCode": "HW",
    "source": "Haridwar Jn",
    "destCode": "BME",
    "dest": "Barmer"
  },
  {
    "number": "24888",
    "name": "Barmer-Haridwar Link Express",
    "sourceCode": "BME",
    "source": "Barmer",
    "destCode": "HW",
    "dest": "Haridwar Jn"
  },
  {
    "number": "25014",
    "name": "Corbett Park Link Express",
    "sourceCode": "RMR",
    "source": "Ramnagar",
    "destCode": "DLI",
    "dest": "Old Delhi"
  },
  {
    "number": "25036",
    "name": "Ramnagar Delhi Link Express",
    "sourceCode": "RMR",
    "source": "Ramnagar",
    "destCode": "DLI",
    "dest": "Old Delhi"
  },
  {
    "number": "25201",
    "name": "Sugauli Narkatiaganj InterCity Link Express",
    "sourceCode": "SGL",
    "source": "Sagauli Jn",
    "destCode": "NKE",
    "dest": "Narkatiaganj Jn"
  },
  {
    "number": "25202",
    "name": "Narkatiaganj Sugauli InterCity Link Express",
    "sourceCode": "NKE",
    "source": "Narkatiaganj Jn",
    "destCode": "SGL",
    "dest": "Sagauli Jn"
  },
  {
    "number": "25610",
    "name": "Jivachh Link Express",
    "sourceCode": "DBG",
    "source": "Darbhanga Jn",
    "destCode": "GHY",
    "dest": "Guwahati"
  },
  {
    "number": "25631",
    "name": "Bikaner Guwahati Express",
    "sourceCode": "BKN",
    "source": "Bikaner Jn",
    "destCode": "GHY",
    "dest": "Guwahati"
  },
  {
    "number": "25715",
    "name": "Radhikapur Delhi Link Express",
    "sourceCode": "RDP",
    "source": "Radhikapur",
    "destCode": "DLI",
    "dest": "Old Delhi"
  },
  {
    "number": "25716",
    "name": "Garib Nawaz Express",
    "sourceCode": "KIR",
    "source": "Katihar Jn",
    "destCode": "RDP",
    "dest": "Radhikapur"
  },
  {
    "number": "28181",
    "name": "Barauni-Katihar Slip Express",
    "sourceCode": "BJU",
    "source": "Barauni Jn",
    "destCode": "KIR",
    "dest": "Katihar Jn"
  },
  {
    "number": "28182",
    "name": "Katihar-Tatanagar Link Express",
    "sourceCode": "KIR",
    "source": "Katihar Jn",
    "destCode": "TATA",
    "dest": "Tatanagar Jn"
  },
  {
    "number": "28242",
    "name": "Chirmiri Durg Express Cum Pass",
    "sourceCode": "CHRM",
    "source": "Chirmiri",
    "destCode": "DURG",
    "dest": "Durg"
  },
  {
    "number": "28624",
    "name": "Barkakana Rajendranagar Slip Express",
    "sourceCode": "BRKA",
    "source": "Barkakana",
    "destCode": "RJPB",
    "dest": "Rajendra Nagar Bihar"
  },
  {
    "number": "29019",
    "name": "Nimach Kota Link Exp",
    "sourceCode": "NMH",
    "source": "Nimach",
    "destCode": "MTC",
    "dest": "Meerut City"
  },
  {
    "number": "29020",
    "name": "Dehradun Express Slip",
    "sourceCode": "MTC",
    "source": "Meerut City",
    "destCode": "NMH",
    "dest": "Nimach"
  },
  {
    "number": "29059",
    "name": "Hapa InterCity Express",
    "sourceCode": "ST",
    "source": "Surat",
    "destCode": "HAPA",
    "dest": "Hapa"
  },
  {
    "number": "29060",
    "name": "Surat InterCity Express",
    "sourceCode": "HAPA",
    "source": "Hapa",
    "destCode": "ST",
    "dest": "Surat"
  },
  {
    "number": "52228",
    "name": "Tanakpur Aishbagh Express",
    "sourceCode": "TPU",
    "source": "Tanakpur",
    "destCode": "ASH",
    "dest": "Aishbagh"
  },
  {
    "number": "52451",
    "name": "Shivalik Deluxe Express",
    "sourceCode": "KLK",
    "source": "Kalka",
    "destCode": "SML",
    "dest": "Shimla"
  },
  {
    "number": "52452",
    "name": "Shivalik Deluxe Express",
    "sourceCode": "SML",
    "source": "Shimla",
    "destCode": "KLK",
    "dest": "Kalka"
  },
  {
    "number": "52453",
    "name": "Kalka Shimla Express",
    "sourceCode": "KLK",
    "source": "Kalka",
    "destCode": "SML",
    "dest": "Shimla"
  },
  {
    "number": "52454",
    "name": "Shimla Kalka Express",
    "sourceCode": "SML",
    "source": "Shimla",
    "destCode": "KLK",
    "dest": "Kalka"
  },
  {
    "number": "57140",
    "name": "Link Secunderabad Express",
    "sourceCode": "MUGR",
    "source": "Manuguru",
    "destCode": "SC",
    "dest": "Secunderabad Jn"
  },
  {
    "number": "59307",
    "name": "Indore Jaipur link Express",
    "sourceCode": "INDB",
    "source": "Indore Jn Bg",
    "destCode": "JP",
    "dest": "Jaipur"
  },
  {
    "number": "83112",
    "name": "Danapur Giridih Express",
    "sourceCode": "DNR",
    "source": "Danapur",
    "destCode": "GRD",
    "dest": "Giridih"
  },
  {
    "number": "84369",
    "name": "Tribeni Link Express",
    "sourceCode": "BRWD",
    "source": "Barwadih Jn",
    "destCode": "BE",
    "dest": "Bareilly"
  }
];

const TRAINS_MAP = {};
TRAINS_DB.forEach(t => TRAINS_MAP[t.number] = t);
