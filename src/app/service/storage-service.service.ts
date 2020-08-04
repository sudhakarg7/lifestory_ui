import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageServiceService {

  public storageName = 'life_story';

  public data: any = {};
  constructor() { this.loadStorage(); }

  loadStorage() {
    const temp = localStorage.getItem(this.storageName);

    if (temp === '' || temp === undefined || temp === null) {
      this.data = {};

    } else {

      this.data = JSON.parse(temp);
    }

  }

  setData(Obj: any) {
    Object.keys(Obj).forEach((res) => {

      this.data[res] = Obj[res];

    });

    this.updateStorage();
  }

  updateStorage() {
    localStorage.setItem(this.storageName, JSON.stringify(this.data));

  }

  get(obj: string = '') {
    if (obj === '') {
      return this.data;
    } else {

      return this.data[obj];

    }
  }

  remove(obj: string = '') {
    delete this.data[obj];
    this.updateStorage();
  }

  removeAll() {
    this.data = {};
    this.updateStorage();
  }
}
