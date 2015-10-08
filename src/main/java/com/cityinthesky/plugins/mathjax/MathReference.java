package com.cityinthesky.plugins.mathjax;

import com.atlassian.confluence.content.render.xhtml.ConversionContext;
import com.atlassian.confluence.macro.Macro;
import com.atlassian.confluence.macro.MacroExecutionException;
import com.atlassian.confluence.renderer.radeox.macros.MacroUtils;
import com.atlassian.confluence.util.velocity.VelocityUtils;
import com.atlassian.renderer.v2.components.HtmlEscaper;
import java.util.Map;

public class MathReference implements Macro
{
    private static final String MACRO_BODY_TEMPLATE = "templates/mathreference.vm";

    public MathReference()
    {
    }

    @Override
    public BodyType getBodyType()
    {
        return BodyType.NONE;
    }

    @Override
    public OutputType getOutputType()
    {
        return OutputType.INLINE;
    }

    @Override
    public String execute(Map<String, String> parameters, String bodyContent, ConversionContext conversionContext)
            throws MacroExecutionException
    {
        bodyContent = parameters.get("label");

        Map<String, Object> context = MacroUtils.defaultVelocityContext();

        context.put("body", HtmlEscaper.escapeAll(bodyContent, true));

        return VelocityUtils.getRenderedTemplate(MACRO_BODY_TEMPLATE, context);
    }
}
