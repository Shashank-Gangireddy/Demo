import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Trainers } from './trainersList';

@Injectable({
  providedIn: 'root'
})
export class TrainermanagementService {

  constructor(private http : HttpClient) { }
  
  private url : string = "http://localhost:8080/Fms/api";

  addTrainer(trainer : Trainers)
  {
    return this.http.post<any>(this.url + '/Trainer' , trainer);
  }

  editTrainer ( trainer : Trainers)
  {
    return this.http.put<any>(this.url + '/TrUpdate',trainer);
  }

  deleteTrainer (employeeId : number)
  {
    return this.http.delete<any>(this.url + '/TrRemove?id='+ employeeId);
  }
}
