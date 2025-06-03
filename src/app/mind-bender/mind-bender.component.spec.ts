import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MindBenderComponent } from './mind-bender.component';

describe('MindBenderComponent', () => {
  let component: MindBenderComponent;
  let fixture: ComponentFixture<MindBenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MindBenderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MindBenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
