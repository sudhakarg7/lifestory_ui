import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LifestoryqustionsPage } from './lifestoryqustions.page';

describe('LifestoryqustionsPage', () => {
  let component: LifestoryqustionsPage;
  let fixture: ComponentFixture<LifestoryqustionsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifestoryqustionsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LifestoryqustionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
