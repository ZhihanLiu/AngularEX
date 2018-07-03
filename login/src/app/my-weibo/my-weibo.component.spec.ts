import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyWeiboComponent } from './my-weibo.component';

describe('MyWeiboComponent', () => {
  let component: MyWeiboComponent;
  let fixture: ComponentFixture<MyWeiboComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyWeiboComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyWeiboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
