import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriminalLawyerComponent } from './criminal-lawyer.component';

describe('CriminalLawyerComponent', () => {
  let component: CriminalLawyerComponent;
  let fixture: ComponentFixture<CriminalLawyerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriminalLawyerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CriminalLawyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
