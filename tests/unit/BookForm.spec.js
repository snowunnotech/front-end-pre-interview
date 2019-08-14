import { mount, createLocalVue } from '@vue/test-utils';
import BookForm from '../../src/components/books/BookForm';
import vueValidation from '../../src/vue-utils/plugins/validation';

describe('validation plugin test', () => {
  const localVue = createLocalVue();
  localVue.use(vueValidation);
  test('should init $v', () => {
    const { vm } = mount(BookForm, { localVue });
    expect(vm.$v).not.toBeUndefined();
    expect(typeof vm.$v).toBe('object');
    expect(vm.$v.valid).toBe(false);
  });
  test('should validation work', () => {
    const wrapper = mount(BookForm, { localVue });
    wrapper.setData({ author: 'hi' });
    wrapper.setData({ title: 'hi' });
    expect(wrapper.vm.$v.errors.author).toBeUndefined();
    expect(wrapper.vm.$v.errors.title).toBeUndefined();
    expect(wrapper.vm.$v.errors).toMatchObject({
      description: 'description is required',
      publicationDate: 'invalid publication date'
    });
    wrapper.setData({ description: 'good' });
    wrapper.setData({ publicationDate: '2018-01-01' });
    expect(wrapper.vm.$v.valid).toBe(true);
  });
});
