import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsheComponent } from './ashe.component';

describe('AsheComponent', () => {
  let component: AsheComponent;
  let fixture: ComponentFixture<AsheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
