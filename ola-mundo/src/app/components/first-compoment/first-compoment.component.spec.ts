import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstCompomentComponent } from './first-compoment.component';

describe('FirstCompomentComponent', () => {
  let component: FirstCompomentComponent;
  let fixture: ComponentFixture<FirstCompomentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirstCompomentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FirstCompomentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
