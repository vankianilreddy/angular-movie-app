import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeelGoodComponent } from './feel-good.component';

describe('FeelGoodComponent', () => {
  let component: FeelGoodComponent;
  let fixture: ComponentFixture<FeelGoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeelGoodComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FeelGoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
