import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionFixComponent } from './action-fix.component';

describe('ActionFixComponent', () => {
  let component: ActionFixComponent;
  let fixture: ComponentFixture<ActionFixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActionFixComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ActionFixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
