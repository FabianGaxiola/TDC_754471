import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListPanel } from './list-panel';

describe('ListPanel', () => {
  let component: ListPanel;
  let fixture: ComponentFixture<ListPanel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListPanel],
    }).compileComponents();

    fixture = TestBed.createComponent(ListPanel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
