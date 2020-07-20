import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineInvitationsComponent } from './online-invitations.component';

describe('OnlineInvitationsComponent', () => {
  let component: OnlineInvitationsComponent;
  let fixture: ComponentFixture<OnlineInvitationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlineInvitationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineInvitationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
