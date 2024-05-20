import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InspectionChecklistComponent } from './inspection-checklist.component';

describe('InspectionChecklistComponent', () => {
  let component: InspectionChecklistComponent;
  let fixture: ComponentFixture<InspectionChecklistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InspectionChecklistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InspectionChecklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
