import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnsubscribPocComponent } from './unsubscrib-poc.component';

describe('UnsubscribPocComponent', () => {
  let component: UnsubscribPocComponent;
  let fixture: ComponentFixture<UnsubscribPocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnsubscribPocComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnsubscribPocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
