export interface IempArr{
 empId: number;
 empName: string;
 designation: string;
 department: string;
 salary: number;
 isPermanent: boolean;
 email: string;
 contact: number;
}

export interface IstudentArr{
 rollNo: number;
 name: string;
 course: string;
 year: string;
 percentage: number;
 isPassed: boolean;
 email: string;
 contact: number;
}

export interface IproductArr {
  prodId: number;
  prodName: string;
  category: string;
  price: number;
  stock: number;
  isAvailable: boolean;
  brand: string;
}

export interface IcourseArr {
  courseId: number;
  courseName: string;
  duration: string;
  fees: number;
  mode: string;
  isActive: boolean;
  trainer: string;
}

export interface IbookArr {
  bookId: number;
  title: string;
  author: string;
  price: number;
  pages: number;
  isAvailable: boolean;
  genre: string;
}

export interface Icustomer {
  custId: number;
  name: string;
  city: string;
  age: number;
  email: string;
  isPrime: boolean;
  contact: number;
}

export interface IorderArr {
  orderId: number;
  customerName: string;
  product: string;
  amount: number;
  status: string;
  date: string;
}

export interface ImovieArr {
  movieId: number;
  title: string;
  genre: string;
  rating: number;
  releaseYear: number;
  isHit: boolean;
  language: string;
}

export interface IteacherArr {
  teacherId: number;
  name: string;
  subject: string;
  experience: number;
  salary: number;
  isFullTime: boolean;
  email: string;
}

export interface IvehicleArr {
  vehicleId: number;
  brand: string;
  model: string;
  type: string;
  price: number;
  isAvailable: boolean;
  fuel: string;
}

export interface IhotelArr {
  hotelId: number;
  name: string;
  city: string;
  rating: number;
  pricePerNight: number;
  isAvailable: boolean;
  rooms: number;
  contact: number;
}

export interface IdoctorArr {
  doctorId: number;
  name: string;
  specialization: string;
  experience: number;
  fees: number;
  isAvailable: boolean;
  hospital: string;
  email: string;
}

export interface IrestaurantArr {
  restId: number;
  name: string;
  cuisine: string;
  city: string;
  rating: number;
  avgCost: number;
  isOpen: boolean;
  isVeg: boolean;
}

export interface IaccountArr {
  accNo: number;
  holderName: string;
  bank: string;
  accType: string;
  balance: number;
  isActive: boolean;
  branch: string;
}

export interface IflightArr {
  flightId: string;
  airline: string;
  from: string;
  to: string;
  price: number;
  duration: string;
  isDirect: boolean;
  seats: number;
}

export interface IprojectArr {
  projectId: number;
  title: string;
  client: string;
  budget: number;
  status: string;
  teamSize: number;
  isCritical: boolean;
  deadline: string;
}

export interface IcityArr {
  cityId: number;
  name: string;
  state: string;
  population: number;
  isMetro: boolean;
  pincode: number;
  famousFor: string;
}

export interface ImobileArr {
  mobileId: number;
  brand: string;
  model: string;
  price: number;
  ram: number;
  storage: number;
  isAvailable: boolean;
  os: string;
}

export interface ImemberArr {
  memberId: number;
  name: string;
  age: number;
  membership: string;
  booksIssued: number;
  isActive: boolean;
  joinDate: string;
  email: string;
}

export interface IgymArr {
  gymId: number;
  name: string;
  age: number;
  plan: string;
  fees: number;
  trainer: string;
  isActive: boolean;
  weight: number;
}

export interface IcarArr {
  carId: number;
  brand: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  fuel: string;
  isAvailable: boolean;
}

export interface IcollegeArr {
  collegeId: number;
  name: string;
  city: string;
  type: string;
  established: number;
  fees: number;
  rating: number;
  isAutonomous: boolean;
}

export interface IcricketArr {
  playerId: number;
  name: string;
  role: string;
  team: string;
  matches: number;
  runs: number;
  isActive: boolean;
  jerseyNo: number;
}

export interface IsubjectArr {
  subjectId: number;
  name: string;
  code: string;
  credits: number;
  semester: number;
  isElective: boolean;
  faculty: string;
}

export interface IlaptopArr {
  laptopId: number;
  brand: string;
  model: string;
  price: number;
  ram: number;
  processor: string;
  isAvailable: boolean;
  warranty: number;
}

export interface IapplicationArr {
  appId: number;
  name: string;
  brand: string;
  price: number;
  warranty: number;
  energyRating: number;
  isAvailable: boolean;
  category: string;
}

export interface IeventArr {
  eventId: number;
  title: string;
  city: string;
  date: string;
  ticketPrice: number;
  seats: number;
  isSoldOut: boolean;
  organizer: string;
}

export interface IcompanyArr {
  companyId: number;
  name: string;
  headquarters: string;
  employees: number;
  founded: number;
  revenueCr: number;
  isPublic: boolean;
  sector: string;
}

export interface IgroceryArr {
  itemId: number;
  name: string;
  category: string;
  price: number;
  unit: string;
  stock: number;
  isOrganic: boolean;
  brand: string;
}

export interface IhospitalArr {
  hospitalId: number;
  name: string;
  city: string;
  beds: number;
  type: string;
  rating: number;
  hasEmergency: boolean;
  established: number;
}

export interface IsongArr {
  songId: number;
  title: string;
  artist: string;
  album: string;
  duration: number;
  year: number;
  genre: string;
  isPopular: boolean;
}

export interface IbikeArr {
  bikeId: number;
  brand: string;
  model: string;
  price: number;
  cc: number;
  mileage: number;
  isAvailable: boolean;
  color: string;
}

export interface IplaceArr {
  placeId: number;
  name: string;
  city: string;
  state: string;
  entryFee: number;
  rating: number;
  bestSeason: string;
  isUnesco: boolean;
}

export interface ItransactionArr {
  txnId: string;
  accountHolder: string;
  type: string;
  amount: number;
  mode: string;
  status: string;
  date: string;
}

export interface ItaskArr {
  taskId: number;
  title: string;
  assignedTo: string;
  priority: string;
  status: string;
  dueDate: string;
  isCompleted: boolean;
}

