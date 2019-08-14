const validationPlugin = {
  install(Vue) {
    Vue.mixin({
      beforeCreate() {
        if (!this.$options.validations) return;
        const $v = () => {
          let valid = true;
          const errors = {};
          const rules = this.$options.validations;
          Object.keys(rules).forEach((key) => {
            const rule = rules[key];
            const val = this[key];
            const result = rule.validate(val);
            if (!result) {
              valid = false;
              errors[key] = rule.message(key, val);
            }
          });
          return { valid, errors };
        };
        this.$options.computed = {
          ...this.$options.computed,
          $v
        };
      }
    });
  }
};

export default validationPlugin;
