import { useEffect, useRef } from 'react';

const TechCursor = () => {
  const animationRef = useRef(null);
  const hoveredElements = useRef(new Set());

  useEffect(() => {
    // Check if cursor already exists
    if (document.querySelector('.custom-cursor')) {
      console.log('Cursor already exists, skipping...');
      return;
    }

    // Create cursor elements with inline styles
    const cursor = document.createElement('div');
    const cursorDot = document.createElement('div');
    
    // Main cursor styles - optimized for performance
    Object.assign(cursor.style, {
      width: '24px',
      height: '24px',
      border: '2px solid #6ac1ff',
      borderRadius: '50%',
      position: 'fixed',
      pointerEvents: 'none',
      zIndex: '999999',
      background: 'rgba(106, 193, 255, 0.05)',
      boxShadow: '0 0 20px rgba(106, 193, 255, 0.3)',
      top: '0px',
      left: '0px',
      transform: 'translate3d(0, 0, 0)',
      willChange: 'transform',
      // Removed transition to prevent conflicts with JS transforms
    });
    
    // Dot cursor styles - optimized for performance
    Object.assign(cursorDot.style, {
      width: '6px',
      height: '6px',
      background: '#6ac1ff',
      borderRadius: '50%',
      position: 'fixed',
      pointerEvents: 'none',
      zIndex: '999999',
      boxShadow: '0 0 10px rgba(106, 193, 255, 0.8)',
      top: '0px',
      left: '0px',
      transform: 'translate3d(0, 0, 0)',
      willChange: 'transform',
      // Removed transition to prevent conflicts with JS transforms
    });
    
    cursor.className = 'custom-cursor';
    cursorDot.className = 'custom-cursor-dot';
    
    document.body.appendChild(cursor);
    document.body.appendChild(cursorDot);

    // Mouse position tracking
    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    let cursorDotX = 0;
    let cursorDotY = 0;
    let isHovering = false;
    let currentScale = 1;
    let targetScale = 1;
    let currentDotScale = 1;
    let targetDotScale = 1;
    let currentWidth = 24;
    let targetWidth = 24;
    let currentHeight = 24;
    let targetHeight = 24;

    // Mouse move handler - throttled for better performance
    let ticking = false;
    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      if (!ticking) {
        requestAnimationFrame(() => {
          ticking = false;
        });
        ticking = true;
      }
    };

    // Optimized hover handlers
    const handleMouseEnter = (e) => {
      if (hoveredElements.current.has(e.target)) return;
      hoveredElements.current.add(e.target);
      
      isHovering = true;
      targetScale = 1.0; // Keep scale at 1 since we're changing size
      targetDotScale = 1.5;
      targetWidth = 48;
      targetHeight = 48;
      
      cursor.style.borderColor = '#80caff';
      cursor.style.background = 'rgba(128, 202, 255, 0.1)';
      cursor.style.boxShadow = '0 0 30px rgba(128, 202, 255, 0.5)';
      
      cursorDot.style.background = '#80caff';
      cursorDot.style.boxShadow = '0 0 15px rgba(128, 202, 255, 1)';
    };

    const handleMouseLeave = (e) => {
      hoveredElements.current.delete(e.target);
      
      // Only reset if no other elements are being hovered
      if (hoveredElements.current.size === 0) {
        isHovering = false;
        targetScale = 1;
        targetDotScale = 1;
        targetWidth = 24;
        targetHeight = 24;
        
        cursor.style.borderColor = '#6ac1ff';
        cursor.style.background = 'rgba(106, 193, 255, 0.05)';
        cursor.style.boxShadow = '0 0 20px rgba(106, 193, 255, 0.3)';
        
        cursorDot.style.background = '#6ac1ff';
        cursorDot.style.boxShadow = '0 0 10px rgba(106, 193, 255, 0.8)';
      }
    };

    // Optimized animation loop
    const animateCursor = () => {
      // Smooth interpolation for main cursor
      cursorX += (mouseX - cursorX) * 0.08;
      cursorY += (mouseY - cursorY) * 0.08;
      
      // Faster interpolation for dot
      cursorDotX += (mouseX - cursorDotX) * 0.2;
      cursorDotY += (mouseY - cursorDotY) * 0.2;

      // Smooth size interpolation
      currentWidth += (targetWidth - currentWidth) * 0.12;
      currentHeight += (targetHeight - currentHeight) * 0.12;
      
      // Smooth scale interpolation
      currentScale += (targetScale - currentScale) * 0.15;
      currentDotScale += (targetDotScale - currentDotScale) * 0.2;

      // Apply smooth size changes
      cursor.style.width = `${currentWidth}px`;
      cursor.style.height = `${currentHeight}px`;

      // Apply transforms with smooth scaling
      cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0) scale(${currentScale})`;
      cursorDot.style.transform = `translate3d(${cursorDotX}px, ${cursorDotY}px, 0) scale(${currentDotScale})`;

      animationRef.current = requestAnimationFrame(animateCursor);
    };

    // Add event listeners
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    
    // Optimized hover listener management
    const addHoverListeners = () => {
      const hoverableElements = document.querySelectorAll(
        'a, button, .hoverable, [role="button"], input, textarea, select, .cursor-hover'
      );
      
      hoverableElements.forEach((element) => {
        // Check if listener already exists
        if (!element.hasAttribute('data-cursor-listener')) {
          element.setAttribute('data-cursor-listener', 'true');
          element.addEventListener('mouseenter', handleMouseEnter);
          element.addEventListener('mouseleave', handleMouseLeave);
        }
      });
    };

    // Initial setup
    addHoverListeners();
    
    // Optimized mutation observer - debounced to prevent excessive calls
    let mutationTimeout;
    const observer = new MutationObserver(() => {
      clearTimeout(mutationTimeout);
      mutationTimeout = setTimeout(addHoverListeners, 100);
    });
    
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    // Start animation
    animateCursor();

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      
      // Clean up hover listeners
      const elementsWithListeners = document.querySelectorAll('[data-cursor-listener]');
      elementsWithListeners.forEach((element) => {
        element.removeEventListener('mouseenter', handleMouseEnter);
        element.removeEventListener('mouseleave', handleMouseLeave);
        element.removeAttribute('data-cursor-listener');
      });
      
      if (document.body.contains(cursor)) {
        document.body.removeChild(cursor);
      }
      if (document.body.contains(cursorDot)) {
        document.body.removeChild(cursorDot);
      }
      
      observer.disconnect();
      clearTimeout(mutationTimeout);
    };
  }, []);

  return null;
};

export default TechCursor; 