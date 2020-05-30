import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebcrowlerComponent } from './webcrowler.component';

describe('WebcrowlerComponent', () => {
  let component: WebcrowlerComponent;
  let fixture: ComponentFixture<WebcrowlerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebcrowlerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebcrowlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
