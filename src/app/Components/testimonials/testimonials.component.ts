import { Component, OnInit } from '@angular/core';
import { Itestimonial } from 'src/app/ViewModel/Interfaces/itestimonial';
import { TestimonialService } from 'src/app/Services/Testimonials/testimonial.service';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit {
  PrdList:Itestimonial[];
  constructor(private _ApiTestimonialServ:TestimonialService) 
  {
    
  }

  ngOnInit(): void {
    /*this._ApiTestimonialServ.getALLPersons().subscribe(
      (data)=>{console.log(data)},
      (err)=>{console.log(err)}
      )*/
      this._ApiTestimonialServ.getALLPersons().subscribe(
        res=>this.PrdList=res.data,
        err=>console.log(err)
      )
  }

}
