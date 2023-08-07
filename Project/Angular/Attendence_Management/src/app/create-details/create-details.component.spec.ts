import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDetailsComponent } from './create-details.component';

describe('CreateDetailsComponent', () => {
  let component: CreateDetailsComponent;
  let fixture: ComponentFixture<CreateDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateDetailsComponent]
    });
    fixture = TestBed.createComponent(CreateDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
