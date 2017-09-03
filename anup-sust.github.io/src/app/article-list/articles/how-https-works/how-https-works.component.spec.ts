import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HowHttpsWorksComponent } from './how-https-works.component';

describe('HowHttpsWorksComponent', () => {
  let component: HowHttpsWorksComponent;
  let fixture: ComponentFixture<HowHttpsWorksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HowHttpsWorksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HowHttpsWorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
