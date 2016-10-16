module ApplicationHelper
  def render_component(component, params={})
    @context ||= begin
      global = <<-JS
        var global = global || this;
        var window = window || global;
      JS
      source = asset_contents('server.js')
      ExecJS.compile(global + source)
    end

    content_tag :div, class: 'component', data: {component: component, params: params.to_json} do
      @context.call('global.render', component, params).html_safe
    end
  end

  def asset_contents(javascript_asset)
    if Rails.env.production? # assumes precompiled assets in production
      full_path = Rails.root.join('public').to_s + asset_path(javascript_asset)
      File.read(full_path)
    else
      Rails.application.assets[javascript_asset].to_s
    end
  end
end
