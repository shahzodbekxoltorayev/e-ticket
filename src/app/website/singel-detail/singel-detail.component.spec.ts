import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingelDetailComponent } from './singel-detail.component';

describe('SingelDetailComponent', () => {
  let component: SingelDetailComponent;
  let fixture: ComponentFixture<SingelDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingelDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingelDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
