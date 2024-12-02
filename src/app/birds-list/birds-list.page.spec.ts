import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BirdsListPage } from './birds-list.page';

describe('BirdsListPage', () => {
  let component: BirdsListPage;
  let fixture: ComponentFixture<BirdsListPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BirdsListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
