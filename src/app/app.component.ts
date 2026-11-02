import { Component } from '@angular/core';
import{empArr, studentArr, productArr, courseArr, bookArr, customerArr, orderArr, movieArr, teacherArr, vehicleArr, hotelArr} from '../app/const/tables'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'taskOfCards';
  empArr = empArr;
  studentArr = studentArr;
  productArr = productArr;
  courseArr = courseArr;
  bookArr = bookArr;
  customerArr = customerArr;
  orderArr = orderArr;
  movieArr = movieArr;
  teacherArr = teacherArr;
  vehicleArr = vehicleArr;
  hotelArr = hotelArr;
}
