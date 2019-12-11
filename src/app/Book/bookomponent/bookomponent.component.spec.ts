import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookomponentComponent } from './bookomponent.component';

describe('BookomponentComponent', () => {
  let component: BookomponentComponent;
  let fixture: ComponentFixture<BookomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
