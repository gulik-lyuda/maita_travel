import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionMaitaTravelComponent } from './section-maita-travel.component';

describe('SectionMaitaTravelComponent', () => {
  let component: SectionMaitaTravelComponent;
  let fixture: ComponentFixture<SectionMaitaTravelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionMaitaTravelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionMaitaTravelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
